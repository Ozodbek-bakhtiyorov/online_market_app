import styled from 'styled-components'
import {Link} from "react-router-dom";
import {AppState} from "../context/AppContext";
const Meal = (props)=>{
    const {value:{addToCart}} = AppState()
    const {idMeal,strMealThumb,strMeal} = props;
    const [id,name,price] = [idMeal,strMeal,Math.floor(Math.random()*1000)]
    return(
        <Content>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={strMealThumb} alt={strMeal}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator ">{strMeal}<i
                        className="material-icons right">more_vert</i></span>
                    <p><Link className={'btn waves-effect waves-light'} to={`/meal/${idMeal}`}>Recipe</Link></p>
                    <p><button onClick={()=>addToCart({id,name,price})} className={'btn  waves-effect waves-light'}>Buy</button></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i
                        className="material-icons right">close</i>{strMeal}</span>
                    <p><Link className={'btn btn-lg'} to={`/meal/${idMeal}`}>See More</Link></p>
                </div>
            </div>

        </Content>
    )
}
export default Meal;
const Content = styled.div`
  display: flex;

  .card {
    flex-grow: 1;

    .card-title {
      color: var(--font-black);
    }

    .card-content {
      p:not(:last-child) {
        margin-bottom: 20px;
      }

      .btn:first-child {
        background-image: linear-gradient(to right bottom, blue, #221677);
        -webkit-box-shadow: 0 5px 6px 4px 0 rgba(0, 0, 0, 0.5);-moz-box-shadow: 0 5px 6px 4px 0 rgba(0, 0, 0, 0.5);box-shadow: 0 5px 6px 4px 0 rgba(0, 0, 0, 0.5);
      }
    }

    .card-reveal {
      p:last-child {
        margin-top: 10px;
      }
    }
  }
`;
