import {useState} from "react";
import Contador from "../src/Contador";
import Navbar from "../src/components/navbar/Navbar";
import Centralimage from "../src/components/centralImage/Centralimage";
import Itensessenciais from "../src/components/itensEssenciais/Itensessenciais";
import styled from "styled-components";

const Essenciais= styled.div`
  padding-top: 20px;
`
function Home(){
  return (
    <div class="container-fluid">
          <div class="row">
            <Navbar />
          </div>
          <div >
              <Centralimage />
          </div>
        
          <Essenciais className="row d-flex justify-content-center">
              <Itensessenciais />
          </Essenciais>
        <div class="footer">
            <h2>Hello</h2>
            
        </div>
    </div> 
    )
}



export default Home