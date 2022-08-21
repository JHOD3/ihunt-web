let baseUrl = 'http://localhost:8000/ihut-landing-page';

let lang_script;

if(localStorage.getItem("idioma") == 'es'){
    lang_script = {
        'ihunter': {
            'modal': {
                'title': '¡Mensaje recibido!',
                'copy': 'Gracias por contactarnos, en breve nos pondremos en contacto.',
            },
            'form': {
                'name_required': 'Este campo es obligatorio',
                'last_name_required': 'Este campo es obligatorio',
                'email_required': 'Este campo es obligatorio',
                'email_valid': 'Este campo debe ser un correo válido',
                'country_required': 'Este campo es obligatorio',
                'phone_required': 'Este campo es obligatorio',
                'phone_valid': 'Este campo debe contener solo números',
                'website_required': 'Este campo es obligatorio',
                'website_valid': 'Por favor ingrese una url válida',
                'persona_required': 'Este campo es obligatorio',
                'codigo_required': 'Este campo es obligatorio'
            }
        },
        'join_ihunt':{
            'form':{
                'email_required':'Esta campo es obligatorio',
                'email_confirm_required':'Esta campo es obligatorio',
                'email_confirm_equalTo':'Los campos no concuerdan',
                'full_name_required':'Esta campo es obligatorio',
                'phone_required':'Esta campo es obligatorio',
                'linkeding_required':'Esta campo es obligatorio',
                'country_required':'Esta campo es obligatorio',
                'password_required':'Esta campo es obligatorio',
                'password_confirm_required':'Esta campo es obligatorio',
                'password_confirm_equalTo':'Los campos no concuerdan'
            }
        }
    };
}else{
    lang_script = {
        'ihunter': {
            'modal': {
                'title': 'Message received!',
                'copy': 'Thank you for contacting us, we will contact you shortly.',
            },
            'form': {
                'name_required': 'This field is required',
                'last_name_required': 'This field is required',
                'email_required': 'This field is required',
                'email_valid': 'This field must be a valid email',
                'country_required': 'This field is required',
                'phone_required': 'This field is required',
                'phone_valid': 'This field must contain only numbers',
                'website_required': 'This field is required',
                'website_valid': 'Please enter a valid url',
                'persona_required': 'This field is required',
                'codigo_required': 'This field is required'
            }
        },
        'join_ihunt':{
            'form':{
                'email_required':'This field is required',
                'email_confirm_required':'This field is required',
                'email_confirm_equalTo':'fields do not match',
                'full_name_required':'This field is required',
                'phone_required':'This field is required',
                'linkeding_required':'This field is required',
                'country_required':'This field is required',
                'password_required':'This field is required',
                'password_confirm_required':'This field is required',
                'password_confirm_equalTo':'fields do not match'
            }
        }
    };
}