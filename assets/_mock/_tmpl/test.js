var PageView = function() {
  var constructor = function() {
    return this;
  };
  var proto = constructor.prototype;
  proto.init = function() {
    this.setEl();
    this.setEvent();
    return this;
  }
  proto.setEl = function() {
    this.$el = $('.js-header');
    return this;
  };
  proto.setEvent = function() {
    var that = this;
    this.$el.on('click', function(event) {
      that.onClickHeader(event, this);
    });
    return this;
  };
  proto.onClickHeader = function(event, el) {
    console.log(this, el);
  };
  return constructor;
}();
/**
コメントアウト
コメントアウト
(複数行の場合のコメントアウトは/**で囲む)
*/
$(function() {
  var view = new PageView().init();
});
