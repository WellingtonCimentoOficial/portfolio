import { HashRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import { useEffect, useState } from 'react';
import IconLoader from './components/Loaders/IconLoader/IconLoader';
import { LoadingContextProvider } from './contexts/LoadingContext';

function App(){
    const [render, setRender] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => setRender(true), 4000);

        return () => clearTimeout(timeout)
    }, [])


    return (
        render ? (
            <div className="App">
                <HashRouter>
                    <LoadingContextProvider>
                        <Routes />
                    </LoadingContextProvider>
                </HashRouter>
            </div>
        ):(
            <IconLoader />
        )
    )
}

export default App