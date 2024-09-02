import { HashRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

function App(){
    return (
        <div className="App">
            <HashRouter>
                <Routes />
            </HashRouter>
        </div>
    )
}

export default App