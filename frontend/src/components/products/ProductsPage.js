import { Products } from './Products';
 import contents from './Content';
 import './Products.css'

function ProductsPage() {
  return (
    <div className='prodt'>
    {contents.map(contents => (
        <Products 
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
        />
    ))}
</div>
  )
}

export default ProductsPage
