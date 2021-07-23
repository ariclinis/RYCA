import Product from "../src/components/product/Product"
import imgErica from '../public/erica3.jpg'

function Store(){

    return <>
            <div class="d-flex justify-content-center">
                <h4 class="display-5"><ins>Loja</ins></h4>
            </div>
            
            <Product src={imgErica}/>

        </>
}

export default Store