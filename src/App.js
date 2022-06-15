import {Routes, Route} from 'react-router-dom'

import {TodosView, ApiFetcherView, CounterView, NavBar}from './Components/index';

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
