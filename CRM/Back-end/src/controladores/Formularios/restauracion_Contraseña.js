    const express = require('express');
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');

    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));

    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vyhoncrm@gmail.com',
        pass: 'tu_contraseña'
    }
    });
    // const {resultado} = recuperar()
    const {evaluar} = recuperar()
    console.log(evaluar, '0000000')
    
    const users = [
        {email: evaluar, }

    // Aquí deberías tener tu base de datos de usuarios
    // Cada usuario debe tener un campo 'email' y 'password' (preferiblemente encriptado)
    ];

    const passwordResetTokens = new Map(); // Almacenar tokens de restablecimiento de contraseña

    
    // Ruta para solicitar la recuperación de contraseña
    app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const user = users.find((user) => user.email === email);

    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const token = generateToken();
    passwordResetTokens.set(token, user.email);

    const resetLink = `http://tuapp.com/reset-password?token=${token}`;

    const mailOptions = {
        from: 'vyhoncrm@gmail.com',
        to: user.email,
        subject: 'Recuperación de contraseña',
        text: `Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al enviar el correo electrónico' });
        }
        console.log('Correo electrónico enviado: ' + info.response);
        return res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    });
    });

    // Ruta para restablecer la contraseña
    app.post('/reset-password', (req, res) => {
    const { token, newPassword } = req.body;
    const userEmail = passwordResetTokens.get(token);

    if (!userEmail) {
        return res.status(400).json({ message: 'Token inválido' });
    }

    const user = users.find((user) => user.email === userEmail);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Actualiza la contraseña del usuario en tu base de datos
    user.password = newPassword;

    // Elimina el token de recuperación de contraseña
    passwordResetTokens.delete(token);

    return res.status(200).json({ message: 'Contraseña restablecida con éxito' });
    });

    // Inicia el servidor
    const port = 3000;
    app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    });
