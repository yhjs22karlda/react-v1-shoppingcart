import './Product.css'

function Product({title, author, text}) {
    console.log(title, author, text);
    return (
        <div className="product">
            <h2 className='product__title'>{title}</h2>
            <p className='product__author'>Av {author}</p>
            <p className='product__text'>{text}</p>
            <button className='button'>Add to cart</button>
        </div>
    )
}

export default Product