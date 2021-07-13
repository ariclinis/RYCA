import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footerfull = styled.div`
    background-color:#634938;
    margin:0;
    height:180px;
    width:100%;
    padding-left:50px;
    border:0;
    color: white;
`
const P = styled.p`
    margin-top:20px;
    font-weight: bold;
`
const Input = styled.input`

`
const Icons = styled.div``
function Footer(params) {
    return(
        <Footerfull className="row">
                <div class="col-3">
                    <P>RYCA SHOP</P>
                    <div class="row">
                    <div class="col-12">© 2021 Todos os Direitos reservados</div>
                    </div>
                </div>
                <div class="col-3">
                    <P>Links Importantes</P>
                    <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 bd-highlight">Guia de Tamanho</div>
                        <div class="p-2 bd-highlight">Fale Conosco</div>
                    </div>
                </div>
                <div class="col-3">
                    <P>Redes Sociais</P>
                    <div class="row">
                    <div class="col-1"></div>
                        <div class="col-1">
                        <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div class="col-1">
                        <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <P>Receba Avisos</P>
                    <div class="row">
                    <Input type="email" className="form-control col-9" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <button type="submit" class="btn btn-primary "><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </div>
                <div class="col-3">

                </div>
        </Footerfull>
    )
}

export default Footer