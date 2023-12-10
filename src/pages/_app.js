import React from 'react';
import 'semantic-ui-css/semantic.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
