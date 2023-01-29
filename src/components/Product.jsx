import './Product.css'

function Product(props) {//{title, author, text}) {
    // console.log(props);
    const {title, author, text} = props.book
    return (
        <div className="product">
            <h2 className='product__title'>{title}</h2>
            <p className='product__author'>Av {author}</p>
            <p className='product__text'>{text}</p>
            <button
                className={`button ${props.state.includes(props.id)?"red":''}`}
                onClick={() => {props.onClick(props.id,null)}}>Add to cart
            </button>
        </div>
    )
}

export default Product