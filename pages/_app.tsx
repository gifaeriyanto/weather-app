import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import './global.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Iklim | by Gifa Eriyanto</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
