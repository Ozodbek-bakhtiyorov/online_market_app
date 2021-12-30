import styled from 'styled-components'
import {GoodsItem} from "./index";
import Title from "./Title";
import {useHistory} from "react-router-dom";
import SearchPanel from "./SearchPanel";
const GoodsList= ({filtered = [],handleSearch})=>{
    const {goBack} = useHistory();
    return(
            <>
            <Title name={'Goods'} goBack={goBack} />
                <SearchPanel cb={handleSearch} />
            <Content>
                {
                    filtered.map(good=>(
                        <GoodsItem key={good.id} {...good}/>
                    ))
                }
            </Content>
        </>

    )
}
const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
`;
export default GoodsList;