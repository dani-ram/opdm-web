import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

app.post("/send-mail", async (req, res) =>{
    const { name, email, message } = req.body;

    try{
        await transporter.sendMail({
            from: `"Formulario Web" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: `Nuevo mensaje de ${name}`,
            text: `De: ${name} (${email})\n\n${message}`,
        });

        await transporter.sendMail({
            from: `"OPDM Radio" <${process.env.MAIL_USER}>`,
            to: email,
            subject: "Hemos recibido tu mensaje",
            text: `Hola ${name},\n\nGracias por contactarnos. Hemos recibido tu mensaje y te responderemos cuanto antes. \n\nTu mensaje fue:\n"${mensaje}"\n\n- El equipo de OPDM Radio`,
        });

        res.status(200).json({succes: true, message: "Mensaje enviado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false, message: "Error al enviar el mensaje"});
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));