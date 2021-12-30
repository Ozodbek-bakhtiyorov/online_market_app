import styled from 'styled-components'
import {Loader, Title} from "../components";
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GOOD_API, GOOD_KEY} from "../config";
const Good = (props)=>{
    const  [good, setGood] = useState('')
    const {goBack} = useHistory();
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        fetch(GOOD_API, {
            headers:{
                "Authorization":GOOD_KEY
            }
        })
            .then(data=>data.json())
            .then(data=>{
                if(data.featured){
                }
            })
    },[id])
    return (
        <>
            {
                good ?  <Content>
                    <Title name={good.name} goBack={goBack}/>
                    <div><img src={good.full_background} alt={good.name}/></div>
                    <h1>{good.name}</h1>
                    <p>{good.description}</p>
                    <p>{good.pirice}</p>
                    <p>{good.releaseDate}</p>
                    <p>{good.lastAppearance}</p>
                    <p>{good.interest}</p>
                    <div>
                        <button className={'btn btn-lg blue text-light'}>Buy</button>
                    </div>
                </Content>:<Loader/>
            }
        </>

    )
}
const Content = styled.div``
export default Good