import styled from 'styled-components';
import {AppState} from "../context/AppContext";
const OrderItem = (props)=>{
        const {index, name,qty, price, id} = props;
    const {value:{incr,decr,del}} = AppState();
    return(
        <Content >
              <td>{index+1}</td>
              <td>{name}</td>
              <td>{price} {qty}X={price*qty}p.</td>
              <td style={{display:'flex'}}>
                  <span onClick={()=>incr(id)}  className={'green darken-3 btn waves-effect waves-light'}><i className='material-icons'>add</i></span>
                  <span>{qty}</span>
                  <span onClick={()=>decr(id)} className={'red darken-1 decr btn waves-effect waves-light'}><i className='material-icons'>remove</i></span>
                  <span onClick={()=>del(id)} className={'btn waves-effect red darken-2  waves-light'}><i className={'material-icons'}>delete_forever</i></span>
              </td>
        </Content>
    )
}
const Content = styled.tr`
  td {
    span {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin-right: 10px;
    }
  }
`
export default OrderItem;