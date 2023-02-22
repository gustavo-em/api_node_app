import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
export class UserController {
  //criar usuario
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !name || !password) {
      return res
        .status(400)
        .json({ message: "email, password and name are required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = userRepository.create({
        name,
        email,
        password: hashPassword,
      });

      await userRepository.save(newUser);

      return res.status(200).json({ message: "Usuário criado", data: newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro interno" });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });

    if (!user) {
      return res.status(400).json({ message: "email or password invalid" });
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      return res.status(400).json({ message: "email or password invalid" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "8h",
    });

    const { password: _, ...userLogin } = user;

    return res.json({
      user: userLogin,
      token: token,
    });
  }
}
