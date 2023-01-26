import Header from './components/Header'
import Pruduct from './components/Product'

import './App.css'
import books from './assets/data.js'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='product-container'>
        <Pruduct title={books[0].title} author={books[0].author} text={books[0].text} />
        <Pruduct title={books[1].title} author={books[1].author} text={books[1].text} />
        <Pruduct title={books[2].title} author={books[2].author} text={books[2].text} />
        <Pruduct title={books[3].title} author={books[3].author} text={books[3].text} />
      </div>
    </div>
  )
}

export default App
