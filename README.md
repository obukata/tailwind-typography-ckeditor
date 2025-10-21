# @obukata/tailwind-typography-ckeditor

TailwindCSS 4系用の Typography 拡張プラグインです。
CKEditor で出力された記事コンテンツ向けにスタイルを統一するためのカスタム調整が含まれています。

---

## 特徴

- Tailwind Typography の拡張
- CKEditor で生成された記事コンテンツに最適化
- blockquote / table / a / figure.table のスタイルを統一
- フォントサイズを `--scaling` カスタムプロパティで動的に変更可能

### 主なスタイル

| セレクタ | 説明 |
|----------|------|
| `.prose blockquote p::before/::after` | 擬似要素を削除 |
| `.prose a` | 青文字、hover時に下線なし |
| `.prose figure.table` | display: block |
| `.prose table th/td` | padding, border, th背景色など調整 |
| `.prose` | `font-size: calc(1rem * var(--scaling))` に対応 |

---

## インストール

```bash
npm install @obukata/tailwind-typography-ckeditor
```

## TailwindCSS 4系での使用例

```css
@import "tailwindcss";

@plugin "@tailwindcss/typography";
@plugin "@obukata/tailwind-typography-ckeditor";
```
CSS内で @plugin として読み込むだけで CKEditor 用スタイルが適用されます。

## 注意点

* TailwindCSS 4系 / PostCSS 経由でビルドされる環境で使用してください
* 他のプラグインやユーティリティとの競合に注意してください
* フォントサイズのスケーリングには --scaling カスタムプロパティを記事コンテンツに設定してください

## 例

```html
<div class="prose" style="--scaling:1.2;">
  <h1>記事タイトル</h1>
  <p>本文テキスト...</p>
  <blockquote>
    <p>引用文</p>
  </blockquote>
  <table>
    <thead>
      <tr><th>見出し1</th><th>見出し2</th></tr>
    </thead>
    <tbody>
      <tr><td>データ1</td><td>データ2</td></tr>
    </tbody>
  </table>
  <figure class="table">
    <img src="example.png" alt="図" />
  </figure>
</div>
```