# 第5章第4節　資源制約付き推論 【基本】

## 学習目標

この節では、有限の計算資源下での推論を形式化する理論を学習します。具体的には、論理的全能性問題の理解、制限された合理性の形式化、実時間推論システムの設計、そして近似推論アルゴリズムの分析を目標とします。

!!! summary "本節の概要"

    **現実的制約の認識**：理想的な論理的推論者は無限の計算資源と時間を持つが、現実の認識主体は有限の制約下で推論せざるを得ない。
    
    **制限された合理性**：Herbert Simonの概念を論理的に精密化し、満足化原理や有限計算での近似的推論を形式化する。
    
    **任意時間アルゴリズム**：利用可能時間に応じて推論の品質を調整し、時間と精度のトレードオフを最適化する手法を開発する。

---

[前節](5-3-incomplete-information.md)で不完全情報下の推論を学びましたが、この節では**計算資源の制約**という別の現実的制限を扱います。理論上可能な推論と実際に実行可能な推論の間には大きなギャップがあり、これを埋める理論が必要です。

## 5.4.1 論理的全能性問題

### 理想化の問題

標準的な認識論理では、認識主体は**論理的全能者**として扱われます。

**論理的全能性**：

- すべての論理的帰結を即座に認識する
- 矛盾を決して信じない  
- 論理的に等価な命題に同じ態度を取る
- 計算時間や記憶容量の制限がない

この理想化は数学的には美しいですが、現実の認識主体とは大きく乖離します。

### 具体的問題の例

**大数の素数性判定**：
\(n = 2^{2^{20}} + 1\) が素数かどうかは論理的には決定可能ですが、現実的時間内での計算は困難です。論理的全能者なら即座に答えを知っているはずですが、人間やコンピュータは長時間の計算を要します。

**チェスの必勝手順**：
チェスは有限ゲームなので理論上は必勝手順が存在しますが、その計算は現実的に不可能です。完璧なプレイヤーなら最初から最適手を知っているはずですが、実際のプレイヤーは限られた先読み深度で判断します。

**暗号の解読**：
RSA暗号の解読は大きな合成数の素因数分解に帰着しますが、現在の技術では実用的時間内で解くことはできません。しかし論理的には答えは一意に決まっています。

### サイモンの制限された合理性

Herbert Simonは、現実の意思決定者は**制限された合理性**（Bounded Rationality）の下で行動すると提唱しました。

!!! note "定義5.4.1 —— 制限された合理性"

    **認知的制限**：
    - 作業記憶の容量制限
    - 処理速度の制限
    - 注意資源の有限性
    - 時間制約下での意思決定
    
    **満足化原理**（Satisficing）：
    最適解ではなく、十分に良い解を探索
    
    **ヒューリスティック**：
    完全ではないが効率的な推論方法の使用

---

## 5.4.2 有限資源の形式化

### 計算複雑性による制約

推論問題の計算複雑性により、現実的制約を定量化します。

!!! abstract "定義5.4.2 —— 資源制約付き認識主体"

    **時間制約**：推論時間 \(T \leq T_{max}\)
    
    **空間制約**：使用メモリ \(M \leq M_{max}\)  
    
    **問い合わせ制約**：外部への問い合わせ回数 \(Q \leq Q_{max}\)
    
    **資源制約付き知識**：

    \[K^{T,M,Q}\varphi := \text{資源}(T,M,Q)\text{内で}\varphi\text{を証明可能}\]

### 段階的推論

利用可能資源に応じて推論の深さを調整します。

**推論レベル**：

- レベル0：直接記憶されている事実
- レベル1：1ステップ推論で得られる結論
- レベル2：2ステップ推論で得られる結論
- ...
- レベルn：nステップ推論で得られる結論

**資源配分戦略**：

\[K^{(n)}\varphi := \text{最大}n\text{ステップで}\varphi\text{を導出可能}\]

### 近似推論

厳密な推論の代わりに近似的な推論を用います。

**確率的近似**：

\[P(K\varphi | \text{evidence}, \text{resources}) \geq \theta\]
確信度が閾値\(\theta\)以上なら「知っている」と判定

**ファジィ近似**：

\[\mu_K(\varphi) \in [0, 1]\]
知識の度合いをファジィ値で表現

**区間近似**：

\[K[\alpha, \beta]\varphi := \alpha \leq P(\varphi) \leq \beta\]
確率の上下限で知識を表現

---

## 5.4.3 任意時間推論

### Anytime Algorithms

利用可能時間に応じて解の品質を調整するアルゴリズムです。

!!! note "定義5.4.3 —— 任意時間アルゴリズム"

    **性質**：
    1. **中断可能性**：任意の時点で中断して現在の最良解を返せる
    2. **単調改善**：時間の経過とともに解の品質が非減少
    3. **品質測定可能**：解の品質を定量的に評価可能
    
    **品質関数**：\(Q(t): \mathbb{R}_+ \to [0, 1]\)
    時間\(t\)での解の品質

### 推論の漸進的改善

時間とともに推論の精度を向上させます。

**段階的証明探索**：

1. 最初は浅い証明のみ探索
2. 時間があれば より深い証明を探索
3. 制限時間で最良の証明を返す

**確信度の更新**：
```python
def anytime_reasoning(query, max_time):
    confidence = 0.5  # 初期確信度
    start_time = current_time()
    
    while current_time() - start_time < max_time:
        evidence = search_next_evidence()
        confidence = update_confidence(confidence, evidence)
        
        if confidence > 0.95:  # 十分な確信度
            break
            
    return confidence
```

### メタレベル推論

推論資源の配分を推論対象とします。

**メタレベル質問**：

- どの推論方向を優先すべきか？
- いつ推論を停止すべきか？
- どの程度の精度で満足すべきか？

**計算価値理論**：

\[VOC(\text{computation}) = EU(\text{with computation}) - EU(\text{without computation}) - \text{Cost}(\text{computation})\]

**最適停止理論**：
期待される改善が計算コストを下回ったら停止

---

## 5.4.4 制限された認識論理

### 実行可能性制約

認識可能性に実行可能性制約を導入します。

!!! abstract "定義5.4.4 —— 実行可能な知識"

    **多項式時間知識**：\(K^P\varphi\)
    多項式時間で\(\varphi\)を証明可能
    
    **対数空間知識**：\(K^L\varphi\)
    対数空間で\(\varphi\)を証明可能
    
    **定数深度知識**：\(K^{AC^0}\varphi\)
    定数深度回路で\(\varphi\)を証明可能

### 段階的知識階層

計算複雑性による知識の階層を定義します。

**階層の関係**：

\[K^{AC^0} \subseteq K^L \subseteq K^P \subseteq K^{PSPACE} \subseteq K^{EXPTIME}\]

**分離結果**：
各階層は真に包含関係にある（計算複雑性理論の結果より）

**実用的境界**：

- 人間の直観的推論：\(K^{AC^0}\)レベル
- 電卓での計算：\(K^P\)レベル  
- コンピュータでの探索：\(K^{EXPTIME}\)レベル

### 近似知識の公理系

近似的認識論理の公理化を行います。

**弱化された分配公理**：
\[K^r(\varphi \to \psi) \land K^s\varphi \to K^{r \cdot s}(\psi)\]
確信度の積で結論の確信度が決まる

**資源単調性**：
\[\text{resources}_1 \leq \text{resources}_2 \implies (K^{resources_1}\varphi \to K^{resources_2}\varphi)\]

**近似的内省**：
\[K^r\varphi \to K^{s}K^r\varphi\] （\(s \geq r\)）

---

## 5.4.5 実時間推論システム

### Real-Time Logic

時間制約を明示的に扱う論理体系です。

!!! note "定義5.4.5 —— 実時間様相論理"

    **時刻付き知識**：\(K@t\varphi\)
    「時刻\(t\)で\(\varphi\)を知っている」
    
    **時限知識**：\(K[\Delta t]\varphi\)
    「時間\(\Delta t\)以内に\(\varphi\)を知る」
    
    **効力の減衰**：
    \[K@t\varphi \land (t' > t + \Delta) \to K@{t'}[\text{decay}(\Delta)]\varphi\]

### デッドライン制約

締切時間内での推論完了を保証します。

**ハード制約**：
指定時刻までに必ず応答する
\[\text{必ず} \, t_{deadline} \text{までに答を返す}\]

**ソフト制約**：
遅延にペナルティがある
\[\text{Utility} = f(\text{quality}) - g(\text{delay})\]

**推論のスケジューリング**：

- 固定優先度：重要度順に処理
- 動的優先度：締切近い順に処理
- 比例配分：重要度に応じて時間配分

### 割り込み処理

より重要な推論により現在の推論を中断します。

**優先度の動的調整**：
```python
def interrupt_handler(new_query, current_queries):
    if priority(new_query) > max_priority(current_queries):
        suspend(current_queries)
        process(new_query)
    else:
        queue(new_query)
```

**文脈保存・復元**：
中断された推論の状態を保存し、後で復元

**増分的推論**：
前回の計算結果を活用して効率化

---

## 5.4.6 実用システムでの実装

### エキスパートシステムでの応用

医療診断などで時間制約付き推論を実装します。

**症例の緊急度判定**：
```
IF 生命に関わる症状 THEN 優先度 = CRITICAL
IF 慢性的症状 THEN 優先度 = ROUTINE
```

**段階的診断**：

1. 5分以内：基本的な鑑別診断
2. 15分以内：詳細な検査結果を考慮
3. 1時間以内：専門医への相談結果を統合

**確信度による判断**：

- 確信度 > 0.9：即座に診断確定
- 0.7 < 確信度 ≤ 0.9：追加検査を提案
- 確信度 ≤ 0.7：他の専門医に紹介

### 自動運転システム

実時間制約が厳しい自動運転での応用です。

**反応時間の階層**：

- 緊急回避：100ms以内
- 経路変更：1秒以内  
- 目的地変更：任意時間

**センサー融合の優先順位**：

1. 衝突回避センサー（最優先）
2. 車線維持センサー
3. 交通標識認識
4. 経路最適化

**不確実性と安全性**：
不確実性が高い場合は保守的な行動を選択

\[\text{safety\_margin} = f(\text{uncertainty\_level})\]

### 情報検索システム

大規模データベースからの実時間検索です。

**クエリの複雑性管理**：

- 単純クエリ：インデックス直接参照
- 複雑クエリ：近似アルゴリズム使用
- 超複雑クエリ：サンプリングによる推定

**結果の段階的提示**：
```python
def incremental_search(query, max_time):
    results = []
    start_time = time()
    
    # 高速パス
    results.extend(index_lookup(query))
    if time() - start_time > max_time * 0.3:
        return results
    
    # 中速パス  
    results.extend(heuristic_search(query))
    if time() - start_time > max_time * 0.7:
        return results
    
    # 完全探索
    results.extend(exhaustive_search(query))
    return results
```

### ゲームAI

リアルタイム戦略ゲームでの意思決定です。

**思考時間の配分**：

- 戦術的判断：フレームごと（16ms）
- 戦略的計画：1秒ごと
- 長期戦略：10秒ごと

**近似的ゲーム木探索**：

- モンテカルロ木探索（MCTS）
- Upper Confidence bounds applied to Trees (UCT)
- 制限時間内でのベスト手選択

**学習と適応**：
対戦相手の戦略を学習し、時間配分を動的調整

---

## まとめ

この節では、資源制約付き推論の理論と実装を体系的に学習しました。重要なポイントは以下の通りです：

理想的な認識論理が仮定する論理的全能性は現実的ではなく、有限の計算資源・時間・記憶容量の制約下での推論が必要です。Herbert Simonの制限された合理性の概念を論理的に精密化することで、より現実的な認識モデルが構築できます。

計算複雑性理論により、認識可能性の限界を定量化できます。多項式時間知識、対数空間知識などの階層により、実行可能な推論の範囲が明確になります。近似推論、段階的推論、満足化原理により、制約下での合理的判断が可能になります。

任意時間推論アルゴリズムにより、利用可能時間に応じて推論品質を調整できます。中断可能性、単調改善、品質測定という性質により、実用的な推論システムが実現されます。メタレベル推論により、推論資源の配分自体を最適化できます。

実時間推論システムでは、デッドライン制約、割り込み処理、優先度管理が重要です。時刻付き知識、時限知識などにより、時間を明示的に扱う認識論理が構築されます。

実用システムでの実装例として、エキスパートシステム、自動運転、情報検索、ゲームAIなどがあります。各応用分野の特性に応じた時間配分、精度調整、安全性確保の戦略が開発されています。

資源制約付き推論は、理論的認識論理と実用的AIシステムの間の橋渡しとして重要な役割を果たし、より現実的で実装可能な認識モデルを提供します。

### 次節への展望

次の第5節「非標準的アプローチ」【発展】では、これまでの伝統的な様相論理的アプローチを超えた、新しい認識論理の可能性を探求します。量子論理、動的論理、型理論など、先端的な研究分野との融合を学習します。

---

## 参考文献

- Simon, H. A. (1955). A behavioral model of rational choice. *Quarterly Journal of Economics*, 69(1), 99-118.
- Russell, S. J., & Wefald, E. H. (1991). *Do the Right Thing: Studies in Limited Rationality*. MIT Press.
- Horvitz, E. J. (1987). Reasoning about beliefs and actions under computational resource constraints. In *Proceedings of the Third Conference on Uncertainty in Artificial Intelligence* (pp. 429-444).
- Zilberstein, S. (1996). Using anytime algorithms in intelligent systems. *AI Magazine*, 17(3), 73-83.
- Dean, T., & Boddy, M. (1988). An analysis of time-dependent planning. In *Proceedings of AAAI-88* (pp. 49-54).
- Papadimitriou, C. H. (1994). *Computational Complexity*. Addison-Wesley.
- Fagin, R., Halpern, J. Y., Moses, Y., & Vardi, M. Y. (1995). *Reasoning About Knowledge*. MIT Press.
- Good, I. J. (1971). Twenty-seven principles of rationality. In V. P. Godambe & D. A. Sprott (Eds.), *Foundations of Statistical Inference* (pp. 108-141). Holt, Rinehart and Winston.