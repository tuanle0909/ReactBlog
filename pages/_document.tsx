import { Html, Head, Main, NextScript } from "next/document";

import React from "react";

type Props = {};

export default function Document({}: Props) {
  return (
    <Html>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          {/* <meta name="description" content="Web site created using create-react-app" /> */}
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,500;0,600;0,700;1,400&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" />
          <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
          {/* <title>React App</title> */}
        </div>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
