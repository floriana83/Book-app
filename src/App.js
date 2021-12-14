import './App.css';
import ProductCard from './components/ProductCard'
import { useState } from 'react'

import { data } from './data';

function App() {
  const [state, setState] = useState(data.products)

  return (
    <div className="App">
      <header className="App-header">
        {/* Ternario */}
        {/* {state ? data.products.map((book) => <ProductCard key={book.id} title={book.name} price={book.price} description={book.description} image={book.img} />) : " Non ci sono prodotti da visualizzare"} */}
        {/* And */}
        {state && data.products.map((book) => <ProductCard key={book.id} title={book.name} price={book.price} description={book.description} image={book.img} />)}
        <button onClick={() => setState(!state)}>Show products</button>
      </header>
    </div>
  );
}

export default App;