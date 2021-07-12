import Image from 'next/image'

function Item(props) {
    return(
        <>
            <div>
                <Image src={props.src} alt="Beleza não processada" height={320} width={190} />
            </div>
        </>
    )
}

export default Item;