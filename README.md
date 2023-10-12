# 2023年後期「Javascript」基礎授業課題

## 授業内コード
1. 10月5日　はじめの一歩
1. 10月5日　Github リポジトリ作成
1. 10月12日　文字列の連結、変数、定数、複合代入演算子

## 10月12日
- リテラルと演算子
- 文字列の連結
- 変数と代入
- 複合代入演算子

### 文字列の計算

```js
//文字列の連結
    console.log("ABC" + "DEF");//文字列　＋　文字列
    console.log("円周率は" + 3.14 + "です。");//文字列　＋　数値
    console.log("計算結果" + 123 + 456);//文字列　＋　数値の計算
    console.log(123 + 456 + "となりました");//数値の計算　＋　文字列
    console.log("計算結果" + (123 + 456));//文字列　＋　(数値の計算)
    console.log("2" - 1);//文字列-数値
    console.log("2" * 3);//文字列-数値
    console.log("2" / 4);//文字列-数値

```

### 変数の宣言

```js
let a;//変数の宣言
    a = 10;//値の代入
    console.log(a);

    a = "Hello";//値の再代入（文字列型）
    console.log(a);

    //let a = "world" 変数の宣言と代入を同時に行っています。さらに再宣言なので、エラーとなります。
```

### 定数の宣言
```js
 //定数の宣言・代入
        const PI = 3.14;
        console.log(PI);

        //再代入
        // PI = 3.1415926535;

        //複合代入演算子

        let n = 5;
        n = n + 2;
        console.log(n);//7

        let n2 = 5;
        n2 += 2;//複合代入演算子　n2=n2+2と同じ
        console.log(n2)
```

### 複合代入演算子
```js
//複合代入演算子
        let n = 5;
        n = n + 2;
        console.log(n);//7

        let n2 = 5;
        n2 += 2;//複合代入演算子　n2=n2+2と同じ
        console.log(n2)
```

### インクリメント
```js
//インクリメント
        let n3 = 5;
        n3++;//インクリメント 1足す
        console.log(n3);//6
```

### リストを操作するDOM操作のスクリプト
```js
 //メロンを加えたい
        //ul要素を取り入れる
        const element = document.querySelector("ul");
        console.log(element);

        //selectorってCSSのセレクターなので、
        const element2 = document.querySelector("#fruitslist")
        console.log(element2);

        //classもいける？
        const element3 = document.querySelector(".listbox__list")
        console.log(element3);

        //新しい要素を作る
        const lilast = document.createElement("li");
        console.dir(lilast);//dirに変更。オブジェクトの中身が見える
        lilast.textContent = "メロン";
        console.log(lilast);
```
HTMLの要素を取得してから操作する。

## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演習</title>
</head>
<body>
</script>
</body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。