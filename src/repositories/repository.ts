import connection from "../database/connection";
import { ResultSetHeader } from "mysql2";

export async function findUserByEmail(email: string){
    const[row]: any = await connection.query(
        'SELECT * FROM user WHERE email = ?', [email]
    );
    return row.length ? row [0] : null;
}

export async function createUser(user: {name: string, email: string, password: string}){

    const {name, email, password} = user;
    const [result] = await connection.query<ResultSetHeader>(
        'INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [name, email, password]
    );

    return;
};