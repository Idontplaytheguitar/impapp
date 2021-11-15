import CommonRoute from './components/CommonRoute/CommonRoute';
import { Switch, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Details } from './Pages/Details/Details'

function App() {
  return (
    <div className='App'>
      <Switch >
        <CommonRoute exact path="/" component={Home} />
        <Route exact path="/band/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
