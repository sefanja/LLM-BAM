/**
 * Quick en dirty script om door LLM gegenereerde elementen en relaties geordend op een view (`Import`) te plaatsen.
 */

const OFFSET = 12;
const XD = 132;
const YD = 240;
const H = 48;
const W = 120;

const view = $("view").filter(".Import").first();

var i = 0; // aantal elementen opschuiven
var j = 0; // aantal extra spaties
$('business-process')
    .filter(el => el.prop('Level') == 0)
            .each(el => {
                let L1_elem = $(el).outRels('composition-relationship').size();
                let L2_elem = $(el).outRels('composition-relationship').targetEnds().outRels('composition-relationship').size();
                view.add(el, OFFSET*(1+2*j++) + XD*i, OFFSET, (1+2*L1_elem+L2_elem)*OFFSET + W*L2_elem + 1, 3*H + 1);
                $(el).objectRefs().first().textPosition = 0;
                $(el).outRels('composition-relationship').targetEnds().each(elL1 => {
                    let children = $(elL1).outRels('composition-relationship').size();
                    view.add(elL1, OFFSET*(2*j++) + XD*i, OFFSET*(1+3), (1+children)*OFFSET + W*children + 1, 2*H + 1, true);
                    $(elL1).objectRefs().first().textPosition = 0;
                    $(elL1).outRels('composition-relationship').targetEnds().each(elL2 => {
                        view.add(elL2, OFFSET*(2*j-1) + XD * i++, OFFSET*(1+6), W, H, true);
                    })
                })
            });

i = 0;
j = 0;
$('business-function')
    .filter(el => el.prop('Level') == 0)
            .each(el => {
                let L1_elem = $(el).outRels('composition-relationship').size();
                let L2_elem = $(el).outRels('composition-relationship').targetEnds().outRels('composition-relationship').size();
                view.add(el, OFFSET*(1+2*j++) + XD*i, OFFSET + YD, (1+2*L1_elem+L2_elem)*OFFSET + W*L2_elem + 1, 3*H + 1);
                $(el).objectRefs().first().textPosition = 0;
                $(el).outRels('composition-relationship').targetEnds().each(elL1 => {
                    let children = $(elL1).outRels('composition-relationship').size();
                    view.add(elL1, OFFSET*(2*j++) + XD*i, OFFSET*(1+3) + YD, (1+children)*OFFSET + W*children + 1, 2*H + 1, true);
                    $(elL1).objectRefs().first().textPosition = 0;
                    $(elL1).outRels('composition-relationship').targetEnds().each(elL2 => {
                        view.add(elL2, OFFSET*(2*j-1) + XD * i++, OFFSET*(1+6) + YD, W, H, true);
                    })
                })
            });

i = 0;
j = 0;
$('business-object')
    .filter(el => el.prop('Level') == 0)
            .each(el => {
                let L1_elem = $(el).outRels('composition-relationship').size();
                let L2_elem = $(el).outRels('composition-relationship').targetEnds().outRels('composition-relationship').size();
                view.add(el, OFFSET*(1+2*j++) + XD*i, OFFSET + YD*2, (1+2*L1_elem+L2_elem)*OFFSET + W*L2_elem + 1, 3*H + 1);
                $(el).objectRefs().first().textPosition = 0;
                $(el).outRels('composition-relationship').targetEnds().each(elL1 => {
                    let children = $(elL1).outRels('composition-relationship').size();
                    view.add(elL1, OFFSET*(2*j++) + XD*i, OFFSET*(1+3) + YD*2, (1+children)*OFFSET + W*children + 1, 2*H + 1, true);
                    $(elL1).objectRefs().first().textPosition = 0;
                    $(elL1).outRels('composition-relationship').targetEnds().each(elL2 => {
                        view.add(elL2, OFFSET*(2*j-1) + XD * i++, OFFSET*(1+6) + YD*2, W, H, true);
                    })
                })
            });

$('relationship').each(r => view.add(
    r,
    $('#' + r.source.id).objectRefs().first(),
    $('#' + r.target.id).objectRefs().first()
));
