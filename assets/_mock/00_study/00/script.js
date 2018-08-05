$(function(){
  data()
})





function iteration(el) {

   var like =  [

    "五反田", "高田馬場 ", "大塚",
    "新宿","池袋","渋谷","代々木",
    "駒込","新大久保","田町","東京","有楽町",
    "上野","鶯谷","日暮里","西日暮里","秋葉原",
    "恵比寿","田端","巣鴨","品川","新橋","神田","浜松町"

  ]

  for (var i=0; i<like.length; i++) {

    var dom = "";
        dom +=  '<li>'  + like[i] + '</li> ';

     $(el).append(dom)

  }


  //上記の違う書き方
  // $.each(like, function(i, val) { //オブジェクトや配列の中身を順番に展開する
  //     var dom = "";
  //         dom +=  '<li>'  + val + '</li> ';
  //     $move.append(dom)
  // })
}


function data() {

  iteration($('.js-move'))

  $('.js-click').on('click',function(){
    $('.js-move').children().remove()
    iteration($('.js-resluts'))
  })


}




function obj(){
  //配列
  var a = [
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

  var b = [
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

  // c.push('花子', 28)  //連想配列の追加はできない
  // console.log(c)
  a.push(b) //可能
  // a[0].push() 不可能 配列の中身が連想配列になってるから
  console.log(a)


  //objの結合 おなじものは書き換えられる
  var obj1 = {
    toda : "yuki",
    kodama : "tazuko"
  }
  var obj2 = {
    yamakawa : "keika",
    hujita : "hiro"
  }

  $.extend(obj1,obj2)

  console.log(obj1)




//join( )配列の中身に文字列をいれてセパレーターします




  // $.each(a, function(index, val) { //オブジェクトや配列の中身を順番に展開する
  //     console.log(val)
  // })





  // for ( var i =0;  i<a.length; i++ ){
  //   b[i]  = a[i].push
  //  }
  //  console.log(b)
}
