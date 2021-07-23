import Item from "../item/Item";
import imgErica from '../../../public/erica3.jpg'
import imgErica2 from '../../../public/erica4.png'
import imgErica3 from '../../../public/erica5.png'
import styled from "styled-components"

const titulo = styled.div`
`
const Footerimage = styled.div`

color:white;

`
function Itensessenciais() {
    return(
        
        <>
        <div class="d-flex flex-column bd-highlight mb-3">
            <div class="p-2 bd-highlight">
                <div class="d-flex justify-content-center">
                    <div class="">
                        <figure class="text-center">
                                <blockquote class="blockquote">
                                    <p><strong>ANO INTEIRO</strong></p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Itens Essenciais
                                </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            
            <div class="p-2 bd-highlight">
                <div class="d-flex  flex-row">
                    <div class="p-2">
                        <Item src={imgErica} h={410} w={298} />
                        <Footerimage className="primary-color d-flex p-2 justify-content-center">
                            Conjunto Executiva
                        </Footerimage>
                    </div>
                    <div class="p-2">
                        <Item src={imgErica2} h={410} w={298}/>
                        <Footerimage className="primary-color d-flex p-2 justify-content-center">
                            Vestido de Gala
                        </Footerimage>
                    </div>
                    <div class="p-2">
                        <Item src={imgErica3} h={410} w={298}/>
                        <Footerimage className="primary-color d-flex p-2 justify-content-center">
                            Vestido de Gala
                        </Footerimage>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )  
}

export default Itensessenciais;