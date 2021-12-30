import {Footer, Header, Main} from "./layouts";
import {BrowserRouter as Router} from "react-router-dom";
import {OrdersModal} from "./components";
import {AppState} from "./context/AppContext";
function App() {
    const {value:{
        toggleModal,
        isOpenCard,
    }} = AppState();
  return (
          <Router>
              {
                  <OrdersModal toggleModal={toggleModal}/>
              }
              <Header/>
              <Main toggleModal={toggleModal}/>
              <Footer/>
          </Router>
  );
}

export default App;
