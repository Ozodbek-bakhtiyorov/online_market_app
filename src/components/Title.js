const Title = ({name, goBack})=>{
    return(
        <h1 className={'title white-text'}>
            <span onClick={goBack} className={'btn-floating btn-large waves-effect waves-light'}><i className="material-icons left">arrow_back</i></span>
            {name}
        </h1>
    )
}
export default Title
