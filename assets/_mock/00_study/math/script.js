$(function() {
  math()
})

var math = function() {

  $('[name=hoge]').on('change',function() {
    var ary = [4800]

    $.each( $('[name=hoge]:checked'), function(){
      var val = parseInt($(this).val());
      ary.push(val)
    })
    console.log(ary)

    var total = ary.reduce(function(i,j){
      return i + j
    })
    console.log(total)
  })

}
