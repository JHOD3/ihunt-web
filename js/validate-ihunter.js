$('input[name="phone"]').keyup(function() {
    $(this).val($(this).val().replace(/[^ +0-9]/g, ''));
})
$("#join-ihunt-form").validate({
    rules: {
        email:{
            required:true
        },
        email_confirm:{
            required:true,
            equalTo: "#email"
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
            required:true,
            equalTo: "#password"
        },
    },
    messages: {
        email:{
            required: lang_script.join_ihunt.form.email_required
        },
        email_confirm:{
            required: lang_script.join_ihunt.form.email_confirm_required,
            equalTo: lang_script.join_ihunt.form.email_confirm_equalTo
        },
        full_name:{
            required: lang_script.join_ihunt.form.full_name_required
        },
        phone:{
            required: lang_script.join_ihunt.form.phone_required
        },
        linkeding:{
            required: lang_script.join_ihunt.form.linkeding_required
        },
        country:{
            required: lang_script.join_ihunt.form.country_required
        },
        password:{
            required: lang_script.join_ihunt.form.password_required
        },
        password_confirm:{
            required: lang_script.join_ihunt.form.password_confirm_required,
            equalTo: lang_script.join_ihunt.form.password_confirm_equalTo
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