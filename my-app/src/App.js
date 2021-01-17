import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Board from './pages/board/board';
import Backlog from './pages/backlog/backlog';
import Reports from './pages/reports/reports';
import SideNav from './components/sidenav/sidenav';

const App = () => {
    return (
        <BrowserRouter>
            <div id="root">
                <SideNav />
                <div id="content-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/board" exact component={Board} />
                        <Route path="/backlog" exact component={Backlog} />
                        <Route path="/reports" exact component={Reports} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
