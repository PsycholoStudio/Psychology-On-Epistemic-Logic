# Claude Code作業メモ

## プロジェクト概要
「心理学のための様相論理入門」教科書の執筆プロジェト

### 目標
- MkDocs Material + KaTeXを使用したGitHub Pages公開
- 基礎編20章 + 応用編20章の体系的構成
- 各章に実装例（Python + Jupyter Notebook）を含める
- 難易度表示（【基本】【発展】【参考】）による学習支援

## 現在の状況

### 完了済み
- GitHubリポジトリ接続: https://github.com/PsycholoStudio/Psychology-On-Epistemic-Logic.git
- MkDocs Material + KaTeX環境構築
- GitHub Actions自動デプロイ設定
- 基本的なディレクトリ構造
- 執筆ガイドラインの確認

### ディレクトリ構造（節ごと分割方式）
```
心理学のための様相論理入門/
├── docs/               # MkDocsコンテンツ
│   ├── index.md       # ホームページ
│   ├── foundations/   # 基礎編（節ごとに分割）
│   │   ├── 1-1-propositional-logic.md      # 第1章第1節
│   │   ├── 1-2-modal-motivation.md         # 第1章第2節
│   │   ├── 1-3-modal-syntax.md             # 第1章第3節
│   │   ├── 1-4-applications-overview.md    # 第1章第4節
│   │   ├── 1-5-logic-and-mind.md           # 第1章第5節
│   │   └── ...                             # 以降各節
│   ├── applications/  # 応用編（節ごとに分割）
│   │   ├── 1-1-theory-of-mind.md
│   │   └── ...
│   ├── images/        # 図表
│   ├── code/          # 実装例
│   ├── exercises/     # 演習問題
│   ├── javascripts/   # MathJax設定
│   └── stylesheets/   # カスタムCSS
├── writing-guides/    # 執筆ガイド（非公開）
├── mkdocs.yml         # MkDocs設定
├── requirements.txt   # Python依存関係
└── .github/workflows/ # GitHub Actions
```

### ファイル構成ルール
1. **節レベル分割**: 各節を独立したMarkdownファイル
2. **命名規則**: 章番号-節番号-英語節名.md
3. **内容規模**: 1節あたり3000-5000字程度
4. **独立性**: 各節で完結、必要時に相互参照
5. **文章重視**: 箇条書き最小限、段落による丁寧な説明

### 設定ファイル
- **mkdocs.yml**: Material theme、日本語対応、KaTeX数式表示
- **requirements.txt**: MkDocs Material等の依存関係
- **GitHub Actions**: 自動ビルド・デプロイ設定済み

## 執筆方針

## 完全目次とディレクトリ構造

### 基礎編（20章）

#### 第I部：様相論理の基礎

**第1章　様相論理入門** 【基本】
- `foundations/1-1-propositional-logic.md` - 1.1 命題論理の復習
- `foundations/1-2-modal-motivation.md` - 1.2 様相論理の動機と直観
- `foundations/1-3-modal-syntax.md` - 1.3 様相言語の構文
- `foundations/1-4-applications-overview.md` - 1.4 応用分野概観
- `foundations/1-5-logic-and-mind.md` - 1.5 論理と心の関係

**第2章　クリプキ意味論** 【基本】
- `foundations/2-1-possible-worlds.md` - 2.1 可能世界の概念
- `foundations/2-2-kripke-frames.md` - 2.2 クリプキフレームとモデル
- `foundations/2-3-truth-conditions.md` - 2.3 真理条件と妥当性
- `foundations/2-4-frame-properties.md` - 2.4 フレームの性質
- `foundations/2-5-general-frames.md` - 2.5 一般フレーム理論【発展】

**第3章　様相論理の体系** 【基本】
- `foundations/3-1-minimal-logic-k.md` - 3.1 最小正規様相論理K
- `foundations/3-2-classical-systems.md` - 3.2 古典的様相論理
- `foundations/3-3-proof-theory.md` - 3.3 証明論
- `foundations/3-4-correspondence.md` - 3.4 対応理論
- `foundations/3-5-proof-semantics.md` - 3.5 証明論的意味論【発展】

#### 第II部：認識論理の理論

**第4章　知識と信念の論理** 【基本】
- `foundations/4-1-epistemic-background.md` - 4.1 認識論的背景
- `foundations/4-2-knowledge-logic.md` - 4.2 知識の論理S5
- `foundations/4-3-belief-logic.md` - 4.3 信念の論理KD45
- `foundations/4-4-mixed-systems.md` - 4.4 混合システム

**第5章　認識論理の変種と比較** 【基本】
- `foundations/5-1-graded-knowledge.md` - 5.1 知識の段階理論
- `foundations/5-2-conditional-knowledge.md` - 5.2 条件付き知識
- `foundations/5-3-incomplete-information.md` - 5.3 不完全情報の論理
- `foundations/5-4-resource-bounded.md` - 5.4 資源制約付き推論
- `foundations/5-5-nonstandard.md` - 5.5 非標準的アプローチ【発展】

**第6章　完全性定理の詳細** 【発展】
- `foundations/6-1-preparations.md` - 6.1 準備
- `foundations/6-2-canonical-construction.md` - 6.2 標準モデル構成
- `foundations/6-3-truth-lemma.md` - 6.3 真理補題の証明
- `foundations/6-4-s5-completeness.md` - 6.4 S5の完全性
- `foundations/6-5-algebraic.md` - 6.5 代数的完全性【参考】

**第7章　マルチエージェント認識論理** 【基本】
- `foundations/7-1-multi-agent.md` - 7.1 複数主体への拡張
- `foundations/7-2-group-epistemology.md` - 7.2 グループ認識論
- `foundations/7-3-fixed-points.md` - 7.3 不動点定理
- `foundations/7-4-applications.md` - 7.4 応用例
- `foundations/7-5-game-semantics.md` - 7.5 認識論理のゲーム意味論【発展】

#### 第III部：拡張と一般化

**第8章　確率的認識論理** 【基本】
- `foundations/8-1-probability-interpretation.md` - 8.1 確率の解釈
- `foundations/8-2-probabilistic-models.md` - 8.2 確率的クリプキモデル
- `foundations/8-3-probabilistic-operators.md` - 8.3 確率的様相演算子
- `foundations/8-4-belief-revision.md` - 8.4 信念更新
- `foundations/8-5-measure-theory.md` - 8.5 測度論的基礎【発展】
- `foundations/8-6-scientific-reasoning.md` - 8.6 科学的推論への応用

**第9章　動的認識論理** 【基本】
- `foundations/9-1-static-to-dynamic.md` - 9.1 静的から動的へ
- `foundations/9-2-public-announcement.md` - 9.2 公開告知論理PAL
- `foundations/9-3-general-actions.md` - 9.3 一般的な行為モデル
- `foundations/9-4-belief-revision.md` - 9.4 信念修正理論
- `foundations/9-5-protocol-theory.md` - 9.5 プロトコル理論【発展】

**第10章　計算論的側面** 【基本】
- `foundations/10-1-decision-problems.md` - 10.1 決定問題
- `foundations/10-2-complexity-hierarchy.md` - 10.2 複雑性階層
- `foundations/10-3-algorithms.md` - 10.3 アルゴリズム
- `foundations/10-4-implementation.md` - 10.4 実装技術
- `foundations/10-5-descriptive-complexity.md` - 10.5 記述複雑性理論【発展】

**第11章　時相認識論理と学習** 【基本】
- `foundations/11-1-temporal-logic.md` - 11.1 時間の論理
- `foundations/11-2-learning-models.md` - 11.2 学習の時相モデル
- `foundations/11-3-habit-formation.md` - 11.3 習慣形成の論理
- `foundations/11-4-conditioning.md` - 11.4 条件付けの形式理論
- `foundations/11-5-psychological-time.md` - 11.5 心理的時間【発展】

**第12章　矛盾許容論理と非古典的アプローチ** 【発展】
- `foundations/12-1-paraconsistent-basics.md` - 12.1 矛盾許容論理の基礎
- `foundations/12-2-paraconsistent-epistemic.md` - 12.2 矛盾許容認識論理
- `foundations/12-3-fuzzy-epistemic.md` - 12.3 ファジー認識論理
- `foundations/12-4-many-valued.md` - 12.4 多値様相論理

**第13章　神経認識論理** 【発展】
- `foundations/13-1-neural-modeling.md` - 13.1 神経活動の論理的モデル化
- `foundations/13-2-brain-regions.md` - 13.2 脳領域間の認識論理
- `foundations/13-3-predictive-coding.md` - 13.3 予測符号化と自由エネルギー原理
- `foundations/13-4-applications.md` - 13.4 神経認識論理の応用

#### 第IV部：高度な理論的基礎

**第14章　代数的・位相的アプローチ** 【発展】
- `foundations/14-1-algebraic-semantics.md` - 14.1 代数的意味論
- `foundations/14-2-topological-semantics.md` - 14.2 位相的意味論
- `foundations/14-3-categorical-unity.md` - 14.3 圏論的統一【参考】
- `foundations/14-4-concrete-applications.md` - 14.4 具体例と応用

**第15章　型理論と構成的様相論理** 【発展】
- `foundations/15-1-typed-modal.md` - 15.1 型付き様相論理
- `foundations/15-2-curry-howard.md` - 15.2 カリー・ハワード対応
- `foundations/15-3-constructive-modal.md` - 15.3 構成的様相論理
- `foundations/15-4-implementations.md` - 15.4 実装例

**第16章　動的・戦略的論理** 【発展】
- `foundations/16-1-pdl.md` - 16.1 命題動的論理（PDL）
- `foundations/16-2-game-logic.md` - 16.2 ゲーム論理
- `foundations/16-3-strategy-logic.md` - 16.3 戦略論理

**第17章　定量的認識論理** 【基本】
- `foundations/17-1-resource-constraints.md` - 17.1 資源制約
- `foundations/17-2-confidence-refinement.md` - 17.2 確信度の精密化
- `foundations/17-3-approximate-reasoning.md` - 17.3 近似推論
- `foundations/17-4-rational-analysis.md` - 17.4 合理的分析

**第18章　メタ理論と統合** 【発展】
- `foundations/18-1-metatheoretic-properties.md` - 18.1 メタ論理的性質
- `foundations/18-2-translations.md` - 18.2 翻訳と埋め込み
- `foundations/18-3-modular-construction.md` - 18.3 モジュラー構成
- `foundations/18-4-transfer-results.md` - 18.4 転移結果

#### 第V部：メタ理論と科学論

**第19章　認識論理の統一理論に向けて** 【発展】
- `foundations/19-1-approach-comparison.md` - 19.1 様々なアプローチの比較
- `foundations/19-2-unified-framework.md` - 19.2 統一フレームワーク
- `foundations/19-3-metalogic.md` - 19.3 メタ論理
- `foundations/19-4-bridging-applications.md` - 19.4 応用への橋渡し

**第20章　認識論としての科学論** 【基本】
- `foundations/20-1-scientific-knowledge.md` - 20.1 科学的知識の本質
- `foundations/20-2-scientific-reasoning.md` - 20.2 科学的推論の形式理論
- `foundations/20-3-explanation-models.md` - 20.3 科学的説明のモデル
- `foundations/20-4-theory-change.md` - 20.4 理論変化の論理
- `foundations/20-5-scientific-realism.md` - 20.5 科学的実在論の認識論
- `foundations/20-6-social-epistemology.md` - 20.6 科学の社会認識論
- `foundations/20-7-formalization.md` - 20.7 認識論理による科学論の形式化

### 応用編（20章）

#### 第I部：個人認知

**第1章　心の理論と発達・老化** 【基本】
- `applications/1-1-theory-of-mind.md` - 1.1 心の理論の形式化
- `applications/1-2-cognitive-development.md` - 1.2 認知発達の論理
- `applications/1-3-aging-cognition.md` - 1.3 認知的老化の理論
- `applications/1-4-individual-differences.md` - 1.4 個人差の要因分析

**第2章　メタ認知と推論** 【基本】
- `applications/2-1-metacognition.md` - 2.1 メタ認知の階層構造
- `applications/2-2-reasoning-biases.md` - 2.2 推論バイアスと論理
- `applications/2-3-decision-making.md` - 2.3 意思決定の認識論理
- `applications/2-4-problem-solving.md` - 2.4 問題解決プロセス

**第3章　記憶と学習** 【基本】
- `applications/3-1-memory-systems.md` - 3.1 記憶システムの論理
- `applications/3-2-learning-processes.md` - 3.2 学習過程の動的モデル
- `applications/3-3-forgetting.md` - 3.3 忘却の形式理論
- `applications/3-4-transfer.md` - 3.4 転移と般化

#### 第II部：社会認知

**第4章　社会的推論** 【基本】
- `applications/4-1-social-reasoning.md` - 4.1 社会的推論の論理
- `applications/4-2-attribution.md` - 4.2 帰属理論の形式化
- `applications/4-3-stereotyping.md` - 4.3 ステレオタイプと偏見
- `applications/4-4-impression-formation.md` - 4.4 印象形成のプロセス

**第5章　コミュニケーションと言語** 【基本】
- `applications/5-1-pragmatics.md` - 5.1 語用論の認識論理
- `applications/5-2-conversational-implicature.md` - 5.2 会話の含意
- `applications/5-3-miscommunication.md` - 5.3 誤解とコミュニケーション失敗
- `applications/5-4-language-development.md` - 5.4 言語発達の論理

**第6章　道徳と価値判断** 【基本】
- `applications/6-1-moral-reasoning.md` - 6.1 道徳的推論の論理
- `applications/6-2-ethical-dilemmas.md` - 6.2 倫理的ジレンマの分析
- `applications/6-3-value-systems.md` - 6.3 価値体系の構造
- `applications/6-4-moral-development.md` - 6.4 道徳発達の段階

#### 第III部：認知アーキテクチャと意識

**第7章　ICSモデルと統合認知理論** 【基本】
- `applications/7-1-ics-model.md` - 7.1 ICSモデルの基礎
- `applications/7-2-propositional-implicational.md` - 7.2 命題的・含意的処理
- `applications/7-3-cognitive-integration.md` - 7.3 認知統合のメカニズム
- `applications/7-4-clinical-applications.md` - 7.4 臨床応用

**第8章　感情と認知** 【基本】
- `applications/8-1-emotion-cognition.md` - 8.1 感情と認知の相互作用
- `applications/8-2-affective-biases.md` - 8.2 感情バイアスの論理
- `applications/8-3-mood-disorders.md` - 8.3 気分障害の認知モデル
- `applications/8-4-emotion-regulation.md` - 8.4 感情調節の戦略

**第9章　マインドフルネスと意識** 【基本】
- `applications/9-1-mindfulness.md` - 9.1 マインドフルネスの認識論理
- `applications/9-2-attention.md` - 9.2 注意と意識の関係
- `applications/9-3-self-awareness.md` - 9.3 自己覚知の構造
- `applications/9-4-contemplative-practices.md` - 9.4 瞑想的実践の理論

**第10章　学習とパフォーマンス** 【基本】
- `applications/10-1-skill-acquisition.md` - 10.1 技能習得の論理
- `applications/10-2-expertise.md` - 10.2 熟達者の認識構造
- `applications/10-3-performance-optimization.md` - 10.3 パフォーマンス最適化
- `applications/10-4-flow-states.md` - 10.4 フロー状態の理論

#### 第IV部：臨床心理学

**第11章　精神病理の認識論理** 【基本】
- `applications/11-1-psychopathology.md` - 11.1 精神病理の論理的分析
- `applications/11-2-delusions.md` - 11.2 妄想の認識論理
- `applications/11-3-anxiety-disorders.md` - 11.3 不安障害のモデル
- `applications/11-4-depression.md` - 11.4 うつ病の認知理論

**第12章　治療と行動変容** 【基本】
- `applications/12-1-therapeutic-change.md` - 12.1 治療的変化の論理
- `applications/12-2-cognitive-therapy.md` - 12.2 認知療法の形式理論
- `applications/12-3-behavior-modification.md` - 12.3 行動変容の原理
- `applications/12-4-therapeutic-relationship.md` - 12.4 治療関係の動態

#### 第V部：応用と展望

**第13章　ウェルビーイングと人生の意味** 【基本】
- `applications/13-1-wellbeing.md` - 13.1 ウェルビーイングの構造
- `applications/13-2-meaning-life.md` - 13.2 人生の意味の認識論理
- `applications/13-3-happiness.md` - 13.3 幸福の多元的理論
- `applications/13-4-flourishing.md` - 13.4 人間の繁栄モデル

**第14章　身体化認知と環境** 【基本】
- `applications/14-1-embodied-cognition.md` - 14.1 身体化認知の論理
- `applications/14-2-environmental-psychology.md` - 14.2 環境心理学的視点
- `applications/14-3-ecological-rationality.md` - 14.3 生態学的合理性
- `applications/14-4-situated-cognition.md` - 14.4 状況的認知の理論

**第15章　デジタル行動変容とAI** 【基本】
- `applications/15-1-digital-interventions.md` - 15.1 デジタル介入の設計
- `applications/15-2-ai-psychology.md` - 15.2 AI と心理学の統合
- `applications/15-3-human-ai-interaction.md` - 15.3 人間-AI相互作用
- `applications/15-4-ethical-considerations.md` - 15.4 倫理的考察

**第16章　教育への応用** 【基本】
- `applications/16-1-educational-psychology.md` - 16.1 教育心理学への応用
- `applications/16-2-conceptual-change.md` - 16.2 概念変化の論理
- `applications/16-3-collaborative-learning.md` - 16.3 協調学習のモデル
- `applications/16-4-assessment.md` - 16.4 評価の認識論的基礎

**第17章　組織行動** 【基本】
- `applications/17-1-organizational-behavior.md` - 17.1 組織行動の認識論理
- `applications/17-2-decision-making.md` - 17.2 組織的意思決定
- `applications/17-3-leadership.md` - 17.3 リーダーシップの理論
- `applications/17-4-team-dynamics.md` - 17.4 チーム動態の分析

**第18章　創造性と革新** 【基本】
- `applications/18-1-creativity.md` - 18.1 創造性の認識論理
- `applications/18-2-innovation.md` - 18.2 革新プロセスの理論
- `applications/18-3-artistic-cognition.md` - 18.3 芸術的認知の分析
- `applications/18-4-scientific-creativity.md` - 18.4 科学的創造性

**第19章　文化と多様性** 【基本】
- `applications/19-1-cultural-psychology.md` - 19.1 文化心理学の論理
- `applications/19-2-cross-cultural.md` - 19.2 異文化間認知の比較
- `applications/19-3-diversity.md` - 19.3 多様性の認識論的価値
- `applications/19-4-indigenous-psychology.md` - 19.4 土着心理学の統合

**第20章　未来の心理学** 【発展】
- `applications/20-1-emerging-technologies.md` - 20.1 新興技術と心理学
- `applications/20-2-global-challenges.md` - 20.2 グローバル課題への貢献
- `applications/20-3-interdisciplinary.md` - 20.3 学際的統合の展望
- `applications/20-4-next-paradigm.md` - 20.4 次世代パラダイムへの道筋

### 基礎編構成（20章）
1. **第I部：様相論理の基礎**（第1-3章）
2. **第II部：認識論理の理論**（第4-7章）
3. **第III部：拡張と一般化**（第8-13章）
4. **第IV部：高度な理論**（第14-18章）
5. **第V部：メタ理論と科学論**（第19-20章）

### 応用編構成（20章）
1. **第I部：個人認知**（第1-3章）
2. **第II部：社会認知**（第4-6章）
3. **第III部：認知アーキテクチャと意識**（第7-10章）
4. **第IV部：臨床心理学**（第11-12章）
5. **第V部：応用と展望**（第13-20章）

### 各章の構成要素
- 学習目標
- 難易度表示（【基本】【発展】【参考】）
- 理論的内容
- 具体例とケーススタディ
- 実装例（Python + Jupyter）
- 演習問題
- 参考文献

### 執筆スタイル・ルール

#### 文章中心主義
- 箇条書きは最小限に抑制
- 段落による丁寧な文章説明を重視
- 読み手を意識した流れのある記述

#### 記号・用語の親切な説明
- **新しい記号の導入時**：必ず読み方を併記
  例：\\(\\Box\\)（「ボックス」と読む）
- **用語の語源・由来**：可能な限り説明
- **ギリシャ文字**：読み方を必ず記載
  例：\\(\\phi\\)（「ファイ」と読む）
- **専門用語**：初出時に英語併記
  例：様相論理（Modal Logic）
- **記号表の挿入**：複数の新記号が登場する節では、
  節の最後に記号一覧表を提供
  
  例：
  | 記号 | 読み方 | 意味 | 例 |
  |------|--------|------|-----|
  | \\(\\Box\\) | ボックス | 必然性 | \\(\\Box p\\): 必然的に p |
  | \\(\\Diamond\\) | ダイヤモンド | 可能性 | \\(\\Diamond p\\): 可能的に p |

#### 心理学的視点の徹底
- 常に心理学との関連性を明示
- 抽象的概念の心理学的解釈を提供
- 具体的な心理学研究例との対応

#### 節の独立性
- 各節3000-5000字程度の完結した内容
- 必要時の相互参照リンク
- 前提知識の適度な再確認

## 理論的革新要素

### 統合される理論
- **矛盾許容認識論理**: 精神病理や日常推論の矛盾処理
- **神経認識論理**: 脳活動と論理的推論の架橋
- **ICSモデル**: 感情と認知の相互作用（命題的/含意的処理）
- **量子認知**: 文脈依存性と非古典的確率
- **科学論の形式化**: 認識論としての科学的知識

### 実装技術
- Python実装例
- Jupyter Notebook環境
- 可視化ツール
- シミュレーション環境

## 次の作業

### 即座に必要な作業
1. 前準備の完了（ディレクトリ構造、リソース整備）
2. まえがき・序文の執筆
3. 基礎編第1章「様相論理入門」の執筆開始

### 執筆進行方針
- 各章を節ごとに丁寧に執筆
- 理論説明→具体例→実装例の流れ
- 数式はKaTeX記法で美しく表示
- 図表は適切に配置

## 技術的設定

### MathJax設定
- インライン数式: `\\(...\\)`
- ディスプレイ数式: `\\[...\\]`
- 日本語フォント対応済み

### 品質管理
- 各章完成後のレビュー
- 実装例の動作確認
- 演習問題の解答可能性確認
- 理論的一貫性の検証

## 【重要】執筆ルール抜粋

### ⚠️ 執筆開始前に必ず確認 ⚠️

#### 1. 散文重視の絶対原則
**箇条書きを多用せず、文章による丁寧な説明を心がける**
- ❌ 悪い例：概念の要点を箇条書きで列挙
- ✅ 良い例：概念間の関係を文章で丁寧に説明し、論理的つながりを明示

#### 2. 論理式の解題義務
**様相論理や論理式を提示した場合は、必ず文章による解題・説明を併記する**
- 論理記号に慣れない読者への配慮
- 記号的表現と自然言語での説明を両方提供
- 例：\\(K_a K_b p\\) → 「エージェントAは、エージェントBがpを知っていることを知っている。これは、Aが他者Bの知識状態について二次的な認識を持っていることを意味し、心の理論の高次な段階を表している」

#### 3. 適切な引用の徹底
- 文中で言及したすべての理論・研究に適切な引用を付ける
- 引用形式：（著者名, 年）の統一
- 参考文献リストとの完全な対応

#### 4. 段階的執筆戦略
- 1ファイル全体を一度に書くのではなく、各項（subsection）を十分に執筆
- 各項目で目標文字数（3000-5000字）達成後に次へ
- 箇条書きを避け、文章で概念間のつながりを説明

### 品質チェックリスト

#### 執筆開始前
- [ ] このCLAUDE.mdを熟読し、全ルールを理解
- [ ] 箇条書き多用の回避を意識
- [ ] 論理式解題の義務を認識

#### 執筆中
- [ ] 箇条書きを避け、文章で丁寧に説明
- [ ] 論理式にはすべて文章解題を付加
- [ ] 理論・研究言及時には適切な引用

#### 執筆後
- [ ] 箇条書きが残っていないか確認
- [ ] すべての論理式に解題があるか確認
- [ ] 文中引用と参考文献リストの対応確認

### 違反しやすい注意点

1. **箇条書きの誘惑**：複数項目を説明する際、箇条書きにせず文章でつなげる
2. **論理式の放置**：記号を提示したら必ず自然言語で説明
3. **引用の忘れ**：有名な理論でも必ず原典を引用
4. **専門用語の説明不足**：初出時の丁寧な導入を怠らない

### 5. 基礎章における心理学的内容の扱い

#### 基礎編（特に第1-2章）での心理学的内容の制限

**原則：基礎的な論理学的内容を確立してから応用へ**
- 第1-2章では純粋に論理学的な基礎を説明
- 心理学的応用や解釈は最小限に留める
- 「心理学的に解釈すると」のような拙速な応用は避ける

**自然言語での説明と例文の重要性**
- 心理学的解釈の代わりに、日常的な例文や自然言語での説明を充実
- 抽象的な論理概念を身近な例で理解させる
- 例：SNSのフォロー関係、電車の乗り継ぎ、料理レシピの信頼性など

**段階的導入の原則**
1. 第1-2章：純粋な論理学的基礎（日常例での説明）
2. 第3章以降：徐々に認識論的な内容を導入
3. 応用編：本格的な心理学的応用

### 6. Markdownリスト記法の注意事項

#### リスト前の空行必須ルール

**原則：すべてのリストの前には空行を入れる**
- Markdownの正しいレンダリングのため必須
- 段落からリストへの移行時は必ず空行
- リスト間の切り替え時も空行を推奨

**正しい例：**
```markdown
ここは段落の文章です。

- リスト項目1
- リスト項目2
```

**間違った例：**
```markdown
ここは段落の文章です。
- リスト項目1  ← 空行がないとレンダリングされない可能性
```

### 7. 参考文献の管理ルール

#### 心理学的内容を削除した場合の参考文献処理

**原則：内容と参考文献の一致を保つ**
- 本文で言及されていない文献は参考文献リストから削除
- 心理学的内容を削除した場合、関連する心理学文献も削除
- 論理学的内容に対応する文献は残す

**参考文献の分類**
- **必須文献**：本文で直接引用・言及されている文献
- **推奨文献**：さらなる学習のための参考書（明示的に「さらなる学習のために」と記載）
- **削除対象**：本文で使用されていない文献

**引用の一貫性チェック**
- 各節の執筆完了後、本文の引用と参考文献リストを照合
- 孤立した参考文献（本文で言及なし）は削除
- 本文で言及した文献が参考文献リストにあることを確認

### 8. MkDocs Material Admonitionsの活用

#### 視覚的ボックスの使い方ルール

**冒頭要約ボックス** (`!!! summary "本節の概要"`)
- 各節の冒頭に配置（学習目標の直後）
- 3-4つのキーポイントで節の全体像を提示
- 読者が内容を予習できるよう簡潔に要約

**定義ボックス** (`!!! note "定義X.Y.Z —— 定義名"`)
- 形式的定義や重要概念の厳密な説明
- 番号付きで体系的に管理
- 青色枠線で学術的重要性を表現

**定理・性質ボックス** (`!!! abstract "定理X.Y.Z —— 定理名"`)
- 重要な理論的結果や性質
- 紫色枠線で理論的深度を強調
- 証明への言及も含める

**応用例ボックス** (`!!! example "心理学的応用例：タイトル"`)
- 理論の具体的応用や実例
- 緑色枠線で実践的価値を表現
- 必ず「解題」セクションで論理式を自然言語で説明

**分析・洞察ボックス** (`!!! tip "分析テーマ"`)
- 深い洞察や複雑な分析
- 黄色枠線で重要な発見を強調
- 理論間の関連性や含意を説明

**注意・警告ボックス** (`!!! warning "注意点"`)
- 誤解しやすいポイントや制限事項
- オレンジ色枠線で注意喚起
- よくある誤解の予防

**補足情報ボックス** (`!!! info "補足：タイトル"`)
- 発展的内容や背景情報
- 水色枠線で補助的情報を整理
- 主要内容の理解を深める情報

#### ボックス使用の指針

1. **1節あたり3-5個程度**に抑制（読みやすさ重視）
2. **冒頭要約は必須**、末尾要約は不要（重複回避）
3. **論理式には必ず解題を併記**（初学者への配慮）
4. **色の使い分けで情報の性質を明確化**
5. **ボックス間の適切な間隔**で視認性確保

#### ⚠️ ボックス分類の厳密なルール ⚠️

**「定義」ボックスは数学的・論理的定義のみ使用**
- ✅ 使用可能：クリプキフレーム、様相演算子、認識論理など形式的概念の定義
- ❌ 使用禁止：解説・説明・特徴・応用事例・心理学的意味などの記述的内容
- 判定基準：「定義X.Y.Z」として番号を付けられる形式的定義かどうか

**「定理・性質」ボックスの判定基準**
- ✅ 使用可能：完全性定理、対応定理、数学的性質（反射性・推移性等）
- ❌ 使用禁止：一般的説明、特徴的性質、応用方法

**その他のボックスとの使い分け**
- **説明的内容** → `!!! info "情報タイトル"` 
- **特徴や性質** → `!!! abstract "抽象タイトル"` （定義以外）
- **心理学的解釈** → `!!! example "心理学的応用例"`
- **重要な洞察** → `!!! tip "分析のポイント"`

**厳密な判定フロー**
1. 数学的・論理的な形式的定義か？ → Yes: `note` (定義)
2. 証明可能な定理や数学的性質か？ → Yes: `abstract` (定理・性質)
3. 心理学的応用や具体例か？ → Yes: `example`
4. 重要な分析や洞察か？ → Yes: `tip`
5. 補足的な情報や背景説明か？ → Yes: `info`
6. 注意すべき点や制限事項か？ → Yes: `warning`

#### 実例による使い分け

**✅ 正しい「定義」ボックスの使用例**
```markdown
!!! note "定義2.1.1 —— クリプキフレーム"
    **クリプキフレーム** F = ⟨W, R⟩ は次のように定義される：
    - W：空でない可能世界の集合
    - R ⊆ W × W：二項関係（到達可能性関係）
```

**❌ 間違った「定義」ボックスの使用例**
```markdown
!!! note "定義2.1.X —— 心理学的応用"    # ← 間違い！
    心理学的文脈では、可能世界は...   # ← これは説明であり定義ではない
```

**✅ 正しい代替案**
```markdown
!!! example "心理学的応用例：認知状態のモデル化"
    心理学的文脈では、可能世界は認知主体が想定する...
```

**✅ 正しい「性質」ボックスの使用例**
```markdown
!!! abstract "定義2.4.1 —— 反射性"
    **反射性**：到達可能性関係 R が**反射的**である
    **数学的定義**：∀w ∈ W (wRw)
```

**❌ 間違った使用を避ける例**
- 「フレーム対応理論の基本原理」← 説明的内容なので `info`
- 「心理学的妥当性の検討」← 分析的内容なので `tip`
- 「認知的制約の形式化」← 応用例なので `example`

#### 境界事例の判定

**境界事例1：フレーム対応理論**
- 数学的定理であれば `abstract`
- 一般的説明であれば `info`
- 判定基準：厳密な数学的陳述かどうか

**境界事例2：心理学的解釈**
- 応用例や事例であれば `example`
- 理論的分析であれば `tip`
- 判定基準：具体例か抽象的分析か

### 6. KaTeX記法による数学記号の統一

#### 数学・論理記号の必須KaTeX化ルール

**原則：数学的・論理的文脈で使用される記号は必ずKaTeX記法で表記する**

**対象記号一覧：**

- **様相演算子**: □ → `\(\Box\)`、◇ → `\(\Diamond\)`
- **論理結合子**: → → `\(\to\)`、∧ → `\(\land\)`、∨ → `\(\lor\)`、¬ → `\(\lnot\)`、↔ → `\(\leftrightarrow\)`
- **量詞**: ∀ → `\(\forall\)`、∃ → `\(\exists\)`
- **集合記号**: ∈ → `\(\in\)`、⊆ → `\(\subseteq\)`、∅ → `\(\emptyset\)`
- **証明記号**: ⊢ → `\(\vdash\)`、⊨ → `\(\vDash\)`、⊨ → `\(\models\)`
- **変数記号**: φ → `\(\varphi\)`、ψ → `\(\psi\)`、χ → `\(\chi\)`
- **世界・エージェント記号**: w₁ → `\(w_1\)`、a₁ → `\(a_1\)`
- **ギリシャ文字**: α → `\(\alpha\)`、β → `\(\beta\)`、γ → `\(\gamma\)`
- **フレーム・モデル記号**: F = ⟨W, R⟩ → `\(F = \langle W, R \rangle\)`

**記法の一貫性：**

1. **インライン数式**: `\(記号\)` を使用（`$記号$`ではない）
2. **ディスプレイ数式**: `\[記号\]` を使用
3. **変数名**: 数学的文脈では必ずKaTeX化（p, q, r, s, w, v等）
4. **体系名**: 論理体系名は文脈により判断（S4, S5等は通常体では可）

**適用判定基準：**

- ✅ **必須**: 論理式内、数学的定義内、定理内で使用される記号
- ✅ **必須**: 文中で数学的概念として言及される記号
- ✅ **必須**: 表やボックス内の数学記号
- ❌ **不要**: 純粋に装飾的な用途の記号
- ❌ **不要**: プログラムコード内の記号

**具体例：**

```markdown
✅ 正しい例:
「\(\Box p \to p\) は反射性と対応します」
「世界 \(w_1\) から \(w_2\) への到達可能性」

❌ 間違った例:
「□p → p は反射性と対応します」
「世界 w₁ から w₂ への到達可能性」
```

**表での使用例：**

| 公理 | フレーム条件 |
|------|-------------|
| \(\Box p \to p\) | \(\forall w(wRw)\) |
| \(\Box p \to \Box\Box p\) | \(\forall w,v,u(wRv \land vRu \to wRu)\) |

### 7. MkDocs Material全機能の厳密な使い分け

#### コードブロックの厳密なルール

**⚠️ コードブロックは実際のコードのみ**

**✅ 正しい使用（実際のプログラムコード）**
```python
def check_validity(premise1, premise2, conclusion):
    """論理式の妥当性をチェックする関数"""
    return (premise1 and premise2) <= conclusion
```

**❌ 間違った使用（論理式や推論の表示）**
```
前提1: ストレスが高いならば集中力が低下する  # ← 間違い！
前提2: ストレスが高い                      # ← これは自然言語
結論: 集中力が低下する                     # ← コードではない
```

**✅ 正しい代替案（推論例の表示）**

推論例はアドモニションボックスを使用：
```markdown
!!! example "推論例：肯定的後件（Modus Ponens）"
    **前提1**：ストレスが高いならば集中力が低下する (p → r)
    **前提2**：ストレスが高い (p)
    **結論**：集中力が低下する (r)
```

または通常のインデント表示：
> 前提1：ストレスが高いならば集中力が低下する (p → r)  
> 前提2：ストレスが高い (p)  
> 結論：集中力が低下する (r)

#### その他のMkDocs Material機能の使い分け

**表（Tables）**
- ✅ データ、比較、記号一覧
- ❌ 単純なリストの代替

**タブ（Content Tabs）**
- ✅ 言語別コード例、複数の視点
- ❌ 単一内容の不必要な分割

**脚注（Footnotes）**
- ✅ 補足説明、参考文献の詳細
- ❌ 本文に含めるべき重要情報

**数式ブロック**
- ✅ 数学的定義、論理式
- ❌ 通常のテキスト装飾

**引用ブロック（>）**
- ✅ 他文献からの引用、重要な定理の引用
- ❌ 単なる強調（太字やイタリックを使用）

**リスト**
- ✅ 真に並列的な項目（最小限に）
- ❌ 文章で説明すべき内容

#### 判定フローチャート

1. **プログラムコードか？** → Yes: コードブロック / No: 次へ
2. **数学的定義か？** → Yes: `note` (定義) / No: 次へ  
3. **定理・性質か？** → Yes: `abstract` / No: 次へ
4. **具体例・応用か？** → Yes: `example` / No: 次へ
5. **重要な分析か？** → Yes: `tip` / No: 次へ
6. **警告・注意か？** → Yes: `warning` / No: 次へ
7. **補足情報か？** → Yes: `info` / No: 通常の段落

---

## 参考情報
- 完全な執筆ガイドライン: `writing-guides/epistemic-logic-v3-guidelines.md`
- 基礎編構成: `writing-guides/epistemic-logic-v3-foundations.md`
- 応用編構成: `writing-guides/epistemic-logic-v3-applications.md`