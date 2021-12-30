import styled from 'styled-components';
import {InfoProd} from "../components";
import {headerInfo} from "../assets/data";
import img from '../assets/fruits.jpg'

const Home = ()=>{
    return(
        <Content>
            <header>
            </header>
            <div className="content">
                {
                    headerInfo.map(el=>(
                        <InfoProd key={el.id} {...el} img={img}/>
                    ))
                }
            </div>
        </Content>
    )
}
const Content = styled.div`
    padding: 30px 0;
`
export default Home;