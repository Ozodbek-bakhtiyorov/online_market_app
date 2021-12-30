import styled from 'styled-components'
import {useEffect, useState} from "react";
import {GOOD_API,GOOD_KEY} from "../config";
import {GoodsList, Loader} from "../components";
import { useHistory } from 'react-router';
import {useLocation} from "react-router-dom";

const Goods = ()=> {
    const [goods, setGoods] = useState([]);
    const [orders,setOrders] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [filtered,setFiltered] = useState([]);
    const [word, setWord] = useState('')
    const {push} = useHistory();
    const {pathname,search} = useLocation()

    useEffect(()=>{
        fetch(GOOD_API, {
            headers:{
                "Authorization":GOOD_KEY
            }
        })
            .then(data=>data.json())
            .then(data=>{
                if(data.featured){
                    setGoods(data.featured);
                    setQuantity( data.featured.length);
                    setFiltered(word ? setFiltered(data.featured.filter(item=>item.name.toLowerCase().includes(word.toLowerCase())
                    )):data.featured)
                }
            })
    }, [word]);
    const handleSearch = (str)=>{
         setWord(word);
        if(str){
            if(goods.some(item=>item.name.toLowerCase().includes(str.toLowerCase()))){
            setFiltered(goods.filter(item=> item.name.toLowerCase().includes(str.toLowerCase())));
            console.log(goods.filter(item=> item.name.toLowerCase().includes(str.toLowerCase())))
                push({
                    pathname,
                    search:`?search=${str}`
                })
            }
            else{
                setFiltered(goods);
                console.log(filtered)
                push({
                    pathname,
                    search:''
                })
            }
        }
        else{
            setFiltered(goods);
        }
    }

    return(
        <>
            {
                goods.length ?
                    <Content>
                        <GoodsList filtered={filtered} handleSearch={handleSearch}/>
                    </Content>
                    :<Loader/>
            }
        </>

    )
}
export default Goods;
const Content = styled.div``;