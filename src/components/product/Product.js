import Item from "../item/Item"

function Product(props) {
    return <>
        <div class="col-4">
            <Item src={props.src} w={200} h={200} />
            <div>
                <p>Executiva</p>
                <p>14 €</p>
            </div>
        </div>
    </>
}

export default Product