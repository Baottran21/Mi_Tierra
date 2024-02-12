import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Landing Page/LandingPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
