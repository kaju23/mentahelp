import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="MentaHelp" key="title" />
        <meta
          property="og:description"
          content="Chatbot to act as mental health support assistant"
          key="description"
        />
        <meta
          property="og:image"
          content="/og.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
