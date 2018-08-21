$(function() {
  // kenji01()
  kenji02()
  // kenji03()
  // kenji04()
  // kenji05()
  // kenji08()
  // kenji09()

  date()

  // kenji11()



})

function kenji01(){

  var obj1 =  {
    "a" : "aaaa",
    "b" : "bbbb",
    "c" : "cccc"
  }

  var obj2 =  {
    "d" : "dddd",
    "e" : "eeee",
    "f" : "ffff"
  }

  //新しく{}にマージする
  var obj3 = $.extend( {} , obj1, obj2)
  console.log(obj3)

  //obj2からfだけ引き抜いて{}にマージする

  //配列
  var obj4 = [
    {
      a: 'a',
      b: 'b'
    },
    {
      c: 'c',
      d: 'd',
      e: 'e'
    }
  ]

  var obj5 = [
    {
      f: 'f',
      g: 'g'
    },
    {
      h: 'h',
      i: 'i',
      j: 'j'
    }
  ]

  // obj4[0].push(obj5[0])

  // $.each(obj4, function(i,val){

  // })
  // console.log(obj4)
}

function kenji02() {
  //dd,ee,ffを抜き出す
  var arry = ['aa','bb','cc','dd','ee','ff','gg'];
  //第一引数以上、第二引数未満
  var arry1 = arry.slice(3, 6);
  console.log(arry1)


  //配列の展開その１
  for (var i=0;  i<arry.length; i++  ) {
    console.log(arry[i])
  }

  //配列の展開その２
  $.each(arry , function(i,val) {
    console.log( val + "は" + i + "番目")
  })
}

function kenji03() {
  var arry = ['a' , 'b']
  for(var i=0; i<arry.length; i++ ){
    console.log(arry[i])
  }
}

function kenji04() {
  var arry = ['a', 'b']
  $.each(arry,function(index,value){
    console.log(value+index)
  })
}

function kenji05() {
  var arry = [1,2]
  console.log(Array.isArray(arry))

  //参考 IE8でも使えるように
  //typeof arry -> objを評価
  //console.log(arry instanceof Array) -> IE8用
}

function kenji08() {
  var obj = {
   key: 'aa',
   key2: 'bb'
  }

  $.each(obj, function(index,value){
    console.log(index,value)
  })
}

function kenji09() {
  var array = ['a', 'b', 'c']
  var str = array.join()
  console.log(str)
}

//今日の日付
function date() {

  var todaysData = new Date();
  todaysData.setDate(todaysData.getDate() );
    //なくてもよし var todayDate~　と同じことをしている

  console.log(todaysData)
  var todayYear = todaysData.getFullYear(); // 年
  var todayMonth =  todaysData.getMonth() + 1; // 月
  var todayDate =  todaysData.getDate(); // 日にち
  var yyyymmdd = String(todayYear) + String(todayMonth) + String(todayDate);
  // jkg_holiday_masterのデータを変数に代入

  console.log(yyyymmdd)
}

function kenji11(){
  //objソート
  var arry =[
    {id:1,name:'morita'},
    {id:2,name:'kenji'},
    {id:4,name:'uro'},
    {id:3,name:'ken'}
  ]

  arry.sort(function(a,b){
    //第一引数が性になるように書く
    if (a.id > b.id) { return 1}
      else { return -1}
  })
  console.log(arry)


  var num = [ 1,2,3,5,6,30,75,300,200 ]
  //数値のソート
  num.sort(function(a,b){
    return a - b
  })
  console.log(num)

  //現状の配列を維持してソートする(これは配列が文字列の時だけ意味する)
  var numString = [ "1","2","30","300","200" ]
  var newNum = numString.slice().sort(function(a,b){return a - b})
  console.log(newNum)
  console.log(numString)
}


















