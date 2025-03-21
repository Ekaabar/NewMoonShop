import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import basket from '../assets/basket.png'
import close from '../assets/close.png'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, bookType) => acc + bookType.amount * bookType.price,
		0
	)
	useEffect(() => {
		document.title = `NMS: ${total}DT of purchase`
	}, [total])

	const basketicon =
	<img src={basket} alt='basket-icon' />

	const closeicon =
	<img src={close} alt='close-icon' />

	return isOpen ? (
		<div className='nms-cart'>
			<button
				className='nms-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
			<span >{closeicon }</span>
			</button>
			{cart.length > 0 ? (
				<div >
					<h2 className='nms-cart-title'>My Purchase Order</h2>
					<ul>
				
						{cart.map(({ name, price, amount }, index) => (
							<li  className='nms-cart-item' key={`${name}-${index}`}>
								{amount} x {name} 
							</li>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button className='nms-cart-rest-button' onClick={() => updateCart([])}>Reset </button>
				</div>
			) : (
				<div>Empty</div>
			)}
		</div>
	) : (
		<div className='nms-cart-closed'>
			<button
				className='nms-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
			<span >{basketicon }</span>
			<h3>Total :{total}DT</h3>
			</button>
		</div>
	)
}

export default Cart