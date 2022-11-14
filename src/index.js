import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// スプレット構文

const arr1 = [10, 20];
const arr2 = [30, 40];

// 配列の結合（値渡しで対応できる）
const arr3 = [...arr1, ...arr2];

console.log(arr3);
