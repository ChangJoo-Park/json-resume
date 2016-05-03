var modal = (function(){
  var body = $("body");
  var backdrop = $(".modal-backdrop");
  var modalContainer = $(".modal-container");
  var modalConfirmButton = modalContainer.find("button.confirm");

  return {
    open: function(data) {
      var title = data.title;
      var message = data.message;
      backdrop.show().addClass('active');
      modalContainer.addClass('active');
      modalContainer.find(".modal-title h2").text(data.title);
      modalContainer.find(".message").text(data.message);
      modalConfirmButton.focus();
      body.addClass('modal-open');
    },
    close: function() {
      modalContainer.removeClass('active');
      backdrop.removeClass('active').css('display', 'none');
      body.removeClass('modal-open');
    }
  };
}());
