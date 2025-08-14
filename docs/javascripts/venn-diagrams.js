/**
 * ベン図描画用JavaScript
 * venn.jsを使用してド・モルガンの法則を視覚化
 */

// ページ読み込み後に実行
document.addEventListener('DOMContentLoaded', function() {
    // ド・モルガンの第1法則のベン図を描画
    drawDeMorganLaw1();
    // ド・モルガンの第2法則のベン図を描画
    drawDeMorganLaw2();
});

/**
 * ド・モルガンの第1法則：(A ∩ B)^c = A^c ∪ B^c
 * 左辺：交集合の補集合（A∩B以外の全領域）
 * 右辺：補集合の和集合（A^c または B^c のいずれかに属する領域）
 */
function drawDeMorganLaw1() {
    const container1 = document.getElementById('demorgan-law1-left');
    const container2 = document.getElementById('demorgan-law1-right');
    
    if (!container1 || !container2) return;
    
    // 基本データ構造
    const sets = [
        {sets: ['A'], size: 10},
        {sets: ['B'], size: 10},
        {sets: ['A','B'], size: 3}
    ];
    
    // 左辺：(A ∩ B)^c - 交集合の補集合
    const chart1 = venn.VennDiagram().width(300).height(200);
    const div1 = d3.select(container1);
    div1.datum(sets).call(chart1);
    
    // 全体集合の背景（補集合を表現）
    div1.insert("rect", ":first-child")
        .attr("x", 0).attr("y", 0)
        .attr("width", 300).attr("height", 200)
        .style("fill", "#FFE0B2")
        .style("fill-opacity", 0.6)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // A単独領域は補集合なので背景が見える（透明）
    div1.selectAll(".venn-area")
        .filter(d => d.sets.length === 1)
        .select("path")
        .style("fill", "none")
        .style("fill-opacity", 0);
    
    // A∩B（交集合）は補集合に含まれないので白で隠す
    div1.selectAll(".venn-area")
        .filter(d => d.sets.length === 2)
        .select("path")
        .style("fill", "white")
        .style("fill-opacity", 1);
    
    // 右辺：A^c ∪ B^c - 補集合の和集合
    const chart2 = venn.VennDiagram().width(300).height(200);
    const div2 = d3.select(container2);
    div2.datum(sets).call(chart2);
    
    // 全体集合の背景（同じ色で同じ結果を示す）
    div2.insert("rect", ":first-child")
        .attr("x", 0).attr("y", 0)
        .attr("width", 300).attr("height", 200)
        .style("fill", "#FFE0B2")
        .style("fill-opacity", 0.6)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // A単独、B単独領域は補集合なので背景が見える
    div2.selectAll(".venn-area")
        .filter(d => d.sets.length === 1)
        .select("path")
        .style("fill", "none")
        .style("fill-opacity", 0);
    
    // A∩Bは補集合の和集合に含まれないので白で隠す
    div2.selectAll(".venn-area")
        .filter(d => d.sets.length === 2)
        .select("path")
        .style("fill", "white")
        .style("fill-opacity", 1);
    
    // 円の輪郭を両方に適用
    [div1, div2].forEach(div => {
        div.selectAll(".venn-circle path")
            .style("fill", "none")
            .style("stroke", d => d.sets[0] === 'A' ? "#d32f2f" : "#388e3c")
            .style("stroke-width", 2.5);
    });
    
    // ラベル追加
    addLabels(div1, 'A', 'B');
    addLabels(div2, 'A', 'B');
}

/**
 * ド・モルガンの第2法則：(A ∪ B)^c = A^c ∩ B^c
 * 左辺：和集合の補集合（A∪B以外の領域）
 * 右辺：補集合の積集合（AにもBにも属さない領域）
 */
function drawDeMorganLaw2() {
    const container1 = document.getElementById('demorgan-law2-left');
    const container2 = document.getElementById('demorgan-law2-right');
    
    if (!container1 || !container2) return;
    
    const sets = [
        {sets: ['A'], size: 10},
        {sets: ['B'], size: 10},
        {sets: ['A','B'], size: 3}
    ];
    
    // 左辺：(A ∪ B)^c - 和集合の補集合
    const chart1 = venn.VennDiagram().width(300).height(200);
    const div1 = d3.select(container1);
    div1.datum(sets).call(chart1);
    
    // 全体集合の背景（補集合の領域を示す）
    div1.insert("rect", ":first-child")
        .attr("x", 0).attr("y", 0)
        .attr("width", 300).attr("height", 200)
        .style("fill", "#C8E6C9")
        .style("fill-opacity", 0.7)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // A∪B全体を白で隠す（和集合の補集合なので）
    div1.selectAll(".venn-area path")
        .style("fill", "white")
        .style("fill-opacity", 1);
    
    // 右辺：A^c ∩ B^c - 補集合の積集合
    const chart2 = venn.VennDiagram().width(300).height(200);
    const div2 = d3.select(container2);
    div2.datum(sets).call(chart2);
    
    // 全体集合の背景（同じ色で同じ結果を示す）
    div2.insert("rect", ":first-child")
        .attr("x", 0).attr("y", 0)
        .attr("width", 300).attr("height", 200)
        .style("fill", "#C8E6C9")
        .style("fill-opacity", 0.7)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // A∪B全体を白で隠す（A^c ∩ B^cはAにもBにも属さない領域）
    div2.selectAll(".venn-area path")
        .style("fill", "white")
        .style("fill-opacity", 1);
    
    // 円の輪郭を両方に適用
    [div1, div2].forEach(div => {
        div.selectAll(".venn-circle path")
            .style("fill", "none")
            .style("stroke", d => d.sets[0] === 'A' ? "#d32f2f" : "#388e3c")
            .style("stroke-width", 2.5);
    });
    
    // ラベル追加
    addLabels(div1, 'A', 'B');
    addLabels(div2, 'A', 'B');
}

/**
 * ベン図にラベルを追加するヘルパー関数
 */
function addLabels(div, labelA = 'A', labelB = 'B') {
    // 集合Aのラベル
    div.selectAll(".venn-area")
        .filter(d => d.sets.length === 1 && d.sets[0] === 'A')
        .append("text")
        .text(labelA)
        .style("fill", "#333")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .style("text-anchor", "middle")
        .style("dominant-baseline", "central");
    
    // 集合Bのラベル
    div.selectAll(".venn-area")
        .filter(d => d.sets.length === 1 && d.sets[0] === 'B')
        .append("text")
        .text(labelB)
        .style("fill", "#333")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .style("text-anchor", "middle")
        .style("dominant-baseline", "central");
}