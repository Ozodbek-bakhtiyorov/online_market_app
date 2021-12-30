import styled from 'styled-components'
import {Link} from "react-router-dom";
import {AppState} from "../context/AppContext";
const GoodsItem = (props)=>{
    const {name,id,description, price,full_background} = props
    const {value:{
        addToCart,
        orders,
    }} = AppState()
    console.log(orders)
    return(
        <Content>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={full_background} alt={name}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator ">{name}<i
                        className="material-icons right">more_vert</i></span>
                    <p><Link to={`/good/${id}`} className={'btn btn-lg waves-effect waves-light'}>See more</Link></p>
                </div>
                <div className="card-content">
                    <span className="card-title">Price:{price}</span>
                    <p
                        className={'btn btn-lg waves-effect waves-light'}
                        onClick={()=>addToCart({id,price,name})}>
                        Buy <i className={"material-icons"}>shopping_cart</i>
                    </p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i
                        className="material-icons right">close</i>{name}</span>
                    <p>{description}</p>
                    <p><Link to={`/good/${id}`} className={'btn btn-lg waves-effect waves-light'}>See More</Link></p>
                </div>
            </div>
        </Content>
    )
}
const Content = styled.div`
  display: flex;
  flex-direction: column;

  .card {
    flex-grow: 1;
    border-radius: 5px !important;
    background: rgba(75, 29, 29, 0.8);
  }

  .card-title {
    color: var(--font-white) !important;
  }

  .btn {
    background: var(--dark-blue);
    color: var(--font-white);
    font-size: 20px;
  }
`;
export default GoodsItem;