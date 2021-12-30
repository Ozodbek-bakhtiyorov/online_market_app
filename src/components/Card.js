import styled from 'styled-components'
import {useContext, useState} from "react";
import {AppState} from "../context/AppContext";
const Card = ()=>{
    const {value:{orders, toggleModal}}=AppState();
    const [quantity, setQuantity ]=useState(0);
    return (
        <Content >
            <button onClick={toggleModal} className={'btn btn-large waves-effect waves-light'}><i className={'material-icons'}>shopping_cart</i>
                <sub>{orders.length ? orders.length :null}</sub>
            </button>
        </Content>
    )
}
const Content = styled.div`
  z-index: 4  ;
  position: fixed;
  top: 5rem;
  right: 1rem;

  button {
    background: var(--bg-btn);
    color: var(--font-white);
  }
`;
export default Card;
