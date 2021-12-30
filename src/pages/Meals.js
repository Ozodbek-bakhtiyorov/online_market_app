import styled from 'styled-components';
import {useEffect, useState} from "react";
import {getMealCategoryByName} from "../api";
import {useParams, useHistory} from "react-router-dom";
import {Meal, Loader, Title} from "../components";
const Meals = ()=>{
    const {name}= useParams();
    const {goBack} = useHistory();
    const [meals , setMeals] = useState([]);
    useEffect(()=>{
            getMealCategoryByName(name)
            .then(data=>setMeals(data.meals));
    },[name])
    return(
        <>
            {
                meals.length ?
                    <div>
                        <Title goBack={goBack} name={name}/>
                        <Content>
                            {
                                meals.map((meal)=>(
                                    <Meal key={meal.idMeal} {...meal}/>
                                ))
                            }
                        </Content>
                    </div>
                    :
                    <Loader/>
            }
        </>
    )
}
const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
`;
export default Meals;