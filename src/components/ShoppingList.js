import { useState } from 'react'
import { bookList } from '../datas/bookList'
import BookItem from './BookItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = bookList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentBookAdded = cart.find((book) => book.name === name)
		if (currentBookAdded) {
			const cartFilteredCurrentBook = cart.filter(
				(book) => book.name !== name
			)
			updateCart([
				...cartFilteredCurrentBook,
				{ name, price, amount: currentBookAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='nms-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='nms-book-list'>
				{bookList.map(({ id, cover, name,rate, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<BookItem
								cover={cover}
								name={name}
								rate={rate}
								price={price}
							/>
							<button  className='nms-book-button' onClick={() => addToCart(name, price)}>Add</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList