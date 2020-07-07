import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
      return (
        <Html lang="es">
          <Head></Head>
          <body>
            <Main />
            <NextScript />
            <noscript>
              You need to enable JavaScript to run this app.
            </noscript>
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument