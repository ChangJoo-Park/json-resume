$(function() {
  var modalContainer = $(".modal-container");
  var modalConfirmButton = modalContainer.find("button.confirm");
  var openModalButton = $("button.openModal");

  openModalButton.click(function(event) {
    var self = $(this);
    modal.open({
      title: self.data('title'),
      message: self.data('message')
    });
  });

  modalConfirmButton.click(function(event){
    modal.close();
  });
});
