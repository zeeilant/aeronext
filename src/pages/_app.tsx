import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/homepage.scss";
import "../styles/aboutuspage.scss";
import "../styles/coursepage.scss";
import "../styles/carrer.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
