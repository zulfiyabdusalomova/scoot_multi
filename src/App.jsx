import { Switch, Route } from "react-router-dom";
import { Home, NotFound, Locations, Careers, About } from "./pages";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/locations'>
          <Locations />
        </Route>
        <Route path='/careers'>
          <Careers />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;