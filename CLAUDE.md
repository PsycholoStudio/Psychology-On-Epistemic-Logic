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

## 参考情報
- 執筆ガイドライン: `writing-guides/epistemic-logic-v3-guidelines.md`
- 基礎編構成: `writing-guides/epistemic-logic-v3-foundations.md`
- 応用編構成: `writing-guides/epistemic-logic-v3-applications.md`