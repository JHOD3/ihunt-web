$("#join-ihunt-form").validate({
    rules: {
        email:{
            required:true
        },
        email_confirm:{
            required:true
        },
        full_name:{
            required:true
        },
        phone:{
            required:true
        },
        linkeding:{
            required:true
        },
        country:{
            required:true
        },
        password:{
            required:true
        },
        password_confirm:{
            required:true
        },
    },
    messages: {
        email:{
            required:'Este campo es obligatorio'
        },
        email_confirm:{
            required:'Este campo es obligatorio'
        },
        full_name:{
            required:'Este campo es obligatorio'
        },
        phone:{
            required:'Este campo es obligatorio'
        },
        linkeding:{
            required:'Este campo es obligatorio'
        },
        country:{
            required:'Este campo es obligatorio'
        },
        password:{
            required:'Este campo es obligatorio'
        },
        password_confirm:{
            required:'Este campo es obligatorio'
        }
    },
    errorElement: "div",
    errorPlacement: function(error, element) {
        error.addClass('invalid-feedback text-end me-md-4');
        //element.parent().find('div').after(error);
        $(element).parent().find('div').append(error);
        element.addClass('is-invalid');
    },
    highlight: function (element, errorClass, validClass) {
        if ($(element).attr('type') != 'checkbox') {
            $(element).addClass('is-invalid').removeClass('is-valid');
        }else {
            $(element).addClass('is-invalid')
        }        
        $('.send').attr("disabled", true);
    },
    unhighlight: function (element, errorClass, validClass) {
        if ($(element).attr('type') != 'checkbox') {
            $(element).removeClass('is-invalid').addClass('is-valid');
        }else{
            $(element).removeClass('is-invalid')
        }
        $('.send').removeAttr("disabled");
    },

});