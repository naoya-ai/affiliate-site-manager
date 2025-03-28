# Affiliate Site Manager

このプロジェクトは、アフィリエイトサイトを作成するためのものです。以下にプロジェクトの概要とセットアップ手順を示します。

## 概要

このアフィリエイトサイトは、アフィリエイトリンクを管理し、ユーザーに提供するための機能を持っています。主な機能には、アフィリエイトの追加、取得、表示が含まれます。

## セットアップ手順

1. **リポジトリのクローン**
   ```
   git clone <repository-url>
   cd affiliate-site-manager
   ```

2. **依存関係のインストール**
   ```
   npm install
   ```

3. **TypeScriptのコンパイル**
   ```
   npm run build
   ```

4. **アプリケーションの起動**
   ```
   npm start
   ```

## フォルダ構成

- `src/models`: アフィリエイトのデータモデルを定義します。
- `src/controllers`: アフィリエイトサイトのビジネスロジックを処理します。
- `src/routes`: ルーティングを設定し、リクエストを処理します。
- `src/views`: ユーザーインターフェースのHTMLを含みます。
- `public`: CSS、JavaScript、静的アセットを格納します。

## 使用技術

- TypeScript
- Express
- HTML/CSS/JavaScript

## ライセンス

このプロジェクトはMITライセンスの下で提供されています。