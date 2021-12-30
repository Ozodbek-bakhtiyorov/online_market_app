import styled from 'styled-components';
import {Link} from "react-router-dom";
import logo from '../assets/img/logo.png'
const Header = ()=>{
    return(
        <>
            <Content>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <Link to='/'><img className={'nav_brand'} src={logo} alt="Shop Logo"/></Link>
                        <Link to='/' data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></Link >
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to='/login' >Login </Link></li>
                            <li><Link to='/contact' >Contact</Link></li>
                        </ul>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><Link to="/">Home</Link></li>
                            <li className="tab"><Link to="/mealcategories">Meals</Link>Link</li>
                            <li className="tab"><Link to="/goods">For Babies</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </Content>
        </>
    )
}
const Content = styled.div`
  nav{
    Background:var(--bg-dark);
    padding: 0 10px;
    color: var(--font-white);
    .nav-wrapper{
      .nav_brand{
        width: 50px;
        height: 50px;
        padding: 5px;
      }
    }
  }
`
export default Header;