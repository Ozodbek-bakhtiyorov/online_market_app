import styled from 'styled-components'
import {Link} from "react-router-dom";
const MealItem=({strCategory,strCategoryThumb,strCategoryDescription})=>{
    return(
        <Content>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={strCategoryThumb} alt={strCategory}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator ">{strCategory}<i
                        className="material-icons right">more_vert</i></span>
                    <p><Link className={'btn btn-lg'} to={`/category/${strCategory}`}>Meals</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i
                        className="material-icons right">close</i>{strCategory}</span>
                    <p>{strCategoryDescription.slice(0,100)}...</p>
                    <p><Link className={'btn btn-lg'} to={`/category/${strCategory}`}>See More</Link></p>
                </div>
            </div>

        </Content>
    )
}
export default MealItem;
const Content = styled.div`
    .card{
      display: flex;
      flex-direction: column;
      .card-title{
        color: var(--font-black);
      }
      .card-content{
        flex-grow: 1;
      }
      .card-reveal{
        p:last-child{
          margin-top: 10px;
        }
      }
    }
`;
