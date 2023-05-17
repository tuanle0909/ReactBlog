import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import userService from '../../service/user';
import axios from 'axios';

type Data = {
  message: string
}
export default async function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  const method = req.method;
  const input = req.body;
  if (method === "POST") {
    try {
      const { username, password } = input;
      const response = await axios.post("http://projectblog.azdigi.shop/wp-json/jwt-auth/v1/token", { username, password });
      const expires = new Date((new Date().getTime() + 3600 * 1000));
      res.statusCode = 302;
      res.setHeader("Set-Cookie", `token=${response.data?.token}; expires=${expires.toUTCString()}; Path=/`);
      res.setHeader("Location", "/");
      res.json(response.data);
    }
    catch (e: any) {
      res.statusCode = 302;
      const error = e?.response?.data.code;
      res.setHeader("Location", `/login?error=${error}`);
      res.json({ message: e?.response?.data });
    }
  }
  else {
    res.status(500).json({ message: 'Method not allowed' });
  }
}
