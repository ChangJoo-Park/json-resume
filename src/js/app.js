$(function() {
  var modalContainer = $(".modal-container");
  var modalCloseButton = modalContainer.find("button.close");
  var openModalButton = $("button.openModal");

  openModalButton.click(function(event) {
    var self = $(this);
    modal.open({
      title: self.data('title'),
      message: self.data('message')
    });
  });

  modalCloseButton.click(function(event){
    modal.close();
  });
});
