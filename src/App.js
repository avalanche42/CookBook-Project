import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*import HomePage from './my-recipe-app';
import SignupPage from './my-recipe-app';
import LoginPage from './my-recipe-app';
import RecipeListPage from './my-recipe-app';*/


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={/my-recipe-app/HomePage} />
                <Route path="/signup" component={/my-recipe-app/SignupPage} />
                <Route path="/login" component={/my-recipe-app/LoginPage} />
                <Route path="/recipes" component={/my-recipe-app/RecipeListPage} />
            </Routes>
        </Router>
    );
};

export default App;
