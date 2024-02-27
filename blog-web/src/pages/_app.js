import "@/styles/globals.css";
import { FirstContextProvider } from "@/utils/context";

export default function App({ Component, pageProps }) {
  return (
    <FirstContextProvider>
      <Component {...pageProps} />
    </FirstContextProvider>
  );
}
