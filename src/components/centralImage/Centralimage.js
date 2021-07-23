import Image from 'next/image'
import ReactPlayer from 'react-player'
import imgErica from '../../../public/erica1.jpg'
import styled from 'styled-components'

const sim= true
const nao =false
const h=340;
const Container = styled.div`
    float:left;
    margin: 0;
    width:100%;
    padding:0;
    border:0;
    img{
        height:${h}px;
        width:900px;
        float:rigth;
    }
    ReactPlayer{
        float:right;
        margin:auto;
        
    }
`
const Painel = styled.div`
    position: absolute;
    height: 100px;
    width: 400px;
    margin-top:10%;
    margin-left: 40%;
    background: white;
    opacity: 0.8;
    padding-top: 20px;
    padding-left: 100px;
`

const Titulo = styled.p`
    font-size: 18px;
    font-color: #634938;
    opacity: 1;
`
const Btn = styled.button`
    width:200px;
    position: relative;
    color: white;
    &:hover{
        background-color:white;
        color: #634938;
    }
`
const Frete = styled.div`
    color: white;
    height:25px;
    width: 100%;
    text-align:center;
    p{
        text-align:center;
    }
`
const Painelvideos = styled.div`
    position: absolute;
    height: 100px;
    width: 100%;
    margin-top:0;
    margin-left: 0;
`


function Centralimage(){
    return(
        <Container className="">
            <div class="row">
                    <div class="col-12" class="no-margin">
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=k6L6JCa1TLA' controls={nao} muted={true} playing={sim} loop={true} width={190} height={h} />
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=AUJ2RsaqPmQ' controls={nao} muted={true} playing={sim} loop={true} width={192} height={h}/>
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=OJWbMLJVXQI' controls={nao} muted={true} playing={sim} loop={true} width={190} height={h} />
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=GDHSVo8mvGs' controls={nao} muted={true} playing={sim} loop={true} width={190} height={h} />
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=gYDvwriE2P4' controls={nao} muted={true} playing={sim} loop={true} width={190} height={h} />
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=k6L6JCa1TLA' controls={nao} muted={true} playing={sim} loop={true} width={190} height={h} />
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=AUJ2RsaqPmQ' controls={nao} muted={true} playing={sim} loop={true} width={192} height={h}/>
                        <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=AUJ2RsaqPmQ' controls={nao} muted={true} playing={sim} loop={true} width={192} height={h}/>
                        <Painel>
                            <Titulo><strong>PRIMAVERA E VERÃO</strong></Titulo>
                            <Btn className="primary-color">Comprar</Btn>
                        </Painel>
                    </div>
            </div>
            <div class="row">
                <Frete className="primary-color">
                        <p>PORTES INCLUÍDOS PARA PORTUGAL</p>
                </Frete>
            </div>
            
        </Container>
    )
}

export default Centralimage