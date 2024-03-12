import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {GoogleOAuthProvider} from "@react-oauth/google"
import { Inter, Quicksand } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
 const quicksand = Quicksand({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={quicksand.className}>
    <GoogleOAuthProvider clientId="796893770453-cdctenbiseanqgj19b7i99cn2frg0pu6.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  </div>
  );
}
