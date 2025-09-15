# Lottieお試し

## 導入
Reactの場合
```
npm i @lottiefiles/dotlottie-react
```

```tsx
<DotLottieReact
    src="./firework.lottie"
    loop
    autoplay
/>
```

## お試しメモ
### アニメーションの作成 Figma
- 1フレーム目にない要素があるとダメそう。
- 丸角を付けるとはちょっと斜めになる。気がする。

### アニメーションの表示 React
- 大きさはCSSで変える。
  - TailwindCSS使える。