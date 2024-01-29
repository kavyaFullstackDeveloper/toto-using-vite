import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import ProductItem from './components/productItem'
import ProductForm from './components/productForm';

function App() {

const [products, setProducts] = useState([]);

const fetchProducts = () => {
axios.get('http://localhost:3005/api/products')
.then(response => setProducts(response.data))
.catch(error => console.log(error));
};

useEffect(() => {
fetchProducts();
}, []);

const handleAddOrUpdate = () => {
fetchProducts();
};

return (
<>
<div className='flex justify-center'>
<div className='p-10'>
<h2 className='text-blue-600 text-2xl'>product List</h2>
<div className='bg-blue-600 w-5 h-1 rounded-full'></div>
</div>
</div>
<ProductForm onAddOrUpdate={handleAddOrUpdate} />
<div className='flex justify-center'>
<ul>
{products.map(product => (
<ProductItem key={Math.random()} product={product} onDelete={handleAddOrUpdate} />
))}
</ul>
</div>
</>
)
}

export default App