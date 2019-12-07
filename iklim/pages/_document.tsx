import Document, { Html, Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = flush();

    return { ...initialProps, styles };
  }

  render() {
    return (
      <Html lang='id'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Alata&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
