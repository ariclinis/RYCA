import Image from 'next/image'

function Item(props) {
    return(
        <>
            <div>
                <Image src={props.src} alt="Beleza não processada" height={410} width={298} />
            </div>
        </>
    )
}

export default Item;