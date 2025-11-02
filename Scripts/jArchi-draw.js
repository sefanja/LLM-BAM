/**
 * Quick en dirty script om door LLM gegenereerde elementen en relaties geordend op een view te plaatsen.
 * Voorwaarden:
 * - Alle views zijn leeg.
 * - 'Default View' bestaat.
 * - Het model heeft maximaal 3 niveaus (Level 0-2).
 */

const S = 12; // kleinste afstand
const W = 10*S; // standaard elementbreedte
const H = 5*S; // en hoogte
const V = 5*H // grote verticale afstand

const view = $("view").filter(".Default View").first();

var leafs = 0; // aantal elementen geplaatst op het diepste niveau
var spaces = 0; // aantal ruimtes tussen elementen
$('value-stream')
    .filter(el => el.prop('Level') == 0)
            .each(elL0 => {
                let children = $(elL0).outRels('composition-relationship').size();
                let grandchildren = $(elL0).outRels('composition-relationship').targetEnds().outRels('composition-relationship').size();
                view.add(
                    elL0,
                    (2*spaces++ + 1)*S + leafs*(W+S),
                    S,
                    (1+ 2*children + grandchildren)*S + grandchildren*W,
                    H + 8*S);
                let diagramObject = $(elL0).objectRefs().first();
                diagramObject.textPosition = 0;
                $(elL0).outRels('composition-relationship').targetEnds().each(elL1 => {
                    let children = $(elL1).outRels('composition-relationship').size();
                    view.add(
                        elL1,
                        (2*spaces++)*S + leafs*(W+S),
                        4*S,
                        (1 + children)*S + children*W,
                        H + 4*S,
                        true);
                    let diagramObject = $(elL1).objectRefs().first();
                    diagramObject.textPosition = 0;
                    $(elL1).outRels('composition-relationship').targetEnds().each(elL2 => {
                        view.add(
                            elL2,
                            (2*spaces - 1)*S + leafs++*(W+S),
                            7*S,
                            W+1,
                            H,
                            true);
                        $(elL2).objectRefs().first().labelExpression = '${property:Sequence}. ${name}';
                    })
                })
            });

leafs = 0;
spaces = 0;
$('capability')
    .filter(el => el.prop('Level') == 0)
            .each(elL0 => {
                let children = $(elL0).outRels('composition-relationship').size();
                let grandchildren = $(elL0).outRels('composition-relationship').targetEnds().outRels('composition-relationship').size();
                view.add(
                    elL0,
                    (2*spaces++ + 1)*S + leafs*(W+S),
                    V + S,
                    (1+ 2*children + grandchildren)*S + grandchildren*W,
                    H + 8*S);
                let diagramObject = $(elL0).objectRefs().first();
                diagramObject.textPosition = 0;
                $(elL0).outRels('composition-relationship').targetEnds().each(elL1 => {
                    let children = $(elL1).outRels('composition-relationship').size();
                    view.add(
                        elL1,
                        (2*spaces++)*S + leafs*(W+S),
                        V + 4*S,
                        (1 + children)*S + children*W,
                        H + 4*S,
                        true);
                    let diagramObject = $(elL1).objectRefs().first();
                    diagramObject.textPosition = 0;
                    $(elL1).outRels('composition-relationship').targetEnds().each(elL2 => {
                        view.add(
                            elL2,
                            (2*spaces - 1)*S + leafs++*(W+S),
                            V + 7*S,
                            W+1,
                            H,
                            true);
                    })
                })
            });

leafs = 0;
spaces = 0;
$('business-object')
    .filter(el => el.prop('Level') == 0)
            .each(elL0 => {
                let children = $(elL0).outRels('composition-relationship').size();
                let grandchildren = $(elL0).outRels('composition-relationship').targetEnds().outRels('composition-relationship').size();
                view.add(
                    elL0,
                    (2*spaces++ + 1)*S + leafs*(W+S),
                    2*V + S,
                    (1+ 2*children + grandchildren)*S + grandchildren*W,
                    H + 8*S);
                let diagramObject = $(elL0).objectRefs().first();
                diagramObject.textPosition = 0;
                $(elL0).outRels('composition-relationship').targetEnds().each(elL1 => {
                    let children = $(elL1).outRels('composition-relationship').size();
                    view.add(
                        elL1,
                        (2*spaces++)*S + leafs*(W+S),
                        2*V + 4*S,
                        (1 + children)*S + children*W,
                        H + 4*S,
                        true);
                    let diagramObject = $(elL1).objectRefs().first();
                    diagramObject.textPosition = 0;
                    $(elL1).outRels('composition-relationship').targetEnds().each(elL2 => {
                        view.add(
                            elL2,
                            (2*spaces - 1)*S + leafs++*(W+S),
                            2*V + 7*S,
                            W+1,
                            H,
                            true);
                    })
                })
            });

$('relationship').each(r => {
    view.add(
        r,
        $('#' + r.source.id).objectRefs().first(),
        $('#' + r.target.id).objectRefs().first()
    );
});
