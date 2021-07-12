import Item from "../item/Item";
import imgErica from '../../../public/erica3.jpg'
import imgErica2 from '../../../public/erica4.png'
import imgErica3 from '../../../public/erica5.png'
import styled from "styled-components"

const titulo = styled.div`

`
function Itensessenciais(params) {
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
                <div class="d-flex flex-row">
                    <div class="p-2">
                        <Item src={imgErica}/>
                    </div>
                    <div class="p-2">
                        <Item src={imgErica2}/>
                    </div>
                    <div class="p-2">
                        <Item src={imgErica3}/>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )  
}

export default Itensessenciais;