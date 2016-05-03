var modal = (function(){
  var body = $("body");
  var backdrop = $(".modal-backdrop");
  var modalContainer = $(".modal-container");
  var modalCloseButton = modalContainer.find("button.close");

  return {
    open: function(data) {
      var title = data.title;
      var message = data.message;
      backdrop.show().addClass('active');
      modalContainer.addClass('active');
      modalContainer.find(".modal-title").text(data.title);
      modalContainer.find(".modal-message").text(data.message);
      modalCloseButton.focus();
      body.addClass('modal-open');
    },
    close: function() {
      modalContainer.removeClass('active');
      backdrop.removeClass('active').css('display', 'none');
      body.removeClass('modal-open');
    }
  };
}());
