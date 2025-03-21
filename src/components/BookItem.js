import CareScale from './CareScale'
import '../styles/BookItem.css'

function handleClick(bookName) {
	alert(`Vous voulez acheter 1 ${bookName}? Très bon choix`)
}

function BookItem({ cover, name, rate, price }) {
	return (
		<li className='nms-book-item' onClick={() => handleClick(name)}>
			<span className='nms-book-item-price'>{price}DT</span>
			<img className='nms-book-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale rate={rate} />
			</div>
		</li>
	)
}

export default BookItem