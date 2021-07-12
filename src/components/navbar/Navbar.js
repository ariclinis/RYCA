
import styled from 'styled-components'

const Nav = styled.nav`
    height:75px;
    width:100%;
    background-color: #634938;
    
`
const Container = styled.div`
    background-color: #634938;
`
const Title = styled.h3`
    color: #FFFF;
`
const Menu = styled.div`

    ul{
        margin:auto;
        width:50%;
        padding: 10px;
    }
    
    ul .nav-item .nav-link{
        color:white;
        font-size: 18px;
    }
    
`
const Item = styled.a`
    

`

function Navbar(){
    return (
        <>
        <Nav className="navbar navbar-expand-lg navbar-light">
            <Container className="container-fluid">
                <Title className="" ><strong>RYCA</strong></Title>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Menu className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <Item className="nav-link" href="#">LOJA</Item>
                        </li>
                        <li className="nav-item">
                            <Item className="nav-link" href="#">SOBRE</Item>
                        </li>
                    </ul>
                </Menu>
            </Container>
        </Nav>
 
        </>
    )
}

export default Navbar