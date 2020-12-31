const express = require('express');
const router = express.Router();

router.get('/access/signin', (req, res) => {
    res.render('access/signin', {title: ' - Iniciar sesión'});
});

router.get('/access/signup', (req, res) => {
    res.render('access/signup', {title: 'Crear Above ID'});
});

router.post('/access/signup', (req, res) => {
    const { name, lastname, birthday, gender, job, email, email_second, phone_region, phone, phonestatic, country, state, city, domicile, zipcode, password, confirm_password } = req.body;
    const labelError = [];
    const errorsName = [];
    const errorsLastname = [];
    const errorsBirthday = [];
    const errorsJob = [];
    const errorsEmail = [];
    const errorsEmailsecond = [];
    const errorsPhone = [];
    const errorsPhonestatic = [];
    const errorsCountry = [];
    const errorsCity = [];
    const errorsDomicile = [];
    const errorsZipcode = [];
    const errorsPassword = [];
    console.log(req.body)
    if(name.length <= 0) {
        errorsName.push({text: 'Inserta tu nombre(s)' });
    }
    if(lastname.length <= 0) {
        errorsLastname.push({text: 'Inserta tus apellidos' });
    }
    if(password != confirm_password) {
        errorsPassword.push({text: 'La contraseña no coincide.'});
    }
    if(password.length < 7) {
        errorsPassword.push({text: 'La contraseña debe de tener minimo 7 caracteres.'})
    }
    if(errorsName.length > 0){
        res.render('access/signup', {errorsName, name});
    } else {
        res.send('ok')
    }
});

module.exports = router;