$("#join-ihunt-form").validate({
    rules: {
        "name":{
            required:true
        },
        "last_name":{
            required:true
        },
        "email":{
            required:true
        },
        "country":{
            required:true
        },
        "phone":{
            required:true
        },
        "website":{
            required:true
        },
        "persona":{
            required:true
        }
    },
    messages: {

        "name":{
            required:'Este campo es obligatorio'
        },
        "last_name":{
            required:'Este campo es obligatorio'
        },
        "email":{
            required:'Este campo es obligatorio'
        },
        "country":{
            required:'Este campo es obligatorio'
        },
        "phone":{
            required:'Este campo es obligatorio'
        },
        "website":{
            required:'Este campo es obligatorio'
        },
        "persona":{
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