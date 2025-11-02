const MAX_LEVEL = 4;
const SUPPORTED_LEVELS = [...Array(MAX_LEVEL + 1).keys()].map(String);

function toArray(collection) {
    let arr = [];
    collection.each(i => arr.push(i));
    return arr;
}

function countAncestors(e) {
    let visited = new Set();
    let count = 0;
    function countAn(e) {
        e.each(e => visited.add(e.id));
        let parents = e.inRels('composition-relationship').sourceEnds();
        if (parents.size() > 0 && parents.filter(p => visited.has(p.id)).size() === 0) {
            count++;
            countAn(parents);
        }
    }
    countAn($(e));
    return count;
}

function isOwnAncestor(e) {
    let visited = new Set();
    function isOwnAn(e) {
        $(e).each(e => visited.add(e.id));
        let parents = $(e).inRels('composition-relationship').sourceEnds();
        if (parents.size() === 0) {
            return false;
        } else if (parents.filter(p => visited.has(p.id)).size() > 0) {
            return true;
        } else {
            return isOwnAn(parents);
        }
    }
    return isOwnAn(e);
}

function supportsValueStream(e) {
    let visited = new Set();
    function supportsVS(e) {
        e.each(c => visited.add(e.id));
        let consumers = e.outRels('serving-relationship').targetEnds();
        if (consumers.filter('value-stream').size() > 0) {
            return true;
        } else {
            let nonVisited = consumers.filter('capability').filter(c => !visited.has(c.id));
            if (nonVisited.size() > 0) {
                return supportsVS(nonVisited);
            } else {
                return false;
            }
        }
    }
    return supportsVS($(e));
}

function getExamples(violations, max = 3) {
    let examples = [];
    let size = Array.isArray(violations) ? violations.length : violations.size();
    for (let i = 0; i < max && i < size; i++) {
        let v = Array.isArray(violations) ? violations[i] : violations.get(i);
        if (typeof v === 'string') {
            examples[i] = v;
        } else if (v.type.includes('-relationship')) {
            examples[i] = `${v.type}: (${v.source}) --> (${v.target})`;
        } else { // assume element
            examples[i] = `${v.type}: ${v.name}`;
        }
    }
    return examples;
}

let report = {
    rules: {
        C0: {
            name: 'Valid Level',
            statement: 'Each element must be assigned a level that corresponds to its number of ancestors.',
            rationale: "A correct 'Level' property for each element makes it easier to validate the model.",
            fix: "Assign each element a 'Level' property that corresponds to its position in the hierarchy, starting at '0' for the top-level elements."
        },
        C1: {
            name: 'Unique Parent',
            statement: 'Each element must have at most one parent.',
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
            rationale: 'This prevents incomplete levels of detail, which create both structural gaps and semantic ambiguity.',
            fix: "Adjust the hierarchies by either decomposing the shallower elements further or aggregating the deeper ones, so all final 'leaf' elements are at the same level."
        },
        C4: {
            name: 'Upward Coherence',
            statement: 'A relationship between two elements requires a corresponding relationship between their parents.',
            rationale: 'This ensures that low-level relationships are reflected at higher levels of abstraction.',
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
            statement: 'Each capability must modify at least one business object.',
            rationale: 'This ensures that every defined capability is meaningful by having a concrete impact on a business object.',
            fix: "For each violating capability, either add a relationship to a relevant business object or remove the capability if it has no clear impact."
        },
        C7: {
            name: 'Object Relevance',
            statement: 'Each business object must be modified by at least one capability.',
            rationale: "This ensures that every business object is relevant to the organization's value-creating activities.",
            fix: "For each violating business object, either add a relationship from a relevant capability or remove the object if it is never acted upon."
        },
        C8: {
            name: 'Capability Purpose',
            statement: 'Each capability must either directly realize a value stream stage or support another capability that does.',
            rationale: 'This guarantees that all potential is ultimately linked to a value-creating purpose.',
            fix: "For each violating capability, ensure it is connected to the value creation process by either adding a relationship to a value stream stage or a relationship to another capability."
        },
        C9: {
            name: 'Traceability',
            statement: 'Each value stream stage must be realized by exactly one capability.',
            rationale: 'This constraint ensures traceability and governability. It establishes a clear, unambiguous link from value-creating action back to the accountable capability.',
            fix: "For each violating value stream stage, review its incoming 'serving' relationships and ensure there is exactly one. Add a relationship if one is missing, or remove duplicates."
        }
   },
    summary: {
        opportunityCount: 0,
        violationCount: 0,
        rulesViolated: [],
        rulesPassed: []
    }
};

function updateReport(rule, opportunities, violations) {
    let opportunityCount = Array.isArray(opportunities) ? opportunities.length : opportunities.size();
    let violationCount = Array.isArray(violations) ? violations.length : violations.size();

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
}

let opportunities, violations;

// C0
opportunities = $('element');
violations = opportunities.filter(e => $(e).prop('Level') != countAncestors(e))
updateReport('C0', opportunities, violations);

// C1
opportunities = $('element');
violations = opportunities.filter(e => $(e).inRels('composition-relationship').size() > 1);
updateReport('C1', opportunities, violations);

// C2
opportunities = $('element');
violations = opportunities.filter(e => isOwnAncestor(e));
updateReport('C2', opportunities, violations);

// C3
opportunities = $('element').prop('Level', true).filter(l => l != '0');
violations = $('element').filter(e => $(e).inRels('composition-relationship').size() === 0).prop('Level', true).filter(l => l != '0');
updateReport('C3', opportunities, violations);

// C4
opportunities = $('relation').not('composition-relationship').filter(r =>
    $(r.source).inRels('composition-relationship').size() > 0
    && $(r.target).inRels('composition-relationship').size() > 0);
violations = opportunities.filter(r => {
    let sourceParents = $(r.source).inRels('composition-relationship').sourceEnds();
    let targetParents = $(r.target).inRels('composition-relationship').sourceEnds();
    return sourceParents.size() === targetParents.not(sourceParents).size()
        && sourceParents.outRels(r.type).targetEnds().size() ===
            sourceParents.outRels(r.type).targetEnds().not(targetParents).size();
});
updateReport('C4', opportunities, violations);

// C5
opportunities = $('relation').not('composition-relationship').filter(r =>
    $(r.source).outRels('composition-relationship').size() > 0
    && $(r.target).outRels('composition-relationship').size() > 0);
violations = opportunities.filter(r => {
    let sourceChildren = $(r.source).outRels('composition-relationship').targetEnds();
    let targetChildren = $(r.target).outRels('composition-relationship').targetEnds();
    return sourceChildren.outRels(r.type).targetEnds().size() ===
        sourceChildren.outRels(r.type).targetEnds().not(targetChildren).size();
});
updateReport('C5', opportunities, violations);


// C6
opportunities = $('capability');
violations = opportunities.filter(e => $(e).outRels('association-relationship').targetEnds('business-object').size() < 1);
updateReport('C6', opportunities, violations);


// C7
opportunities = $('business-object');
violations = opportunities.filter(e => $(e).inRels('association-relationship').sourceEnds('capability').size() < 1);
updateReport('C7', opportunities, violations);

// C8
opportunities = $('capability');
violations = opportunities.filter(e => !supportsValueStream(e));
updateReport('C8', opportunities, violations);

// C9
opportunities = $('value-stream');
violations = opportunities.filter(e => $(e).inRels('serving-relationship').sourceEnds('capability').size() !== 1);
updateReport('C9', opportunities, violations);

console.clear();
console.show();

console.log('======================================================================');
console.log('          ARCHITECTURAL COHERENCE VALIDATION REPORT');
console.log('======================================================================');
console.log('');
console.log('OVERALL STATUS: ' + (report.summary.violationCount > 0 ? 'FAILED' : 'PASSED'));
console.log('');
console.log('VALIDATION SUMMARY:');
console.log(`  - Total Violations: ${report.summary.violationCount}/${report.summary.opportunityCount} (${Math.round(report.summary.violationCount/report.summary.opportunityCount * 100)}%)`);
console.log('  - FAILED Rules: ' + (report.summary.rulesViolated.length > 0 ? report.summary.rulesViolated.join(', ') : 'None'));
console.log('  - PASSED Rules: ' + (report.summary.rulesPassed.length > 0 ? report.summary.rulesPassed.join(', ') : 'None'));

if (report.summary.violationCount > 0) {
    console.log('');
    console.log('----------------------------------------------------------------------');
    console.log('                   DETAILED VIOLATION ANALYSIS');
    console.log('----------------------------------------------------------------------');
 
    for (const [key, val] of Object.entries(report.rules)) {
        if (val.violationCount > 0) {
            console.log('');
            console.log(`[!!] ${key} - ${val.name}: ${val.violationCount}/${val.opportunityCount} (${Math.round(val.violationCount/val.opportunityCount * 100)}%)`);
            console.log('----------------------------------------------------------------------');
            console.log(' * Statement: ' + val.statement);
            console.log(' * Rationale: ' + val.rationale);
            // console.log(' * Suggested Fix: ' + val.fix);
            console.log(' * Examples of violating items: ');
            val.examples.forEach(ex => console.log('   - ' + ex));
        }
    }
}

console.log('');
console.log('======================================================================');
