import { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";

export class GptController {
  async send(req: Request, res: Response) {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "text is needed" });
    }

    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 400,
      });

      if (completion.data.choices[0].text === null) {
        return res.status(400).json({ message: "text from gpt is not setted" });
      }

      console.log(completion.data.choices[0].text);
      return res.status(200).json({ data: completion.data.choices[0].text });
    } catch (e) {
      return res.status(400).json({ message: "not work" });
    }
  }
}
