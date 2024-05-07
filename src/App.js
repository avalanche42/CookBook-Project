import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './my-recipe-app';
import SignupPage from './my-recipe-app';
import LoginPage from './my-recipe-app';
import RecipeListPage from './my-recipe-app';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/recipes" component={RecipeListPage} />
            </Switch>
        </Router>
    );
};

export default App;