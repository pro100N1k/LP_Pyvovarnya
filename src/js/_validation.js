$("form").each(function() { //Change
    var th = $(this);
    th.validate({
        rules: {
            phone: {
                required: true
            }
        },
        messages: {},
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            var thisForm = $(form);
            console.log(thisForm.serialize());
            $.ajax({
                type: "POST",
                url: thisForm.attr('action'),
                data: th.serialize()
            }).done(function() {
                // Done Functions
                $.fancybox.close();
                $.fancybox.open({
                    src: '#modal-thanks',
                });

                setTimeout(function() {
                    //submitForm = false
                    $.fancybox.close();
                }, 3000);

                th.trigger("reset");
            });
            return false;
        },

        success: function() {},
        highlight: function(element, errorClass) {
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('error');
        }
    })
});