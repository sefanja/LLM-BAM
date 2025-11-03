//======================================================================
// ARCHITECTURAL COHERENCE VALIDATOR - FINAL VERSION (CLEANED AND DEBUGGED)
//
// This script is ready for use in the jArchi console for formal experimentation.
//======================================================================

/**
 * Helper function to simplify conversion of jArchi collection to Array.
 * @param {jArchiCollection} collection 
 * @returns {Array<Object>}
 */
const toArray = (collection) => {
    const arr = [];
    collection.each(i => arr.push(i));
    return arr;
};

function getParent(element) {
    return element.inRels('composition-relationship').sourceEnds().first();
}

const getChildren = (element) => {
    return element.outRels('composition-relationship').targetEnds();
}

const getRoot = (element) => {
    let current = element;
    while (true) {
        const parent = getParent(current);
        if (!parent) return current.first();
        current = $(parent); 
    }
};

/**
 * Finds the number of ancestors for an element based on Composition relationships. (C0)
 * @param {JArchiCollection} element
 * @returns {number}
 */
const getAncestorCount = (element) => {
    let count = 0;
    let current = element;
    
    // De lus gaat door zolang we een ouder vinden
    while (true) {
        const parent = getParent(current);
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
 * @param {jArchiCollection} element 
 * @returns {boolean} True if the element is its own ancestor.
 */
const isOwnAncestor = (element) => {
    let current = element;
    const initialId = element.id;
    
    // De lus gaat door zolang we omhoog kunnen
    while (true) {
        const parent = getParent(current);
        
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
 * @param {jArchiCollection} element - The starting capability.
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
 * @param {jArchiCollection | Array<string>} violations 
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
            coherence: false // false if the rule concerns only one element type, true if it concerns coherence between submodels
            // Added later: opportunityCount, violationCount, examples
        },
        C1: {
            name: 'Unique Parent',
            statement: 'Each element has at most one parent.',
            rationale: 'This ensures a single, unambiguous position for every element in the hierarchy.',
            coherence: false
        },
        C2: {
            name: 'Acyclicity',
            statement: 'An element cannot be its own ancestor.',
            rationale: 'This prevents ill-defined, circular refinement structures.',
            coherence: false
        },
        C3: {
            name: 'Consistent Refinement Depth',
            statement: "All hierarchies must be 'balanced'. All leaf elements must exist at the same level of detail.",
            rationale: 'This prevents incomplete levels of detail, which create both structural gaps and semantic ambiguity. An unbalanced model leaves the meaning of its most detailed elements unclear, as their defining peer group is incomplete.',
            coherence: false
        },
        C4: {
            name: 'Upward Coherence',
            statement: 'A non-hierarchical relationship between two elements requires a corresponding relationship between their parents (if any), with one exception: the relationship does not need to be propagated if the parent elements are both primary capabilities within the same top-level value stream.',
            coherence: true
        },
        C5: {
            name: 'Downward Coherence',
            statement: 'A relationship between two parent elements requires that at least one pair of their respective children is also related.',
            rationale: 'This ensures that high-level relationships are grounded in more detailed, concrete relations.',
            coherence: true
        },
        C6: {
            name: 'Capability Impact',
            statement: 'Each business capability must transform exactly one business object, with one exception: at the leaf level it may transform multiple objects.',
            rationale: 'This ensures that every capability has a well-defined, non-overlapping impact on value creation. The exception at the leaf-level prevents the model from having to use unnatural language not typically used by the business.',
            coherence: true
        },
        C7: {
            name: 'Object Relevance',
            statement: 'Each business object must be transformed by exactly one business capability, with one exception: at the leaf level, an object may be transformed by multiple capabilities.',
            rationale: "This ensures clear relevancy and accountability for the object in value-creating activities. The exception at the leaf-level prevents the modeler from having to identify overly detailed object lifecycle stages that would otherwise make the model unrecognizable.",
            coherence: true
        },
        C8: {
            name: 'Capability Purpose',
            statement: 'Each capability must either directly realize a value stream stage or support another capability that does.',
            rationale: 'This guarantees that all potential is ultimately linked to a value-creating purpose.',
            coherence: true
        },
        C9: {
            name: 'Traceability',
            statement: 'Each value stream stage must be realized by exactly one capability.',
            rationale: 'This constraint ensures traceability and governability. It establishes a clear, unambiguous link from value-creating action back to the accountable capability.',
            coherence: true
        }
    },
    summary: { opportunityCount: 0, violationCount: 0, rulesViolated: [], rulesPassed: [] }
};

/**
 * Updates the global report structure with the results for a specific rule.
 * @param {string} rule - The rule key (e.g., 'C1').
 * @param {jArchiCollection} space - The set of elements/relations where the rule applies (the rule violation opportunity space).
 * @param {jArchiCollection} compliant - The set of elements/relations compliant with the rule.
 */
const updateReport = (rule, space, compliant) => {
    const violations = space.filter(s => compliant.filter('#' + s.id).size() < 1);
    const opportunityCount = space.size();
    const violationCount = violations.size();

    report.rules[rule].opportunityCount = opportunityCount;
    report.rules[rule].violationCount = violationCount;
    report.rules[rule].examples = getExamples(violations);

    if (violationCount === 0) {
        report.summary.rulesPassed.push(rule);
    } else {
        report.summary.rulesViolated.push(rule);
    }
};

// ====================================================================
// CONSTRAINT IMPLEMENTATION
// ====================================================================

let space; // The space of opportunities to violate a constraint
let compliant; // The items that comply to the constraint

// --- C0: Valid Level (Property vs. Ancestor Count) ---
space = $('element');
compliant = space.filter(e => parseInt($(e).prop('Level')) === getAncestorCount($(e)));
updateReport('C0', space, compliant);


// --- C1: Unique Parent ---
space = $('element').filter(e => getAncestorCount($(e)) > 0); // Elements having a parent
compliant = space.filter(e => $(e).inRels('composition-relationship').size() < 2);
updateReport('C1', space, compliant);


// --- C2: Acyclicity ---
space = $('element').filter(e => getAncestorCount($(e)) > 0); // Elements having a parent
compliant = space.filter(e => !isOwnAncestor($(e)));
updateReport('C2', space, compliant);


// --- C3: Consistent Refinement Depth (Leaf Violation Density) ---
space = $('element').filter(e => isLeafElement($(e)));

const depthCounts = {};
space.each(e => {
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

compliant = space.filter(e => $(e).prop('Level') === dominantDepth);
updateReport('C3', space, compliant);


// --- C4: Upward Coherence ---
// opportunity space: Alle niet-hiërarchische relaties tussen elementen die zelf kinderen zijn (hebben een parent)
space = $('relation').not('composition-relationship').filter(r =>
    getAncestorCount($(r.source)) > 0 || getAncestorCount($(r.target)) > 0); // Top-level relations have no opporunity for violation

// compliant: Relaties waar de ouders direct met dezelfde relatie verbonden zijn, of waar de ouders gelijk zijn, of waarde ouders capabilities in dezelfde waardestroom zijn.
compliant = space.filter(r => {
    const sourceTopVSIDs = getDirectlySupportedTopValueStreams($(r.source));
    const targetTopVSIDs = getDirectlySupportedTopValueStreams($(r.target));
    const sameValueStream = Array.from(sourceTopVSIDs).some(sourceID => targetTopVSIDs.has(sourceID));
    if (sameValueStream) return true; // Support/serving relationships between primary capabilities within the same value stream are left implicit

    const sourceParent = getParent($(r.source));
    const targetParent = getParent($(r.target));
    if (sourceParent.id === targetParent.id) return true; // No need for reflexive relations
    
    const parentRelExists = $(sourceParent).outRels(r.type).targetEnds().filter(tp => tp.id === targetParent.id).size() > 0;
    
    return parentRelExists;
});
updateReport('C4', space, compliant);

// --- C5: Downward Coherence ---
// violation opportunity space: Alle niet-hiërarchische relaties die zich niet op het diepste niveau bevinden
space = $('relation').not('composition-relationship').filter(r =>
    getChildren($(r.source)).size() > 0
    || getChildren($(r.target)).size() > 0);

compliant = space.filter(r => {
    const sourceChildren = getChildren($(r.source));
    const targetChildren = getChildren($(r.target));
    
    // Zoek of er ten minste één relatie van type r.type van een sourceChild naar een targetChild gaat.
    const numberOfChildRels = sourceChildren.outRels(r.type).targetEnds().filter(tc => 
        targetChildren.filter(ttc => ttc.id === tc.id).size() > 0
    ).size();
    
    return numberOfChildRels > 0;
});
updateReport('C5', space, compliant);


// --- C6: Capability Impact (Capability -> Object) ---
space = $('capability');
compliant = space.filter(e => {
    let businessObjects = $(e).outRels('association-relationship').targetEnds('business-object').size();
    if (isLeafElement($(e))) {
        return businessObjects > 0;
    } else {
        return businessObjects === 1;
    }
});
updateReport('C6', space, compliant);


// --- C7: Object Relevance (Object <- Capability) ---
space = $('business-object');
compliant = space.filter(e => {
    let capabilities = $(e).inRels('association-relationship').sourceEnds('capability').size();
    if (isLeafElement($(e))) {
        return capabilities > 0;
    } else {
        return capabilities === 1;
    }
});
updateReport('C7', space, compliant);


// --- C8: Capability Purpose (Transitive Reachability) ---
space = $('capability');
compliant = space.filter(e => supportsValueStream($(e)));
updateReport('C8', space, compliant);


// --- C9: Traceability (Exactly One Realizer for Stages) ---
space = $('value-stream');
compliant = space.filter(e => $(e).inRels('serving-relationship').sourceEnds('capability').size() === 1);
updateReport('C9', space, compliant);

/**
 * Helper function to check if an element is at the deepest, 'leaf' level of its hierarchy.
 * @param {jArchiCollection} element 
 * @returns {boolean}
 */
function isLeafElement(element) {
    // Een element is een 'blad' als het geen Composition uitgaande relaties heeft
    return element.outRels('composition-relationship').size() === 0;
}


// ====================================================================
// CONSOLE OUTPUT
// ====================================================================

const totalViolationOpportunities = Object.values(report.rules).reduce((sum, rule) => sum + rule.opportunityCount, 0);
const totalViolations = Object.values(report.rules).reduce((sum, rule) => sum + rule.violationCount, 0);

const coherenceViolationOpportunities = Object.values(report.rules).reduce((sum, rule) => rule.coherence ? sum + rule.opportunityCount : 0, 0);
const coherenceViolations = Object.values(report.rules).reduce((sum, rule) => rule.coherence ? sum + rule.violationCount : 0, 0);

console.clear();
console.show();

console.log('======================================================================');
console.log('          ARCHITECTURAL COHERENCE VALIDATION REPORT');
console.log('======================================================================');
console.log();
console.log('OVERALL STATUS: ' + (totalViolations > 0 ? 'FAILED' : 'PASSED'));
console.log('');
console.log('VALIDATION SUMMARY:');
console.log(`  - Total Violations: ${totalViolations}/${totalViolationOpportunities} (${Math.round(totalViolations/totalViolationOpportunities * 10000) / 100}%)`);
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
            console.log(' * Examples of violating items: ');
            val.examples.forEach(ex => console.log('   - ' + ex));
        }
    }
}

console.log();
console.log('======================================================================');


// Extra output for reporting, not to feed back to the LLM

/**
 * Calculates the total number of unique Top-Level (L0) Value Streams 
 * a Capability influences (directly or indirectly).
 * This is the mechanism for the Cross-Stream Utilization Index.
 * 
 * @param {JArchiCollection} capability - The single Capability element to start the search from.
 * @returns {Set<string>} A Set of unique L0 Value Stream IDs.
 */
function getDirectlySupportedTopValueStreams(capability) {
    const topStreamIDs = new Set(); 
    
    const valueStreams = capability.outRels('serving-relationship').targetEnds('value-stream');

    valueStreams.each(vs => {
        const topVSId = getRoot($(vs)).id;
        if (topVSId) topStreamIDs.add(topVSId);
    });

    return topStreamIDs;
}

/**
 * Calculates the total number of unique Top-Level (L0) Value Streams 
 * a Capability influences (directly or indirectly).
 * This is the mechanism for the Cross-Stream Utilization Index.
 * 
 * @param {JArchiCollection} startingCapability - The single Capability element to start the search from.
 * @returns {Set<string>} A Set of unique L0 Value Stream IDs.
 */
function getSupportedTopValueStreams(startingCapability) {
    // De queue is een Set/Array van element-wrappers
    const queue = toArray(startingCapability); 
    const visitedCapabilities = new Set(startingCapability.map(e => e.id));
    const topStreamIDs = new Set(); 
    
    while (queue.length > 0) {
        const currentCapability = $(queue.shift());
        const consumers = currentCapability.outRels('serving-relationship').targetEnds();

        // 1. DIRECTE INVLOED (BASE CASE)
        consumers.filter('value-stream').each(vs => {
            const topVSId = getRoot($(vs)).id;
            if (topVSId) topStreamIDs.add(topVSId);
        });

        // 2. INDIRECTE INVLOED (TRANSITIVE CLOSURE)
        consumers.filter('capability').each(dependentCap => {
            if (!visitedCapabilities.has(dependentCap.id)) {
                visitedCapabilities.add(dependentCap.id);
                queue.push(dependentCap);
            }
        });
    }

    return topStreamIDs; 
}

const utilization = [];
$('capability').each(e => {
    const topVSIDs = getSupportedTopValueStreams($(e));
    utilization.push(topVSIDs.size);
});
const utilizationRate = utilization.reduce((a, b) => a + b, 0) / utilization.length;

let levels = [];
$('element').each(e => levels.push($(e).prop('Level')));
levels = Array.from(new Set(levels));

console.log();
console.log('Elements: ' + $('element').size());
console.log('Relations: ' + $('relation').size());
console.log('Levels: ' + levels);
console.log(`Coherence Violations: ${coherenceViolations}/${coherenceViolationOpportunities} (${Math.round(coherenceViolations/coherenceViolationOpportunities * 10000) / 100}%)`);
console.log('Cross-Stream Utilization Index: ' + Math.round(utilizationRate * 10) / 10);
