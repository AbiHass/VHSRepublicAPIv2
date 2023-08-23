import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "vhsrepublic@gmail.com",
        pass: "rsnmhjngelflovtp"
    },
    from: "vhsrepublic@gmail.com"
})



export const sendEmail =async (to:string, code: string):Promise<void> => {
    try{
        const mailOptions={
            from: '"VHSRepublic" vhsrepublic@gmail.com',
            to,
            subject: "Código de verificación para tu cuenta",
            text: `
                Llegó tu código para VHSRepublic.
                El código para verificarte es : ${code}
            `
        }
        
        await transporter.sendMail(mailOptions)
        console.log("Correo electrónico enviado")
    }catch(error){
        console.error("Error al enviar el correo electrónico", error)
    }
}