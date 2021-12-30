import styled from 'styled-components';
import {useState} from "react";
const SearchPanel = ({cb=Function.prototype})=>{
    const [word, setWord] = useState('');
    const HandleKey = (e)=>{
        if(e.key === 'Enter'){
            handleSubmit(e);
        }
    }
    const handleChange = (e)=>{
        setWord(e.target.value);
    }
    const handleSubmit = (e)=>{
       e.preventDefault();
       cb(word)
    }
    return(
        <Content>
            <div className="row">
                <form className="col s12"  onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s8">
                            <i className="material-icons prefix">search</i>
                            <input
                                id="icon_prefix"
                                type="text"
                                className="validate"
                                onKeyDown={HandleKey}
                                onChange={handleChange}
                                value={word}
                            />
                            <label htmlFor="icon_prefix">Search</label>
                        </div>
                        <div className="input-field col s4">
                            <button
                                type='submit'
                                className={'btn '}
                            >Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </Content>
    )
}
const Content = styled.div``;
export default SearchPanel;