import Header from './components/Header'
import Pruduct from './components/Product'

import './App.css'
import data from './assets/data.js'
import {useState} from 'react'

function App() {
    const [state, setState] = useState([])

    function changeState(id=null, removeI=null) {
        if(removeI !== null) {
            setState(prevState => prevState.filter(i => i !== removeI))
            return
        }        
        if (!state.includes(id)) {
            setState(prevState => [...prevState, id])
        } else {
            setState(prevState => [...prevState])
        }
    }

    const products = data.map((item, i) => {
        return <Pruduct key={i} id={i} book={item} state={state} onClick={changeState} />
    })

    return (
        <div className='app'>
            <Header state={state} books={data} onClick={changeState} />
            <div className='product-container'>
                {products}
            </div>
        </div>
    )
}

export default App
