$(function() {
  var modalContainer = $(".modal-container");
  var modalConfirmButton = modalContainer.find("button.confirm");
  var openModalButton = $("button[type=submit]");

  openModalButton.click(function(event) {
    modal.open({
      title: 'Title',
      message: 'hi'
    });
  });

  modalConfirmButton.click(function(event){
    modal.close();
  });
});
