
import star from '../assets/star.png'
function CareScale({ rate }) {
	const range = [1, 2, 3, 4]
	const starrate =
			<img src={star} alt='star-icon' />
			
			return (
		<div>
			{range.map((rangeElem) =>
				rate >= rangeElem ? (
					<span key={rangeElem.toString()}>{starrate}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
