import styled from "styled-components";
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(
        <>
            <Content>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h3 className="white-text logo"><sub>Meals</sub> &<sup>Goods</sup></h3>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize
                                    your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><Link to='/' className="grey-text text-lighten-3">Home</Link></li>
                                    <li><Link to='/mealcategories' className="grey-text text-lighten-3">Meals</Link></li>
                                    <li><Link to='/goods' className="grey-text text-lighten-3">Goods</Link></li>
                                    <li><Link to='/login' className="grey-text text-lighten-3">Log in</Link></li>
                                    <li><Link to='/contact' className="grey-text text-lighten-3">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </Content>
        </>
    )
}
const Content = styled.div`
  footer{
    background: var(--bg-dark2);
    color: var(--font-white2);
  }
`
export default Footer;