import '../styles/globals.css'
import Navbar from "../src/components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
        />

    <Navbar />
    <Component {...pageProps} />
    </>)
}

export default MyApp
