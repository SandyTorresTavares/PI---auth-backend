import { Request, Response } from "express";
import { register, login } from "./authService";

const registerUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({ error: "Preencha todos os campos" });
    }

    try {
        await register({ name, email, password, role });
        return res.status(201).json({message: "Usuário cadastrado com sucesso"});
    } catch (error: any){
        return res.status(400).json({message: error.message});
    }
}

export default registerUser;

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({ error: "Preencha todos os campos" });
    }

    try {
        const token = await login({ email, password });
        return res.status(200).json({ token });
    } catch (error: any){
        return res.status(400).json({message: error.message});
    }
}

export { loginUser };