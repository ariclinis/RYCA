import Image from 'next/image'

function Item(props) {
    return(
        <>
            <div>
                <Image src={props.src} alt="Beleza não processada" height={props.h} width={props.w} />
            </div>
        </>
    )
}

export default Item;