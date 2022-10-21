import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

export class UserController {
  //criar usuario
  async create(req: Request, res: Response) {
    const { login, senha } = req.body;
    console.log(login, senha);
    if (!login || !senha) {
      return res.status(400).json({ message: "Login e senha requeridos" });
    }

    try {
      const newUser = userRepository.create({ login, senha });

      await userRepository.save(newUser);

      return res.status(200).json({ message: "Usuário criado", data: newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro interno" });
    }
  }
}
