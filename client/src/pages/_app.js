import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ padding: "16px" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
