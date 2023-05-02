// 1章

// alert('Hello'+'World');

// let hello = 'Hello, World';
// alert(hello);

// 2章

// 四則計算
// let int1 = 1;
// let int2 = -10;
// let float1 = 3.14;
// let str1 = 'JavaScriptを覚えよう';

// alert(int2);
// alert(float1);
// alert(str1);

// 文字列結合
// alert('Hello'+'World');

// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);

// 条件分岐
// let orange = 100;
// let apple = 120;

// if(orange<apple){
//   alert('みかんの方が安い');
// }else if(orange==apple){
//   alert('値段は同じ');
// }else{
//   alert('みかんの方が高い');
// }

// 繰り返し処理
// while文
// let max = 100;
// let num = 1;
// let count = 0;

// while(num<max){
//   num = num*2;
//   count = count+1;
// }

// alert('2をかけ続けて'+ max +'を超えるのに必要だった回数は'+ count + '回です');

// if文
// let i;
// let num = 0;

// for(i=1;i<11;i++){
//   num=num + i;
// }

// alert('1から10まで足した結果は'+ num + 'です');

// 3章
// 引数と戻り値

// let alertString;
// alertString=addString("WebCamp");
// alert(alertString);

// function addString(strA){
//   let addStr="Hello"+strA;
//   return addStr;
// }

// 複数の関数で表示

// 入力ダイアログで値を入力
// let promptStr = prompt("好きな文字を入力してください");
// alert(promptStr);

// 複数の関数を定義

// 入力した値が表示されるだけ
// let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んで下さい');
// alert('あなたの選んだ手は'+ user_hand +'です');

// ランダムにする
let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んで下さい');  //ユーザーのジャンケンを入力

//グー、チョキ、パー以外ならメッセージ
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

let js_hand = getJShand();  //ジャンケンの手をランダムに作成する関数を呼び出す

let judge = winLose(user_hand,js_hand);  //ジャンケンを比べる関数を呼び出す

//キャンセルなら「またチャレンジしてね」
if(user_hand != null){
alert('あなたの選んだ手は'+ user_hand +'です。\nJavaScriptの選んだ手は'+ js_hand +'です。\n結果は'+ judge +'です。');
}else{
alert("またチャレンジしてね")
}

function getJShand(){  //ランダムジャンケンの関数
  let js_hand_num = Math.floor(Math.random()*3);  //乱数を生成する関数（今回は0〜2の整数値）
  let hand_name;

  if(js_hand_num == 0){
    hand_name ="グー";
  }else if(js_hand_num == 1){
    hand_name ="チョキ";
  }else if(js_hand_num == 2){
    hand_name ="パー";
  }

  return hand_name;  //文字列を返す戻り値
}

function winLose(user,js){  //ジャンケンを比べる関数
  let winLoseStr;

  if(user =="グー"){
    if(js =="グー"){
      winLoseStr ="あいこ";
    }else if(js =="チョキ"){
      winLoseStr ="勝ち";
    }else if(js =="パー"){
      winLoseStr ="負け";
    }
  }else if(user =="チョキ"){
    if(js =="グー"){
      winLoseStr ="負け";
    }else if(js =="チョキ"){
      winLoseStr ="あいこ";
    }else if(js =="パー"){
      winLoseStr ="勝ち";
    }
  }else if(user =="パー"){
    if(js =="グー"){
      winLoseStr ="勝ち";
    }else if(js =="チョキ"){
      winLoseStr ="負け";
    }else if(js =="パー"){
      winLoseStr ="あいこ";
    }
  }

  return winLoseStr;
}