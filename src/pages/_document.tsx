import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Somos uma empresa de serviços de bartender"
        />
        <title>Santo Gelado Drinks</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
