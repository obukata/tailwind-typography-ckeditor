# 📦 npm パッケージ開発・公開ガイド

このドキュメントは、本プロジェクトを npm に公開・更新・ローカル開発する際の手順をまとめたものです。

---

## 🚀 1. 初回セットアップ

```bash
# 依存関係のインストール
npm install
```

パッケージのメインエントリ（main / module / types）が正しく package.json に設定されていることを確認してください。

例：
```json
{
  "name": "your-package-name",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts"
}
```

## 🧩 2. ローカル開発で npm link を使う

### ライブラリ側（このプロジェクト）

```bash
# このプロジェクトのルートで
npm link
```

```bash
# 他のプロジェクト（テスト環境）で
npm link your-package-name
```

これで、npm に公開しなくてもローカルでリアルタイム動作確認が可能になります。
変更が反映されない場合は、ライブラリ側でビルドコマンドを再実行してください。

```bash
npm run build
```

```bash
npm unlink your-package-name
```

---

## 🔼 3. バージョンアップ手順

`package.json` の `version` を更新します。
バージョンは [Semantic Versioning (SemVer)](https://semver.org/lang/ja/) に従ってください。

| 種類   | 例     | 意味           |
| ---- | ----- | ------------ |
| パッチ  | 1.0.1 | バグ修正などの小変更   |
| マイナー | 1.1.0 | 下位互換を保った機能追加 |
| メジャー | 2.0.0 | 互換性を壊す変更     |

更新は以下のコマンドでも可能です：

```bash
npm version patch   # 例: 1.0.0 → 1.0.1
npm version minor   # 例: 1.0.0 → 1.1.0
npm version major   # 例: 1.0.0 → 2.0.0
```

このコマンドは自動的に package.json を更新し、Gitタグを作成します。

---

## 📤 4. npm への公開手順

1. npm にログイン（初回のみ）

```bash
npm login
```

2. ビルド

```bash
npm run build
```

3. 公開

```bash
npm publish --access public
```

> ⚠️ --access public はスコープ付きパッケージ（例: @org/package）を公開する際に必要です。

---

## 🔒 5. 公開後の確認

公開が成功したら以下で確認：

```bash
npm info your-package-name
```

またはブラウザで
👉 [https://www.npmjs.com/package/@obukata/tailwind-typography-ckeditor](https://www.npmjs.com/package/@obukata/tailwind-typography-ckeditor)

---

## 🧹 6. よくあるトラブル

| 症状                                               | 原因                 | 対処法                               |
| ------------------------------------------------ | ------------------ | --------------------------------- |
| `npm ERR! You do not have permission to publish` | npm の所有権が違う        | `npm owner add` コマンドで権限追加         |
| 変更しても反映されない                                      | キャッシュが残っている        | `npm cache clean --force` を実行     |
| `npm link` がうまく動かない                              | `node_modules` の競合 | `npm unlink && npm install` で再リンク |

---

## 📚 補足

* 公開前に `npm pack` コマンドを使うと、実際に公開されるファイル内容を確認できます。
* `.npmignore` または `package.json` の files フィールドで公開ファイルを制御できます。

---

## 🏁 まとめ

| タスク     | コマンド例                                     |
| ------- | ----------------------------------------- |
| ローカルリンク | `npm link` / `npm link your-package-name` |
| バージョン更新 | `npm version patch`                       |
| 公開      | `npm publish --access public`             |
| 確認      | `npm info your-package-name`              |
