<?php

class ApiController
{	
	public function index($f3)
	{
        echo 'Hello World!';
	}
    public function sendMail($f3)
    {	
		header('Content-Type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);

        if ($this->validationInfo($f3, $data)) {
            $host = $f3->get('smtp_host');
            $port = $f3->get('smtp_port');
            $secure = $f3->get('smtp_secure');
            $user = $f3->get('smtp_user');
            $pass = $f3->get('smtp_pass');
            $from = $f3->get('smtp_from');
            $to = $f3->get('smtp_to');

            $smtp = new SMTP($host, $port, $secure, $user, $pass);

            $smtp->set('Content-type', 'text/html; charset=UTF-8');
            $smtp->set('From', $from);
            $smtp->set('To', '"iHunter Web" <'.$to.'>');
            $smtp->set('Subject', 'Email recibido desde la web');
            $smtp->set('Date', date("r"));
            $message_data = $data;
            $f3->set('message', $message_data);
            $smtp->send(Template::instance()->render('email.htm'), TRUE);
            echo json_encode(array('status' => true));
        }
    }

    public function validationInfo($f3, $data)
    {
        $validator = Validator::instance()->validate($data,
            [
                'name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email',
                'country' => 'required',
                'phone' => 'required|numeric',
                'website' => 'required|url',
                'persona' => 'required',
                'codigo' => 'required',
            ],
            [
                'name.required' => 'El nombre es requerido',
                'last_name.required' => 'El apellido es requerido',
                'email.required' => 'El email es requerido',
                'email.email' => 'El email no es valido',
                'country.required' => 'El pais es requerido',
                'phone.required' => 'El telefono es requerido',
                'phone.numeric' => 'El telefono no es valido',
                'website.required' => 'El website es requerido',
                'website.url' => 'El website no es valido',
                'persona.required' => 'La persona es requerida',
                'codigo.required' => 'El codigo es requerido',
            ]
        );
        if (!$validator->passed()) {
            $f3->status(400);
            echo json_encode(['status' => 'error', 'message' => $validator->errors()]);
            exit();
        }
        if ($f3->get('SESSION.captcha_code') != $data['codigo']){
            $f3->status(400); // Bad Request - Captcha incorrecto
            echo json_encode(array('error' => 'El código de seguridad es incorrecto'));
            exit();
        }
        return true;
    }

    public function reCaptcha()
    {
        $img = new Image();
        $img->captcha('fonts/CoolFont.ttf',16,5,'SESSION.captcha_code');
        $img->render();
    }

}
