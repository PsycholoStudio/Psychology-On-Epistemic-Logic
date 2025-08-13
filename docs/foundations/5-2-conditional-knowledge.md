# 第5章第2節　条件付き知識 【基本】

## 学習目標

この節では、条件や文脈に依存する知識の形式化を学習します。具体的には、条件付き知識演算子の意味論の理解、反実仮想的知識の論理的分析、文脈依存性の形式的表現、そして動的認識論理との関係の把握を目標とします。

!!! summary "本節の概要"

    **条件付き認識**：「もし〜なら〜を知っている」という条件付きの知識を形式化し、仮定的推論や反実仮想的思考を論理的に分析する。
    
    **文脈依存性**：知識が文脈や前提条件によって変化することを認め、より柔軟で現実的な知識表現を可能にする。
    
    **動的更新**：新情報による知識の更新プロセスを条件付き知識として理解し、学習と推論の動的側面を捉える。

---

[前節](5-1-graded-knowledge.md)で知識の段階性を学びましたが、この節では知識の**条件性**という別の重要な側面を探求します。現実の知識の多くは、特定の条件や文脈の下でのみ成立する条件付きの性質を持っています。

## 5.2.1 条件付き知識の必要性

### 日常的な条件付き知識

私たちの知識の多くは、暗黙的または明示的な条件を伴います。

**前提条件付き知識**：「晴れていれば、洗濯物は乾く」「道が混んでいなければ、30分で着く」のように、特定の前提の下での知識があります。これらは単純な\(K\varphi\)では表現できません。

**文脈依存的知識**：「日本では車は左側通行」「フランス料理ではワインを飲む」など、文脈や場所により変化する知識があります。文脈を明示しない知識表現は不完全です。

**時間条件付き知識**：「平日なら店は開いている」「夏なら日が長い」など、時間的条件に依存する知識も多く存在します。

**仮定的知識**：「もし宝くじに当たったら、家を買える」「もし勉強すれば、試験に合格する」のような仮定的状況での知識は、実際の知識とは異なる扱いが必要です。

### 反実仮想的推論

人間の思考において重要な役割を果たす反実仮想的推論も、条件付き知識の一種です。

**過去の反実仮想**：「もしあの時違う選択をしていたら...」という思考は、実際には起こらなかった状況についての条件付き知識を含みます。

**計画と予測**：「もしこの方法を採用すれば、効率が上がるだろう」という予測的知識は、まだ実現していない条件下での知識です。

**因果推論**：「もしAが起こらなかったら、Bも起こらなかった」という因果関係の理解は、反実仮想的条件付き知識として分析できます。

### 学習と更新の文脈

知識の獲得と更新も本質的に条件付きです。

**条件付き学習**：「もし新しい証拠Eを得たら、\(\varphi\)を知ることになる」という学習の可能性を表現する必要があります。

**信念修正**：「もし現在の信念が誤りだと分かったら、どう修正すべきか」という信念修正の論理も条件付き知識を必要とします。

**仮説的推論**：「もし仮説Hが正しければ、観察Oが説明できる」という科学的推論は、条件付き知識の典型例です。

---

## 5.2.2 条件付き知識演算子

### 基本的定式化

条件付き知識を形式的に表現する演算子を導入します。

!!! note "定義5.2.1 —— 条件付き知識演算子"

    **条件付き知識演算子** \(K_\psi\varphi\)：
    
    「\(\psi\)という条件の下で\(\varphi\)を知っている」
    
    **代替記法**：
    - \(K(\varphi | \psi)\)：確率論的記法
    - \(\psi \Rightarrow K\varphi\)：含意的記法
    - \(K^\psi\varphi\)：上付き記法

この演算子により、「雨が降っているという条件で、道が濡れていることを知っている」を\(K_{rain}(wet)\)と表現できます。

### 意味論的解釈

条件付き知識の意味論は、条件による世界の制限として理解できます。

!!! abstract "定義5.2.2 —— 条件付き知識の真理条件"

    **選択関数アプローチ**：
    \[M, w \vDash K_\psi\varphi \text{ iff } \forall v \in f_\psi(w): M, v \vDash \varphi\]
    
    ここで\(f_\psi(w)\)は\(\psi\)が成り立つ\(w\)から到達可能な世界の集合
    
    **制限アプローチ**：
    \[M, w \vDash K_\psi\varphi \text{ iff } M|_\psi, w \vDash K\varphi\]
    
    ここで\(M|_\psi\)は\(\psi\)が真となる世界に制限されたモデル

### 条件付き知識の公理系

条件付き知識の論理的性質を公理化します。

**基本公理**：

1. **条件付きK公理**：\(K_\psi(\varphi \to \chi) \to (K_\psi\varphi \to K_\psi\chi)\)

2. **条件の一貫性**：\(K_\psi\varphi \to \lnot K_\psi\lnot\varphi\)

3. **条件の強化**：\(K_\psi\varphi \land K_\psi\chi \to K_{\psi \land \chi}\varphi\)

4. **空条件**：\(K_\top\varphi \leftrightarrow K\varphi\)（無条件知識との関係）

**条件付き内省公理**：

5. **条件付き正の内省**：\(K_\psi\varphi \to K_\psi K_\psi\varphi\)

6. **条件付き負の内省**：\(\lnot K_\psi\varphi \to K_\psi\lnot K_\psi\varphi\)

これらの公理により、条件付き知識の推論体系が構築されます。

### 入れ子構造

条件付き知識は複雑な入れ子構造を持ちえます。

**二重条件**：\(K_\psi K_\chi\varphi\)
「\(\psi\)の下で、『\(\chi\)の下で\(\varphi\)を知っている』ことを知っている」

**交差条件**：\(K_\psi\varphi \land K_\chi\varphi\)
「\(\psi\)の下でも\(\chi\)の下でも\(\varphi\)を知っている」

**条件の伝播**：\(K_\psi(\chi \to \varphi) \to (K_\psi\chi \to K_\psi\varphi)\)
条件付き知識内での推論の妥当性

---

## 5.2.3 反実仮想的知識

### 反実条件文の論理

反実仮想的条件文（counterfactual conditional）は、実際には成り立たない前提での推論を表現します。

!!! note "定義5.2.3 —— 反実条件文"

    **反実条件文** \(\psi \boxright \varphi\)：
    
    「もし\(\psi\)だったなら、\(\varphi\)だったろう」
    
    **Lewis-Stalnaker意味論**：
    \[M, w \vDash \psi \boxright \varphi \text{ iff } \text{最も近い}\psi\text{-世界で}\varphi\text{が真}\]
    
    **類似度順序**：\(\leq_w\)により世界間の「近さ」を定義

### 反実仮想的知識の形式化

反実条件文を用いて、反実仮想的知識を定義します。

**反実知識演算子**：\(K^{cf}_\psi\varphi\)
「もし\(\psi\)だったなら\(\varphi\)を知っていただろう」

**真理条件**：
\[M, w \vDash K^{cf}_\psi\varphi \text{ iff } M, w \vDash \psi \boxright K\varphi\]

**因果的知識**：
「AがBの原因であることを知っている」
\[K(\text{cause}(A, B)) \equiv K(\lnot A \boxright \lnot B)\]

### 反実仮想推論の応用

反実仮想的知識は多くの認知活動で重要です。

**後悔と学習**：
「もっと勉強していれば合格していただろう」という後悔は、反実仮想的知識\(K^{cf}_{study}(pass)\)を含みます。この知識が将来の行動を改善します。

**説明と理解**：
現象の説明には反実仮想的要素があります。「重力がなければ物は落ちない」という理解は\(K(\lnot gravity \boxright \lnot fall)\)として形式化されます。

**計画と意思決定**：
「この戦略を取れば成功するだろう」という予測は、まだ実現していない条件での知識\(K^{cf}_{strategy}(success)\)です。

---

## 5.2.4 文脈依存的知識

### 文脈の形式化

知識の文脈依存性を明示的に扱います。

!!! abstract "定義5.2.4 —— 文脈化知識"

    **文脈パラメータ** \(c \in \mathcal{C}\)（文脈の集合）
    
    **文脈化知識演算子** \(K^c\varphi\)：
    
    「文脈\(c\)において\(\varphi\)を知っている」
    
    **多次元文脈**：\(c = \langle t, l, s \rangle\)
    - \(t\)：時間文脈
    - \(l\)：場所文脈  
    - \(s\)：社会文脈

### 文脈切り替え

文脈間の知識の変換を扱います。

**文脈変換関数**：\(\tau: \mathcal{C} \times \mathcal{C} \to \mathcal{F}\)
文脈\(c_1\)から\(c_2\)への変換で保存される知識を特定

**不変知識**：
\[\text{Invariant}(\varphi) \equiv \forall c, c' \in \mathcal{C}: K^c\varphi \to K^{c'}\varphi\]

**文脈相対的知識**：
\[\text{Relative}(\varphi) \equiv \exists c, c' \in \mathcal{C}: K^c\varphi \land \lnot K^{c'}\varphi\]

### 文脈の階層構造

文脈には包含関係による階層があります。

**文脈の特殊化**：\(c_1 \sqsubseteq c_2\)（\(c_2\)は\(c_1\)より特殊）

**知識の継承**：
\[c_1 \sqsubseteq c_2 \to (K^{c_1}\varphi \to K^{c_2}\varphi)\]

一般的文脈での知識は特殊文脈でも成立

**デフォルト知識**：
通常文脈での知識を例外的文脈が覆す可能性
\[K^{normal}(birds\_fly) \land K^{penguin}\lnot(penguins\_fly)\]

---

## 5.2.5 動的条件付き知識

### 更新による条件化

新情報による知識の更新を条件付き知識として理解します。

!!! note "定義5.2.5 —— 動的更新"

    **更新演算子** \([\psi]\varphi\)：
    
    「\(\psi\)で更新した後\(\varphi\)が成り立つ」
    
    **条件付き知識との関係**：
    \[[\psi]K\varphi \leftrightarrow K_\psi\varphi\]
    
    更新後の知識は条件付き知識と等価

### 公開告知の論理

公開告知（public announcement）による知識更新を分析します。

**告知演算子**：\([!\psi]\varphi\)
「\(\psi\)が公開告知された後\(\varphi\)」

**知識への影響**：
\[[!\psi]K\varphi \leftrightarrow (\psi \to K[\psi]\varphi)\]

**共通知識の生成**：
公開告知により共通知識が生成される
\[[!\psi]C\psi\]（\(\psi\)の告知後、\(\psi\)は共通知識）

### 信念修正との関係

AGM理論の信念修正を条件付き知識で表現します。

**修正演算子**：\(K * \psi\)
知識集合\(K\)を\(\psi\)で修正

**条件付き知識表現**：
\[\varphi \in K * \psi \equiv K_\psi\varphi\]

**修正の公理**（AGM公準の条件付き知識版）：
1. 成功：\(K_\psi\psi\)
2. 一貫性：\(\lnot K_\psi\bot\)（\(\psi\)が一貫的なら）
3. 保存：\(K\varphi \land \lnot K\lnot\psi \to K_\psi\varphi\)

---

## 5.2.6 条件付き知識の応用

### 診断推論システム

医療診断や故障診断で条件付き知識が活用されます。

**症状条件付き診断**：
```
K_{fever ∧ cough}(flu) = 0.7
K_{fever ∧ rash}(measles) = 0.8
```

**段階的診断**：
初期症状から詳細検査まで、条件を追加しながら診断を精緻化
\[K_{s_1}(d) \to K_{s_1 \land s_2}(d') \to K_{s_1 \land s_2 \land test}(d'')\]

**鑑別診断**：
異なる条件下での知識を比較し、最も可能性の高い診断を選択

### 法的推論

法律の適用は本質的に条件付きです。

**条件付き法的知識**：
「もし行為Aが意図的なら、犯罪Cが成立する」
\[K_{intentional(A)}(crime(C))\]

**前例の適用**：
過去の判例を現在の事案に適用する際の条件マッチング
\[K_{similar(case1, case2)}(same\_judgment)\]

**反実仮想的責任論**：
「もし適切な注意をしていれば事故は防げた」
\[K^{cf}_{proper\_care}(\lnot accident)\]

### 自然言語処理

文脈依存的な言語理解に条件付き知識が重要です。

**文脈依存的語義**：
```python
K_context("bank", "金融機関") if context = "finance"
K_context("bank", "土手") if context = "river"
```

**前提条件の推論**：
「彼は傘を持っている」→「雨が降っている（可能性が高い）」
\[K_{umbrella}(probably\_raining)\]

**会話の含意**：
発話の文脈による含意の理解
\[K_{context}(implicature)\]

### 機械学習での活用

条件付き知識は機械学習の解釈性向上に貢献します。

**条件付き予測**：
「特徴Xがある条件でラベルYを予測」
\[K_{features=X}(label=Y)\]

**説明可能AI**：
モデルの判断を条件付き知識として説明
「もし年齢が65歳以上なら、リスクが高いと判断」

**転移学習**：
ソースドメインの知識をターゲットドメインの条件下で適用
\[K^{source}_\psi\varphi \to K^{target}_{\psi'}\varphi'\]

---

## まとめ

この節では、条件付き知識の理論と応用を体系的に学習しました。重要なポイントは以下の通りです：

条件付き知識は現実の認識活動において遍在的であり、前提条件、文脈依存性、時間条件、仮定的状況など、様々な形で現れます。単純な知識演算子では捉えられないこれらの側面を形式化することが重要です。

条件付き知識演算子\(K_\psi\varphi\)により、「条件\(\psi\)の下で\(\varphi\)を知っている」を表現できます。選択関数アプローチや制限アプローチによる意味論、条件付き知識の公理系により、条件付き推論の論理的構造が明確になります。

反実仮想的知識は、実際には成り立たない条件での知識を扱い、因果推論、説明、計画などの認知活動で重要な役割を果たします。Lewis-Stalnaker意味論により、反実条件文と反実仮想的知識を厳密に分析できます。

文脈依存的知識は、知識が文脈パラメータにより変化することを明示的に扱います。文脈の階層構造、文脈間の変換、デフォルト知識と例外など、現実的な知識表現が可能になります。

動的条件付き知識は、新情報による知識更新を条件化として理解し、公開告知の論理、AGM信念修正理論との関係を明らかにします。学習と推論の動的側面を統一的に扱えます。

条件付き知識の応用は、診断推論、法的推論、自然言語処理、機械学習など多岐にわたり、実用システムの設計において重要な理論的基礎を提供します。

### 次節への展望

次の第3節「不完全情報の論理」では、部分的にしか情報を持たない状況での推論を扱います。不確実性、曖昧性、無知の表現と、それらの下での合理的推論の方法を学習します。

---

## 参考文献

- Lewis, D. (1973). *Counterfactuals*. Blackwell.
- Stalnaker, R. (1968). A theory of conditionals. In N. Rescher (Ed.), *Studies in Logical Theory* (pp. 98-112). Blackwell.
- Baltag, A., & Moss, L. S. (2004). Logics for epistemic programs. *Synthese*, 139(2), 165-224.
- van Ditmarsch, H., van der Hoek, W., & Kooi, B. (2007). *Dynamic Epistemic Logic*. Springer.
- Boutilier, C. (1994). Conditional logics of normality: A modal approach. *Artificial Intelligence*, 68(1), 87-154.
- Giordano, L., Gliozzi, V., Olivetti, N., & Pozzato, G. L. (2007). Preferential description logics. In *Logic for Programming, Artificial Intelligence, and Reasoning* (pp. 257-272).
- Alchourrón, C. E., Gärdenfors, P., & Makinson, D. (1985). On the logic of theory change: Partial meet contraction and revision functions. *Journal of Symbolic Logic*, 50(2), 510-530.
- Plaza, J. (1989). Logics of public communications. In *Proceedings of the 4th International Symposium on Methodologies for Intelligent Systems* (pp. 201-216).