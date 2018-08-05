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


 $('[name=hoge]').on('change',function() {

    var val =  parseInt($('[name=hoge]:checked').val())
      var total = 0
      total += val
      console.log(val)

  })

