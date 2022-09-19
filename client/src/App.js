import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {TemplatesProvider} from "./Components/templates/TemplatesProvider";

function App() {
  return (
    <TemplatesProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </TemplatesProvider>
  );
}

export default App;
