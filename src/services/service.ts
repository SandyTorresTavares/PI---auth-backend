import bcrypt from "bcryptjs";
import { findUserByEmail, createUser } from "../repositories/repository";

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export default async function register(data: RegisterData) {
    const {name, email, password} = data;

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new Error('Usuário já cadastrado');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await createUser({
        name, 
        email, 
        password: hashPassword
    });
}