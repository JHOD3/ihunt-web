$.validator.addMethod("validateUrl", function(value, element) {
    return this.optional(element) || /^(http|https):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(value);
})
$.validator.addMethod("validatePhone", function(value, element) {
    return this.optional(element) || /^[0-9\-\+\(\)\ ]+$/i.test(value);
});
$('input[name="phone"]').keyup(function() {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
})
$('input[data-only="text"]').keyup(function() {
    $(this).val($(this).val().replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, ''));
})
$("#get-demo-form").validate({
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
            required:true,
            validatePhone:true
        },
        "website":{
            required:true,
            validateUrl:true
        },
        "persona":{
            required:true
        },
        "codigo":{
            required:true
        }
    },
    messages: {

        "name":{
            required: lang_script.ihunter.form.name_required
        },
        "last_name":{
            required: lang_script.ihunter.form.last_name_required
        },
        "email":{
            required: lang_script.ihunter.form.email_required,
        },
        "country":{
            required: lang_script.ihunter.form.country_required
        },
        "phone":{
            required: lang_script.ihunter.form.phone_required,
            validatePhone: lang_script.ihunter.form.phone_valid
        },
        "website":{
            required: lang_script.ihunter.form.website_required,
            validateUrl: lang_script.ihunter.form.website_valid
        },
        "persona":{
            required: lang_script.ihunter.form.persona_required
        },
        "codigo":{
            required: lang_script.ihunter.form.codigo_required,
        }
    },
    errorElement: "div",
    errorPlacement: function(error, element) {
        error.addClass('invalid-feedback text-start ms-md-4');
        $(element).parent().append(error);
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
    submitHandler: function(form) {
        fetch(baseUrl+'/api/sendmail', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: $('input[name="name"]').val(),
                last_name: $('input[name="last_name"]').val(),
                email: $('input[name="email"]').val(),
                country: $('input[name="country"]').val(),
                phone: $('input[name="phone"]').val(),
                website: $('input[name="website"]').val(),
                persona: $('input[name="persona"]').val(),
                codigo: $('input[name="codigo"]').val(),
            })
        }).then(result => result.json())
        .then(data => {
            reloadCode();
            if (data.status == true){
                form.reset();
                Swal.fire({
                    title: '<strong>'+lang_script.ihunter.modal.title+'</strong>',
                    icon: 'success',
                    html:lang_script.ihunter.modal.copy,
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    showConfirmButton: false,
                    showCancelButton: false,
                    showCloseButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    backdrop: '#000000ba'
                })
            }
        })
    }
});

$(document).ready(function() {
    reloadCode();
});
$('#reload-code').click(function(e) {
    e.preventDefault();
    reloadCode();
})

function reloadCode() {
    let iframe = '<iframe src="'+baseUrl+'/api/re-captcha" height="35" width="135"></iframe>';
    $('#recaptcha').html(iframe);
}