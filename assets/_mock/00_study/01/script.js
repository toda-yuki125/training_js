$(function() {

  $('[name=hoge]').on('change',function() {

     var val = $('[name=hoge]').attr('checked');
    // var val = $('[name=hoge]').prop('checked')
    // var val =  parseInt($('[name=hoge]:checked').val())
      // var total = 0
      // total += val
      console.log(val)

  })

})