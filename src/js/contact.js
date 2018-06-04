$('form[name="contact-promor"]').validate({
  name: 'required',
  email: 'required',
  phone: 'required',
  messages: {
    name: "Revisa tus datos",
    email: "Revisa tus datos",
    phone: "Revisa tus datos",
  },
  submitHandler: function(form) {
    var data = $('form[name="contact-promor"]').serialize();
    console.log(data);
    $.ajax({
      url: 'http://integrations.blick.mx/promor/contact/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        alertify.success("¡Gracias por contactarnos!");
        $('form[name="contact-promor"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tus datos. Hay " + errors + " errores.");
  }
});
