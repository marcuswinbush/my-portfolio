import nodemailer from  "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(

    req: NextApiRequest,
    res: NextApiResponse,
) {
    
    if (req.method === "POST") {
       const { name, email, message } = req.body;
       
       const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
       });

       try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact Form: ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`
        });
        
        res.status(200).json({ success: true });
       
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to send email "});
        }
    }   else {
        res.status(405).json({ error: "Method not allowed" });
    }
}