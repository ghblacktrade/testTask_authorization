const nodemailer = require('nodemailer')

class MailService {

    constructor() {
// here need add gmail props
        this.transporter = nodemailer.createTransport({

            host: ,
            port: ,
            secure: false,
            auth: {
                user: ,
                pass: ,
        }
        })
    }

    async activationMail(emailTo, link) {

        await this.transporter.sendMail({

            from: ,
            to,
            subject: 'activation account',
            text: '',
            html:
                `
                <div>
                    <p>For activation click this link</p>
                    <a href="${link}">${link}a>
                </div>
            `
        })
    }
}

module.exports = new MailService()