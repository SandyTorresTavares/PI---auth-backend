import { Request, Response } from "express";
import register from "../services/service";

const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({ error: "Preencha todos os campos" });
    }

    try {
        await register({ name, email, password });
        return res.status(201).json({message: "Usuário cadastrado com sucesso"});
    } catch (error: any){
        return res.status(400).json({message: error.message});
    }
}

export default registerUser;