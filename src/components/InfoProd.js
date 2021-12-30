import styled from 'styled-components';
const InfoProd = (props)=>{
    const {img,name} = props;
    return(
        <Content>
            <img src={img} alt={name}/>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis quasi quos saepe sunt! Aliquam asperiores ea earum enim iste iure magnam modi obcaecati officia quam. Autem, dignissimos dolorem enim exercitationem in inventore iusto, laborum necessitatibus ratione saepe, veniam vero!
            </p>
        </Content>
    )
}
const Content = styled.div`
    margin-bottom: 40px;
    display: grid;
  grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
  grid-gap: 40px;
  img{
    max-width: 100%;
    grid
  }
  
`;
export default InfoProd;