import '../styles/globals.css'
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/footer";
import styled from "styled-components";

const Div = styled.div`
width: 100%;
`
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
    
      <Footer />
    
    </>)
}

export default MyApp
