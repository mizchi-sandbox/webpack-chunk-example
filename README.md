# Code Split Example

Routing で読み込みチャンクを切り替える例

- foo.js: shared を使う
- bar.js: shared を使う
- index.js: 条件的に foo bar を読み込みを切り替える

## 注意点

- `/* webpackChunkName: "shared" */` のマジックコメントは webpack のために必須
- ファイルの出力を同じディレクトリにして、相対パスを合わせないといけない(あるいは output.publicPath をいじる)

## LICENSE

MIT
