import CounterView from './Components/Counter/CounterView';
import NavBar from './Components/Utils/Navbar';
import {Routes, Route} from 'react-router-dom'
import TodosView from './Components/Todos/TodosView';
import ApiFetcherView from './Components/API/ApiFetcher';

function App() {
    return (
        <div className="App">
            <h4 style={{
                textAlign: 'center'
            }}>Walmart Challenge</h4>
            <NavBar/>
            <Routes>
                <Route path='/' element={< CounterView />}/>
                <Route path='/TodosView' element={< TodosView />}/>
                <Route path='/ApiFetcherView' element={< ApiFetcherView />}/>
            </Routes>
        </div>
    );
}

export default App;
