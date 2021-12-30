import styled from 'styled-components';
import {useEffect, useState} from "react";
import {getMealCategories} from "../api";
import Loader from "../components/Loader";
import {MealItem, Title} from "../components";
import {useHistory, useLocation} from "react-router-dom";
import SearchPanel from "../components/SearchPanel";


const MealCategories = ()=>{
    const {pathname , search} = useLocation();
    const {goBack, push} = useHistory();
    const [categories,setCategories] = useState([]);
    const [FilteredCatalog , setFilteredCatalog] = useState([]);
    const [word, setWord] = useState('')
    useEffect(()=>{
        getMealCategories()
            .then(data=> {
                    setCategories(data.categories);
                    setFilteredCatalog(word ? data.categories.filter(item=>{
                        item.strCategory
                            .toLowerCase()
                            .includes(word.toLowerCase())
                    }):data.categories);
                    console.log(word ? data.categories.filter(item=>{
                        item.strCategory
                            .toLowerCase()
                            .includes(word.toLowerCase())
                    }):data.categories)
                }
            )
    }, [word]);
    const handleSearch = (str)=>{
        setWord(word);
        if(str){
                if(categories.some(item=>item.strCategory.toLowerCase().includes(str.toLowerCase()))) {
                    setFilteredCatalog(categories.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
                    push({
                        pathname,
                        search: `?search=${str}`
                    })
                }
                else{
                    setFilteredCatalog(categories)
                    push({
                        pathname,
                        search:``
                    })
                }
        }
        else{
            setFilteredCatalog(categories);
        }
    }
    return(
        <>
            {
                !FilteredCatalog.length ? <Loader/>:
                    <Content>
                        <Title goBack={goBack} name={'Categories'}/>
                        <SearchPanel cb={handleSearch}/>
                       <div className={'categories'}>
                           {
                               FilteredCatalog.map((category)=>(
                                   <MealItem key={category.idCategory} {...category}/>
                               ))
                           }
                       </div>
                    </Content>
            }
        </>

    )
}
const Content = styled.div`
    .categories {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
      .card{
        border-radius: 5px;
      }
    }
`;
export default MealCategories;