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
 */
function drawDeMorganLaw1() {
    const container1 = document.getElementById('demorgan-law1-left');
    const container2 = document.getElementById('demorgan-law1-right');
    
    if (!container1 || !container2) return;
    
    // 左辺：(A ∩ B)^c - 交集合の補集合
    const sets1 = [
        {sets: ['A'], size: 10},
        {sets: ['B'], size: 10},
        {sets: ['A','B'], size: 3}  // 交集合
    ];
    
    // venn.jsでレイアウト計算
    const chart1 = venn.VennDiagram()
        .width(300)
        .height(200);
    
    const div1 = d3.select(container1);
    div1.datum(sets1).call(chart1);
    
    // スタイル調整 - 全体を塗って、交集合以外を強調
    div1.selectAll(".venn-circle path")
        .style("fill-opacity", 0)
        .style("stroke", function(d) {
            return d.sets[0] === 'A' ? "#e53935" : "#43a047";
        })
        .style("stroke-width", 2);
    
    // 背景（全体集合U）を追加
    div1.insert("rect", ":first-child")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#B3E5FC")
        .style("fill-opacity", 0.3)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // A∩B以外の部分を強調表示
    div1.selectAll(".venn-area")
        .filter(function(d) {
            return d.sets.length === 1; // AのみまたはBのみ
        })
        .select("path")
        .style("fill", "#1976d2")
        .style("fill-opacity", 0.3);
    
    // 右辺：A^c ∪ B^c - 補集合の和集合
    const sets2 = [
        {sets: ['A'], size: 10},
        {sets: ['B'], size: 10},
        {sets: ['A','B'], size: 3}
    ];
    
    const chart2 = venn.VennDiagram()
        .width(300)
        .height(200);
    
    const div2 = d3.select(container2);
    div2.datum(sets2).call(chart2);
    
    // スタイル調整
    div2.selectAll(".venn-circle path")
        .style("fill", "white")
        .style("fill-opacity", 1)
        .style("stroke", function(d) {
            return d.sets[0] === 'A' ? "#e53935" : "#43a047";
        })
        .style("stroke-width", 2);
    
    // 背景（補集合の和）
    div2.insert("rect", ":first-child")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#B3E5FC")
        .style("fill-opacity", 0.3)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // ラベル追加
    div1.selectAll(".venn-area text")
        .style("fill", "#333")
        .style("font-size", "16px")
        .style("font-weight", "bold");
    
    div2.selectAll(".venn-area text")
        .style("fill", "#333")
        .style("font-size", "16px")
        .style("font-weight", "bold");
}

/**
 * ド・モルガンの第2法則：(A ∪ B)^c = A^c ∩ B^c
 */
function drawDeMorganLaw2() {
    const container1 = document.getElementById('demorgan-law2-left');
    const container2 = document.getElementById('demorgan-law2-right');
    
    if (!container1 || !container2) return;
    
    // 左辺：(A ∪ B)^c - 和集合の補集合
    const sets1 = [
        {sets: ['A'], size: 10},
        {sets: ['B'], size: 10},
        {sets: ['A','B'], size: 3}
    ];
    
    const chart1 = venn.VennDiagram()
        .width(300)
        .height(200);
    
    const div1 = d3.select(container1);
    div1.datum(sets1).call(chart1);
    
    // 全体集合の背景を追加
    div1.insert("rect", ":first-child")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#B3E5FC")
        .style("fill-opacity", 0.3)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // AとBを白で塗る（和集合の補集合を表現）
    div1.selectAll(".venn-area path")
        .style("fill", "white")
        .style("fill-opacity", 1);
    
    div1.selectAll(".venn-circle path")
        .style("stroke", function(d) {
            return d.sets[0] === 'A' ? "#e53935" : "#43a047";
        })
        .style("stroke-width", 2);
    
    // 右辺：A^c ∩ B^c - 補集合の積集合
    const sets2 = [
        {sets: ['A'], size: 10},
        {sets: ['B'], size: 10},
        {sets: ['A','B'], size: 3}
    ];
    
    const chart2 = venn.VennDiagram()
        .width(300)
        .height(200);
    
    const div2 = d3.select(container2);
    div2.datum(sets2).call(chart2);
    
    // 全体集合の背景
    div2.insert("rect", ":first-child")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 300)
        .attr("height", 200)
        .style("fill", "#B3E5FC")
        .style("fill-opacity", 0.3)
        .style("stroke", "#263238")
        .style("stroke-width", 2);
    
    // AとBを白で塗る
    div2.selectAll(".venn-area path")
        .style("fill", "white")
        .style("fill-opacity", 1);
    
    div2.selectAll(".venn-circle path")
        .style("stroke", function(d) {
            return d.sets[0] === 'A' ? "#e53935" : "#43a047";
        })
        .style("stroke-width", 2);
    
    // ラベル
    div1.selectAll(".venn-area text")
        .style("fill", "#333")
        .style("font-size", "16px")
        .style("font-weight", "bold");
    
    div2.selectAll(".venn-area text")
        .style("fill", "#333")
        .style("font-size", "16px")
        .style("font-weight", "bold");
}