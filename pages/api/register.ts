import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  message: string
}
export default async function register(req: NextApiRequest, res: NextApiResponse<Data>) {
  const method = req.method;
  const input = req.body;
  if (method === "POST") {
    try {
      const { email, username, password, nickname } = input;
      const response = await axios.post("http://projectblog.azdigi.shop/wp-json/wp/v2/users/register", { email, username, password, nickname });
      res.statusCode = 302;
      res.setHeader("Location", "/login");
      res.json(response.data);
    }
    catch (e: any) {
      res.statusCode = 302;
      const error = e?.response.data.code;
      res.setHeader("Location", `/register?error=${error}`);
      res.json({ message: e?.response.data });
    }
  }
  else {
    res.status(500).json({ message: 'Method not allowed' });
  }
}
