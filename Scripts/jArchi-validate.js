//======================================================================
// ARCHITECTURAL COHERENCE VALIDATOR - FINAL VERSION (CLEANED AND DEBUGGED)
//
// This script is ready for use in the jArchi console for formal experimentation.
//======================================================================

/**
 * Helper function to simplify conversion of jArchi collection to Array.
 * @param {JQueryCollection} collection 
 * @returns {Array<Object>}
 */
const toArray = (collection) => {
    const arr = [];
    collection.each(i => arr.push(i));
    return arr;
};

/**
 * Finds the number of ancestors for an element based on Composition relationships. (C0)
 * @param {JQueryCollection} element 
 * @returns {number}
 */
const getAncestorCount = (element) => {
    let count = 0;
    let current = element;
    
    // De lus gaat door zolang we een ouder vinden
    while (true) {
        const parent = current.inRels('composition-relationship').sourceEnds().first();
        if (parent === undefined || parent === null) {
            break; // Geen ouder meer gevonden, stop
        }
        current = $(parent); // Maak een jArchi object van de ouder
        count++;
    }
    return count;
};

/**
 * Checks for Acyclicity (C2).
 * @param {JQueryCollection} element 
 * @returns {boolean} True if the element is its own ancestor.
 */
const isOwnAncestor = (element) => {
    let current = element;
    const initialId = element.id;
    
    // De lus gaat door zolang we omhoog kunnen
    while (true) {
        const parent = current.inRels('composition-relationship').sourceEnds().first();
        
        if (parent === undefined || parent === null) {
            break; // Geen ouder meer, geen cyclus
        }
        
        // Controleer of de ouder de oorspronkelijke is
        if (parent.id === initialId) return true;
        
        current = $(parent); // Update current naar de gevonden ouder
    }
    return false;
};

/**
 * Checks if a capability (directly or transitively) supports a Value Stream. (C8)
 * @param {JQueryCollection} element - The starting capability.
 * @returns {boolean}
 */
const supportsValueStream = (element) => {
    const queue = toArray(element);
    const visited = new Set(element.map(e => e.id));

    while (queue.length > 0) {
        const currentCapability = $(queue.shift());
        const consumers = currentCapability.outRels('serving-relationship').targetEnds();

        // Direct realization of a Value Stream found
        if (consumers.filter('value-stream').size() > 0) {
            return true;
        }

        // Add dependent capabilities to the queue
        consumers.filter('capability').each(dependentCap => {
            if (!visited.has(dependentCap.id)) {
                visited.add(dependentCap.id);
                queue.push(dependentCap);
            }
        });
    }
    return false;
};

/**
 * Formats a list of violating items for console output.
 * @param {JQueryCollection | Array<string>} violations 
 * @param {number} max 
 * @returns {Array<string>}
 */
const getExamples = (violations, max = 3) => {
    const examples = [];
    const violationArray = Array.isArray(violations) ? violations : toArray(violations);
    const size = violationArray.length;

    for (let i = 0; i < max && i < size; i++) {
        const v = violationArray[i];
        if (typeof v === 'string') {
            examples[i] = v;
        } else if (v.type.includes('-relationship')) {
            const sourceName = v.source ? v.source.name : 'undefined';
            const targetName = v.target ? v.target.name : 'undefined';
            examples[i] = `${v.type}: (${sourceName}) --> (${targetName})`;
        } else {
            examples[i] = `${v.type}: ${v.name}`;
        }
    }
    return examples;
};

// ====================================================================
// REPORT STRUCTURE & LOGIC
// ====================================================================

const report = {
    rules: {
        C0: {
            name: 'Valid Level',
            statement: 'Each element must be assigned a level that corresponds to its number of ancestors.',
            rationale: "A correct 'Level' property for each element makes it easier to validate the model.",
            fix: "Assign each element a 'Level' property that corresponds to its position in the hierarchy, starting at '0' for the top-level elements."
        },
        C1: {
            name: 'Unique Parent',
            statement: 'Each element has at most one parent.',
            rationale: 'This ensures a single, unambiguous position for every element in the hierarchy.',
            fix: "For each violating element, review its incoming 'Composition' relationships and ensure only one remains."
        },
        C2: {
            name: 'Acyclicity',
            statement: 'An element cannot be its own ancestor.',
            rationale: 'This prevents ill-defined, circular refinement structures.',
            fix: "Review the hierarchy for the violating element and remove the 'Composition' relationship that creates a circular dependency (e.g., A contains B, and B contains A)."
        },
        C3: {
            name: 'Consistent Refinement Depth',
            statement: "All hierarchies must be 'balanced'. All leaf elements must exist at the same level of detail.",
            rationale: 'This prevents incomplete levels of detail, which create both structural gaps and semantic ambiguity. An unbalanced model leaves the meaning of its most detailed elements unclear, as their defining peer group is incomplete.',
            fix: "Adjust the hierarchies by either decomposing the shallower elements further or aggregating the deeper ones, so all final 'leaf' elements are at the same level."
        },
        C4: {
            name: 'Upward Coherence',
            statement: 'A relationship between two elements requires a corresponding relationship between their parents.',
            rationale: 'This ensures that low-level relationships are reflected at higher levels of abstraction. The exception allows lower-level support relations to remain implicit at higher levels.',
            fix: "For each violating child-level relationship, add the corresponding missing relationship between the parent elements."
        },
        C5: {
            name: 'Downward Coherence',
            statement: 'A relationship between two parent elements requires that at least one pair of their respective children is also related.',
            rationale: 'This ensures that high-level relationships are grounded in more detailed, concrete relations.',
            fix: "For each violating parent-level relationship, identify a logical pair of child elements and add a corresponding relationship between them."
        },
        C6: {
            name: 'Capability Impact',
            statement: 'Each capability must transform at least one business object.',
            rationale: 'This ensures that every defined capability is meaningful by having a concrete impact on a business object. It prevents the modeling of abstract capabilities without a clear target for value creation.',
            fix: "For each violating capability, either add an 'association-relationship' to a relevant business object or remove the capability."
        },
        C7: {
            name: 'Object Relevance',
            statement: 'Each business object must be modified by at least one capability.',
            rationale: "This ensures that every business object is relevant to the organization's value-creating activities. It prevents the inclusion of objects that are never acted upon, keeping the model focused and purposeful.",
            fix: "For each violating business object, either add an 'association-relationship' from a relevant capability or remove the object."
        },
        C8: {
            name: 'Capability Purpose',
            statement: 'Each capability must either directly realize a value stream stage or support another capability that does.',
            rationale: 'This guarantees that all potential is ultimately linked to a value-creating purpose.',
            fix: "For each violating capability, ensure it is connected to the value creation process by either adding a 'serving-relationship' to a value stream stage or a 'serving-relationship' to another capability."
        },
        C9: {
            name: 'Traceability',
            statement: 'Each value stream stage must be realized by exactly one capability.',
            rationale: 'This constraint ensures traceability and governability. It establishes a clear, unambiguous link from value-creating action back to the accountable capability.',
            fix: "For each violating value stream stage, review its incoming 'serving' relationships and ensure there is exactly one. Add a relationship if one is missing, or remove duplicates."
        }
    },
    summary: { opportunityCount: 0, violationCount: 0, rulesViolated: [], rulesPassed: [] }
};

/**
 * Updates the global report structure with the results for a specific rule.
 * @param {string} rule - The rule key (e.g., 'C1').
 * @param {JQueryCollection | number} opportunities - The set of elements/relations where the rule applies.
 * @param {JQueryCollection | number} violations - The set of elements/relations violating the rule.
 */
const updateReport = (rule, opportunities, violations) => {
    const opportunityCount = typeof opportunities === 'number' ? opportunities : opportunities.size();
    const violationCount = typeof violations === 'number' ? violations : violations.size();

    report.rules[rule].opportunityCount = opportunityCount;
    report.rules[rule].violationCount = violationCount;
    report.rules[rule].examples = getExamples(violations);

    report.summary.opportunityCount += opportunityCount;
    report.summary.violationCount += violationCount;
    
    if (violationCount === 0) {
        report.summary.rulesPassed.push(rule);
    } else {
        report.summary.rulesViolated.push(rule);
    }
};

// ====================================================================
// CONSTRAINT IMPLEMENTATION
// ====================================================================

let opportunities, violations;

// --- C0: Valid Level (Property vs. Ancestor Count) ---
opportunities = $('element').filter(e => $(e).prop('Level') !== undefined);
violations = opportunities.filter(e => parseInt($(e).prop('Level')) !== getAncestorCount($(e)));
updateReport('C0', opportunities, violations);


// --- C1: Unique Parent ---
opportunities = $('element').filter(e => getAncestorCount($(e)) > 0); // Elements that should have a parent
violations = $('element').filter(e => $(e).inRels('composition-relationship').size() > 1);
updateReport('C1', opportunities, violations);


// --- C2: Acyclicity ---
opportunities = $('element');
violations = opportunities.filter(e => isOwnAncestor($(e)));
updateReport('C2', opportunities, violations);


// --- C3: Consistent Refinement Depth (Leaf Violation Density) ---
opportunities = $('element').filter(e => $(e).outRels('composition-relationship').size() === 0);
const leafElements = opportunities.filter(e => $(e).prop('Level') !== '0'); 
const totalLeavesToMeasure = leafElements.size();

if (totalLeavesToMeasure === 0) {
    updateReport('C3', 0, 0); 
} else {
    const depthCounts = {};
    leafElements.each(e => {
        const level = $(e).prop('Level');
        depthCounts[level] = (depthCounts[level] || 0) + 1;
    });

    let maxCount = 0;
    let dominantDepth = null;
    for (const level in depthCounts) {
        if (depthCounts[level] > maxCount) {
            maxCount = depthCounts[level];
            dominantDepth = level;
        }
    }

    violations = leafElements.filter(e => $(e).prop('Level') !== dominantDepth);
    updateReport('C3', totalLeavesToMeasure, violations);
}


// --- C4: Upward Coherence ---
// opportunities: Alle niet-hiërarchische relaties tussen elementen die zelf kinderen zijn (hebben een parent)
opportunities = $('relation').not('composition-relationship').filter(r =>
    getAncestorCount($(r.source)) > 0 && getAncestorCount($(r.target)) > 0);

// violations: Relaties waar de ouders NIET direct met dezelfde relatie verbonden zijn.
violations = opportunities.filter(r => {
    const sourceParent = $(r.source).inRels('composition-relationship').sourceEnds().first();
    const targetParent = $(r.target).inRels('composition-relationship').sourceEnds().first();

    // 1. Veiligheidscheck (zou niet mogen falen door de opportuniteitsfilter)
    if (!sourceParent || !targetParent) return false; 
    
    // 2. CRUCIALE EXCLUSIE: Als de ouders hetzelfde zijn, is de regel voldaan.
    // Geen noodzaak voor een reflexieve relatie.
    if (sourceParent.id === targetParent.id) return false; 
    
    // 3. De eigenlijke C4-check: Controleer of de parent-relatie van type r.type bestaat.
    const parentRelExists = $(sourceParent).outRels(r.type).targetEnds().filter(tp => tp.id === targetParent.id).size() > 0;
    
    return !parentRelExists;
});
updateReport('C4', opportunities, violations);

// --- C5: Downward Coherence ---
// opportunities: Alle niet-hiërarchische relaties tussen elementen die zelf ouders zijn (hebben kinderen)
opportunities = $('relation').not('composition-relationship').filter(r =>
    $(r.source).outRels('composition-relationship').size() > 0
    && $(r.target).outRels('composition-relationship').size() > 0);

// violations: Relaties waar de kinderen NIET verbonden zijn.
violations = opportunities.filter(r => {
    const sourceChildren = $(r.source).outRels('composition-relationship').targetEnds();
    const targetChildren = $(r.target).outRels('composition-relationship').targetEnds();
    
    // Zoek of er ten minste één relatie van type r.type van een sourceChild naar een targetChild gaat.
    const numberOfChildRels = sourceChildren.outRels(r.type).targetEnds().filter(tc => 
        targetChildren.filter(ttc => ttc.id === tc.id).size() > 0
    ).size();
    
    return numberOfChildRels === 0; // Als er GEEN ENKELE relatie tussen de kinderen bestaat.
});
updateReport('C5', opportunities, violations);


// --- C6: Capability Impact (Capability -> Object) ---
opportunities = $('capability');
violations = opportunities.filter(e => $(e).outRels('association-relationship').targetEnds('business-object').size() < 1);
updateReport('C6', opportunities, violations);


// --- C7: Object Relevance (Object <- Capability) ---
opportunities = $('business-object');
violations = opportunities.filter(e => $(e).inRels('association-relationship').sourceEnds('capability').size() < 1);
updateReport('C7', opportunities, violations);


// --- C8: Capability Purpose (Transitive Reachability) ---
opportunities = $('capability');
violations = opportunities.filter(e => !supportsValueStream($(e)));
updateReport('C8', opportunities, violations);


// --- C9: Traceability (Exactly One Realizer for Stages) ---
opportunities = $('value-stream');
violations = opportunities.filter(e => $(e).inRels('serving-relationship').sourceEnds('capability').size() !== 1);
updateReport('C9', opportunities, violations);


// ====================================================================
// CONSOLE OUTPUT
// ====================================================================

// Functie voor de totale kansen is nodig omdat de sommatie in updateReport te complex is
const getTotalOpportunities = () => {
    // Totalen zijn al berekend in de summary. We corrigeren alleen voor C0/C1/C2/C3 die we niet in de totale metriek willen.
    // De 'Total Violations' zijn de teller. De kans is de som van de kansen van de 6 aligneringsregels (C4-C9)
    const alignmentOpportunityKeys = ['C4', 'C5', 'C6', 'C7', 'C8', 'C9'];
    return alignmentOpportunityKeys.reduce((sum, key) => sum + report.rules[key].opportunityCount, 0);
}

const totalAlignmentOpportunities = getTotalOpportunities();
const totalViolations = report.summary.violationCount; // Dit is de som van alle individuele overtredingen


console.clear();
console.show();

console.log('======================================================================');
console.log('          ARCHITECTURAL COHERENCE VALIDATION REPORT');
console.log('======================================================================');
console.log();
console.log('OVERALL STATUS: ' + (totalViolations > 0 ? 'FAILED' : 'PASSED'));
console.log('');
console.log('VALIDATION SUMMARY:');
// Nu gebruiken we de totale kansen van de 6 alignment/coherence regels
console.log(`  - Total Violations: ${totalViolations}/${totalAlignmentOpportunities} (${Math.round(totalViolations/totalAlignmentOpportunities * 10000) / 100}%)`);
console.log('  - FAILED Rules: ' + (report.summary.rulesViolated.length > 0 ? report.summary.rulesViolated.join(', ') : 'None'));
console.log('  - PASSED Rules: ' + (report.summary.rulesPassed.length > 0 ? report.summary.rulesPassed.join(', ') : 'None'));

if (totalViolations > 0) {
    console.log();
    console.log('----------------------------------------------------------------------');
    console.log('                   DETAILED VIOLATION ANALYSIS');
    console.log('----------------------------------------------------------------------');
 
    for (const [key, val] of Object.entries(report.rules)) {
        if (val.violationCount > 0) {
            console.log();
            console.log(`[!!] ${key} - ${val.name}: ${val.violationCount}/${val.opportunityCount} (${Math.round(val.violationCount/val.opportunityCount * 10000) / 100}%)`);
            console.log('----------------------------------------------------------------------');
            console.log(' * Statement: ' + val.statement);
            console.log(' * Rationale: ' + val.rationale);
            // console.log(' * Suggested Fix: ' + val.fix); // No suggested fix, because we do not want to instruct the LLM at this stage.
            console.log(' * Examples of violating items: ');
            val.examples.forEach(ex => console.log('   - ' + ex));
        }
    }
}

console.log();
console.log('======================================================================');

// Extra output for reporting, not to feed back to the LLM

// Hulpfunctie om de top-level element-ID te vinden
const getTopLevelId = (element) => {
    let current = element;
    while (true) {
        const parent = current.inRels('composition-relationship').sourceEnds().first();
        if (!parent) return current.first().id; 
        current = $(parent); 
    }
};

/**
 * Calculates the total number of unique Top-Level (L0) Value Streams 
 * a Capability influences (directly or indirectly).
 * This is the mechanism for the Cross-Stream Utilization Index.
 * 
 * @param {JArchiCollection} startingCapability - The single Capability element to start the search from.
 * @returns {Set<string>} A Set of unique L0 Value Stream IDs.
 */
function getTopValueStreams(startingCapability) {
    // De queue is een Set/Array van element-wrappers
    const queue = toArray(startingCapability); 
    const visitedCapabilities = new Set(startingCapability.map(e => e.id));
    const topStreams = new Set(); 
    
    while (queue.length > 0) {
        const currentCapability = $(queue.shift());
        const consumers = currentCapability.outRels('serving-relationship').targetEnds();

        // 1. DIRECTE INVLOED (BASE CASE)
        consumers.filter('value-stream').each(vs => {
            const topVSId = getTopLevelId($(vs)); // Gebruik de correcte helper
            if (topVSId) topStreams.add(topVSId);
        });

        // 2. INDIRECTE INVLOED (TRANSITIVE CLOSURE)
        consumers.filter('capability').each(dependentCap => {
            if (!visitedCapabilities.has(dependentCap.id)) {
                visitedCapabilities.add(dependentCap.id);
                queue.push(dependentCap);
            }
        });
    }

    return topStreams; 
}

const utilization = [];
$('capability').each(e => {
    const topVSCodes = getTopValueStreams($(e));
    utilization.push(topVSCodes.size); // Gebruik .size op de Set
});
const utilizationRate = utilization.reduce((a, b) => a + b, 0) / utilization.length;

let levels = [];
$('element').each(e => levels.push($(e).prop('Level')));
levels = Array.from(new Set(levels));

console.log();
console.log('Cross-Stream Utilization Index: ' + utilizationRate);
console.log('Elements: ' + $('element').size());
console.log('Relations: ' + $('relation').size());
console.log('Levels: ' + levels);
