import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "6ff3a9c1af3995",
          pass: "f455f75e906222"
        }
      }); 

    // Información del email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Confirma Tu Cuenta",
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta en UpTask</P>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</P>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar Cuenta</a>
            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
}