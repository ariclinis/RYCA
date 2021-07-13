import {useState} from "react";
import Centralimage from "../src/components/centralImage/Centralimage";
import Itensessenciais from "../src/components/itensEssenciais/Itensessenciais";
import styled from "styled-components";
import Footer from "../src/components/footer/footer";
const Essenciais= styled.div`
  padding-top: 20px;
`
const Div = styled.div`
width: 100%;
background-color:#634938;

`
function Home(){
  return (
    <>
    <div class="container-fluid">
          <div >
              <Centralimage />
          </div>
        
          <Essenciais className="row d-flex justify-content-center">
              <Itensessenciais />
          </Essenciais>

          
    </div>
    <Div>
      <Footer />
    </Div>
     
    
    </>
    )
}



export default Home