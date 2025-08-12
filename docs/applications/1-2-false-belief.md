# 第3章第2節　誤信念課題の形式分析 【応用】

## 学習目標

この節では、誤信念課題を様相論理で詳細に分析します：

- 古典的誤信念課題の論理構造の解明
- 課題の難易度を決定する論理的要因の特定
- 様々な課題バリエーションの体系的分類
- 新しい課題開発のための形式的原理

---

[前節](1-1-theory-of-mind.md)では心の理論の発達段階を概観しましたが、この節では心の理論研究の中核を成す**誤信念課題**について、様相論理を用いた詳細な分析を行います。

誤信念課題は1980年代に開発されて以来、数百の研究で使用され、心の理論研究の「ゴールドスタンダード」となっています。しかし、なぜある課題は他より困難なのか、どのような要因が課題の難易度を決定するのか、といった理論的問題は十分に解明されていません。様相論理による形式的分析は、これらの問題に新しい光を当てることができます。

## 3.2.1 誤信念課題の基本構造

### 誤信念とは何か

**誤信念**（False Belief）とは、現実と一致しない信念のことです。私たちは日常的に誤信念を持っています：
- 「今日は晴れると思ったのに雨が降った」
- 「友達はまだ来ていないと思ったら、もう到着していた」
- 「テストは明日だと思っていたが、実は今日だった」

誤信念課題では、子どもが「他者の誤信念」を理解できるかを測定します。つまり、「相手が間違った信念を持っていることを理解し、その信念に基づいて相手の行動を予測できるか」を調べるのです。

### 論理的必要条件

誤信念課題を理解するためには、子どもは以下の論理的構造を把握する必要があります：

**現実の状態**：\\(p\\) が真である（例：ボールは箱Bにある）
**他者の信念**：エージェント A が \\(\\neg p\\) を信じている（例：サリーはボールが箱Aにあると信じている）
**信念と現実の区別**：\\(B_A(\\neg p) \\land p\\)（サリーの信念と現実は異なる）
**行動予測**：\\(B_A(\\neg p) \\rightarrow \\text{Action}_A(\\text{based on } \\neg p)\\)（サリーは自分の信念に基づいて行動する）

| 記号 | 意味 | 具体例 |
|------|------|---------|
| \\(p\\) | 現実の命題 | ボールは箱Bにある |
| \\(B_A(\\neg p)\\) | Aの誤信念 | サリーはボールが箱Aにあると信じる |
| \\(B_A(\\neg p) \\land p\\) | 信念と現実の乖離 | サリーの信念≠現実 |

### 認知的要求

この理解には高度な認知能力が必要です：

**表象の分離**：現実の表象と他者の信念表象を同時に保持
**視点転換**：自分の知識を抑制し、他者の視点で考える
**因果推論**：信念が行動の原因になることを理解
**時間的推論**：過去の出来事と現在の状況を関連付ける

---

## 3.2.2 古典的課題の形式的分析

### サリー・アン課題の完全な論理構造

**初期状態の設定**：
- 時点 t₁：\\(\\text{Location}(\\text{ball}, t_1) = \\text{boxA}\\)
- \\(\\text{See}_{\\text{Sally}}(\\text{Location}(\\text{ball}, t_1) = \\text{boxA})\\)
- \\(\\text{See}_{\\text{Ann}}(\\text{Location}(\\text{ball}, t_1) = \\text{boxA})\\)
- \\(\\text{See}_{\\text{子ども}}(\\text{Location}(\\text{ball}, t_1) = \\text{boxA})\\)

**サリーの退場**：
- 時点 t₂：\\(\\text{Present}_{\\text{Sally}}(t_2) = \\text{false}\\)

**ボールの移動**：
- 時点 t₃：\\(\\text{Move}_{\\text{Ann}}(\\text{ball}, \\text{boxA}, \\text{boxB})\\)
- \\(\\text{Location}(\\text{ball}, t_3) = \\text{boxB}\\)
- \\(\\neg\\text{See}_{\\text{Sally}}(\\text{Move}_{\\text{Ann}})\\)（サリーは移動を見ていない）

**認識状態の分析**：

各エージェントの認識状態：
- **Ann**: \\(K_{\\text{Ann}}(\\text{Location}(\\text{ball}, t_3) = \\text{boxB})\\)
- **子ども**: \\(K_{\\text{子ども}}(\\text{Location}(\\text{ball}, t_3) = \\text{boxB})\\)
- **Sally**: \\(B_{\\text{Sally}}(\\text{Location}(\\text{ball}, t_3) = \\text{boxA})\\)

**課題の本質**：
子どもは以下を理解する必要があります：
\\[K_{\\text{子ども}}(B_{\\text{Sally}}(\\text{Location}(\\text{ball}) = \\text{boxA}) \\land \\text{Location}(\\text{ball}) = \\text{boxB})\\]

### スマーティーズ課題の分析

**課題の設定**：
- 子どもにスマーティーズの箱を見せる
- 「中身は何？」→「スマーティー」
- 箱を開けると鉛筆が入っている
- 箱を閉める

**論理構造**：
- **現実**：\\(\\text{Contents}(\\text{box}) = \\text{pencil}\\)
- **外見による推論**：\\(\\text{Appearance}(\\text{box}) \\rightarrow \\text{Contents} = \\text{smarties}\\)
- **子どもの以前の信念**：\\(B_{\\text{子ども}}^{t_1}(\\text{Contents} = \\text{smarties})\\)
- **子どもの現在の知識**：\\(K_{\\text{子ども}}^{t_2}(\\text{Contents} = \\text{pencil})\\)

**質問1**：「箱を見た友達は中身を何だと思う？」
\\[K_{\\text{子ども}}(B_{\\text{友達}}(\\text{Contents} = \\text{smarties})) \\text{ ? }\\]

**質問2**：「君は最初、中身を何だと思った？」
\\[K_{\\text{子ども}}(B_{\\text{子ども}}^{t_1}(\\text{Contents} = \\text{smarties})) \\text{ ? }\\]

### 課題間の論理的差異

異なる誤信念課題の論理的複雑さを比較してみましょう：

| 課題 | 時間的変化 | エージェント数 | 認識層数 | 論理的複雑さ |
|------|------------|---------------|----------|-------------|
| サリー・アン | あり | 3 | 2 | 中 |
| スマーティーズ | あり | 2 | 2 | 低 |
| 二次信念課題 | あり | 3+ | 3 | 高 |

**複雑さの指標**：
\\[\\text{Complexity} = f(\\text{時間変化}, \\text{エージェント数}, \\text{認識層数})\\]

---

## 3.2.3 課題の難易度決定要因

### 論理的要因の体系的分析

誤信念課題の難易度は、複数の論理的要因によって決定されます。これらを体系的に分析することで、課題設計の原理が明らかになります。

#### 1. 認識層の深さ

**一次信念**：\\(B_A(p)\\)
例：「サリーはボールが箱Aにあると思っている」

**二次信念**：\\(B_A(B_B(p))\\)
例：「サリーは、アンがボールが箱Aにあると思っていると思っている」

**三次信念**：\\(B_A(B_B(B_C(p)))\\)
例：「サリーは、アンが、ジョンがボールが箱Aにあると思っていると思っていると思っている」

**複雑さの関数**：
\\[\\text{Difficulty} \\propto \\text{Nesting Level}^2\\]

認識層が深くなるほど、認知負荷は指数関数的に増大します。

#### 2. 時間的複雑さ

**単一時点**：現在の信念のみを扱う
\\[B_A^{\\text{now}}(p)\\]

**時間変化あり**：過去の出来事と現在の信念を関連付ける
\\[B_A^{t_1}(p) \\land \\text{Event}^{t_2} \\rightarrow B_A^{t_3}(q)\\]

**複数時点**：複雑な時間的推論が必要
\\[B_A^{t_1}(p) \\land B_A^{t_2}(q) \\land \\text{Event}^{t_3} \\rightarrow B_A^{t_4}(r)\\]

#### 3. エージェントの数

**2者関係**：\\(B_A(p)\\)（子どもと一人の他者）
**3者関係**：\\(B_A(p) \\land B_B(q)\\)（複数の他者の信念を同時に考慮）
**n者関係**：\\(\\bigwedge_{i=1}^n B_{A_i}(p_i)\\)（多数のエージェント）

**複雑さ**：
\\[\\text{Difficulty} \\propto n \\log n\\]

### 認知的負荷の形式化

誤信念課題の認知的負荷を定量化する式を提案できます：

\\[\\text{CognitiveLoad} = \\alpha \\cdot \\text{NestingLevel}^2 + \\beta \\cdot \\text{TimePoints} + \\gamma \\cdot \\text{Agents} + \\delta \\cdot \\text{Contradictions}\\]

ここで：
- α, β, γ, δ は経験的に決定される重み係数
- Contradictions は信念と現実の矛盾数
- この式により課題の予測困難度を算出可能

### 発達段階との対応

認知負荷と発達段階の関係：

| 年齢 | 処理可能な複雑さ | 典型的課題 |
|------|------------------|------------|
| 3歳 | CognitiveLoad < 5 | 欲求理解 |
| 4歳 | CognitiveLoad < 10 | 一次誤信念 |
| 5歳 | CognitiveLoad < 15 | 複雑な一次誤信念 |
| 6歳 | CognitiveLoad < 25 | 二次誤信念 |
| 7歳+ | CognitiveLoad < 40 | 高次心の理論 |

---

## 3.2.4 課題バリエーションの体系的分類

### 内容による分類

誤信念課題は内容によって以下のように分類できます：

#### Location Change（場所変更）課題
**基本構造**：\\(\\text{Location}(\\text{object}, t_1) \\neq \\text{Location}(\\text{object}, t_2)\\)

**サブタイプ**：
- **Unexpected Transfer**：\\(\\text{Move}(\\text{object}, \\text{loc1}, \\text{loc2}) \\land \\neg\\text{See}_{\\text{agent}}(\\text{Move})\\)
- **Unexpected Identity**：\\(\\text{Identity}(\\text{object}) \\neq \\text{Apparent Identity}\\)

#### Contents False Belief（内容誤信念）課題
**基本構造**：\\(\\text{Contents}(\\text{container}) \\neq \\text{Expected Contents}\\)

**論理的特徴**：
- 外見と内実の乖離：\\(\\text{Appearance} \\rightarrow \\text{Expected} \\land \\text{Reality} \\neq \\text{Expected}\\)
- 先入観の役割：\\(\\text{Prior Knowledge} \\rightarrow \\text{False Expectation}\\)

### 認知プロセスによる分類

#### Inhibitory Control 要求度による分類

**高抑制要求**：自分の知識を強く抑制する必要
\\[\\text{Strong}(K_{\\text{child}}(p)) \\land \\text{Predict}(B_{\\text{other}}(\\neg p))\\]

**低抑制要求**：抑制の必要性が低い
\\[\\text{Weak}(K_{\\text{child}}(p)) \\land \\text{Predict}(B_{\\text{other}}(\\neg p))\\]

#### Working Memory 負荷による分類

**高WM負荷**：多数の情報を同時に保持
\\[\\text{Maintain}(\\{p_1, p_2, ..., p_n, B_A(q_1), B_A(q_2), ..., \\text{Context}\\})\\]

**低WM負荷**：最小限の情報のみ保持
\\[\\text{Maintain}(\\{p, B_A(q)\\})\\]

### 新しい課題タイプの提案

様相論理的分析に基づいて、新しい誤信念課題を設計できます：

#### Conditional False Belief（条件付き誤信念）
**構造**：\\(B_A(p \\rightarrow q) \\land p \\land \\neg q\\)
**例**：「サリーは『もし雨なら傘を持ってくる』と思っているが、実際は雨でも傘を忘れた」

#### Nested Temporal False Belief（入れ子時間誤信念）
**構造**：\\(B_A(B_B^{t_1}(p)) \\land \\neg B_B^{t_1}(p)\\)
**例**：「サリーは、昨日の時点でアンがpを知っていたと思っているが、実際アンは昨日はpを知らなかった」

#### Probabilistic False Belief（確率的誤信念）
**構造**：\\(B_A(P(p) > 0.8) \\land P(p) < 0.2\\)
**例**：「サリーはpが起こる可能性が高いと思っているが、実際は可能性が低い」

---

## 3.2.5 実証研究への含意

### 実験デザインの改善

様相論理的分析は、より精密な実験デザインを可能にします：

#### 統制変数の明確化
- **論理的複雑さ**を統制した課題比較
- **認知負荷**を段階的に変化させた実験
- **エージェント数**と**認識層数**の独立操作

#### 新しい従属変数
- **反応時間**と論理的複雑さの関係
- **視線パターン**と認識状態の推移
- **脳活動**と様相演算子の処理

### 個人差研究の精密化

様相論理により、個人差を更に詳細に分析できます：

#### 認知プロファイル
個人の認知特性を様相論理的能力として表現：
\\[\\text{Profile}(\\text{individual}) = \\{\\text{MaxNesting}, \\text{MaxAgents}, \\text{MaxTimePoints}\\}\\]

#### 発達軌跡
発達を様相論理的能力の拡張として表現：
\\[\\text{Development}: \\text{Ability}(t) = f(\\text{Nesting}(t), \\text{Agents}(t), \\text{Time}(t))\\]

### 介入研究の理論的基盤

#### 訓練プログラムの設計
段階的訓練プログラム：
1. **Level 1**: \\(B_A(p)\\) の理解
2. **Level 2**: \\(B_A(p) \\land \\neg p\\) の理解
3. **Level 3**: \\(B_A(B_B(p))\\) の理解

#### 効果測定の指標
\\[\\text{Improvement} = \\Delta(\\text{MaxComplexity処理可能})\\]

---

## まとめ

この節では、誤信念課題の様相論理的分析を行いました。重要なポイントは以下の通りです：

誤信念課題の論理構造を詳細に分析することで、課題の難易度決定要因を明確にできました。認識層の深さ、時間的複雑さ、エージェント数などが、課題の認知的負荷を決定する主要因子です。

様相論理による形式化は、既存課題の体系的分類と、新しい課題開発の理論的基盤を提供します。これにより、より精密で理論的に基礎づけられた心の理論研究が可能になります。

実証研究への含意として、実験デザインの改善、個人差研究の精密化、介入研究の理論的基盤の構築などが挙げられます。様相論理は、心の理論研究を次のレベルへと押し上げる強力な分析道具となります。

### 次章への展望

第3章の残りの部分では、心の理論以外の心理学分野への様相論理の応用を探求します。認知心理学、社会心理学、臨床心理学における具体的応用例を通じて、様相論理の幅広い有用性を示していきます。

---

## 参考文献

- Wellman, H. M. (2014). *Making Minds: How Theory of Mind Develops*. Oxford University Press.
- Apperly, I. A. (2011). *Mindreaders: The Cognitive Science of How We Understand What Others Think*. Psychology Press.
- Schaafsma, S. M., Pfaff, D. W., Spunt, R. P., & Adolphs, R. (2015). Deconstructing and reconstructing theory of mind. *Trends in Cognitive Sciences*, 19(2), 65-72.
- Peterson, C. C., Wellman, H. M., & Slaughter, V. (2012). The mind behind the message: Advancing theory‐of‐mind scales for typically developing children, and those with deafness, autism, or Asperger syndrome. *Child Development*, 83(2), 469-485.
- Devine, R. T., & Hughes, C. (2014). Relations between false belief understanding and executive function in early childhood: A meta‐analysis. *Child Development*, 85(5), 1777-1794.