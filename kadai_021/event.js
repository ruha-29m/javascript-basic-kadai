// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const textElement = document.getElementById('text');
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',function ()  {
    console.log('ボタンがクリックされました！');
    textElement.textContent = 'ボタンをクリックしました';
});

// setTimeout関数の書き方
setTimeout(() => {
    textElement.textContent = 'ボタンをクリックしました'; 
  }, 2000);