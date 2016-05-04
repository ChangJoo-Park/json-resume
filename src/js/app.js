$(function() {
  var openModalButton = $("button.openModal");
  openModalButton.click(function(event) {
    var self = $(this);
    modal.open({
      title: self.data('title'),
      message: self.data('message')
    });
  });
});
