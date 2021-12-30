import styled from "styled-components";
import {Good, Goods, Home, MealCategories, Meals} from "../pages";
import {Switch,Route} from 'react-router-dom'
import NotFound from "../pages/NotFound";
import Recipe from "../pages/Recips";
import {Card} from "../components";
const Main = (props)=>{
   const {toggleModal} = props
    return(
        <Content className="container">
            <Card toggleModal={toggleModal}/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/goods' component={Goods}/>
                <Route path='/good/:id' component={Good}/>
                <Route path='/category/:name' component={Meals}/>
                <Route path='/meal/:id' component={Recipe}/>
                <Route path='/mealcategories' component={MealCategories}/>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Content>
    )
}
const Content = styled.div`
  min-height: 60vh;
  width: 100vw;
`
export default Main;