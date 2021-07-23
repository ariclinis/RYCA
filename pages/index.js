import {useState} from "react";
import Centralimage from "../src/components/centralImage/Centralimage";
import Itensessenciais from "../src/components/itensEssenciais/Itensessenciais";
import styled from "styled-components";
const Essenciais= styled.div`
  padding-top: 20px;
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
    
     
    
    </>
    )
}



export default Home