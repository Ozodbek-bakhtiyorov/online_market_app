import styled from 'styled-components';
import OrderItem from "./OrderItem";
import {AppState} from "../context/AppContext";
import {Link} from "react-router-dom";

const OrdersModal = (props)=>{
   const {value:{
       orders,
       toggleModal,
       isOpenCard
   }} = AppState()
    return(
        <>
            <Content onClick={toggleModal} className={`${isOpenCard ? 'activeM':''}`}>
                <div className="list" onClick={e=>e.stopPropagation()}>
                    <button onClick={toggleModal} className={'btn btn-large '}><i className={'material-icons'}>close</i></button>
                    {orders.length ?
                        <div className={'content'}>
                            <h3>You Have {orders.length} Orders</h3>
                            <h4>Total Price:{orders.reduce((sum,curr)=>sum+curr.price*curr.qty,0)}p.</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Count</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    orders.map((order, index)=>(
                                       <OrderItem key={order.id} index={index} {...order}/>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                        : <div className={'empty'}>
                            <h2>Empty Cart</h2>
                            <Link to={'/'}><span onClick={toggleModal} className={'btn waves-effect waves-light'}>Home</span></Link>
                        </div>
                    }
                    {orders.length ? <button className={'btn-cost btn btn-large waves-effect waves-light'}>Cost</button>:null}
                </div>
            </Content>
        </>
    )
}
const Content = styled.div`
  cursor: pointer;
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 0;
  opacity: 0;
  transition: all .4s cubic-bezier(.22,.63,.95,.64) ;
  -webkit-transform: scale(0);-moz-transform: scale(0);-ms-transform: scale(0);-o-transform: scale(0);transform: scale(0);
  .content {
    max-height: 60vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-image: linear-gradient(to top, #373434, #473838);
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      border-radius: 10px;

      &:hover {
        background-color: #456819;
      }
    }
  }
  .empty {
    a span {
      background-image: linear-gradient(to right bottom, #43571e, #5a8b15, #81b217);
    }
  }

  .list {
    max-width: 900px;
    color: white;
    max-height: 90%;
    min-width: 800px;
    border-radius: 10px;
    background: linear-gradient(to right top, rgba(13, 9, 9, 0.8) ,rgba(56, 26, 26, 0.9));
    padding: 10px 20px;

    table {
      width: 100%;

      tr, th {
        border-bottom: 1px solid rgba(158, 116, 116, 0.44);
      }
    }

    .btn-cost {
      color: white;
      background-image: linear-gradient(to top right, #0c0c30, blueviolet);
      margin-top: 20px;
      font-weight: bold;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
    }
  }
`;
export default OrdersModal;