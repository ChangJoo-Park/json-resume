var modal = (function(){
  var body = $("body");
  var backdrop = $(".modal-backdrop");
  var modalContainer = $(".modal-container");
  var modalCloseButton = modalContainer.find("button.close");
  var open = function(data) {
      var title = data.title;
      var message = data.message;
      backdrop.show().addClass('active');
      modalContainer.addClass('active');
      modalContainer.find(".modal-title").text(data.title);
      modalContainer.find(".modal-message").text(data.message);
      body.addClass('modal-open');
  };

  var close = function() {
      modalContainer.removeClass('active');
      backdrop.removeClass('active').css('display', 'none');
      body.removeClass('modal-open');
  };

  backdrop.click(function(event) {
    close();
  });
  modalCloseButton.click(function(event){
    modal.close();
  });
  return {
    open: open,
    close: close
  };
}());
