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
let i;
let num = 0;

for(i=1;i<11;i++){
  num=num + i;
}

alert('1から10まで足した結果は'+ num + 'です');