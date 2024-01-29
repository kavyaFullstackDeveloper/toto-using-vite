import React from 'react';
import axios from 'axios';

const ProductItem = ({ product, onDelete }) => {
const handleDelete = () => {
axios.delete(`http://localhost:3005/api/products/${product.id}`)
.then(response => {
onDelete();
})
.catch(error => console.log(error));
};

return (
<li className='py-4 flex gap-5 text-xl' key={product.id}>
<p className='text-blue-600' >{product.name} </p>
<button onClick={handleDelete} className='text-sm bg-red-600 text-white px-5 rounded-md shadow-md'>Delete</button>
</li>
);
};

export default ProductItem;