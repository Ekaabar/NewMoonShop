import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='nms-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='nms-categories-select'
			>
				<option value=''>None</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button  className='nms-categories-reset' onClick={() => setActiveCategory('')}>Reset</button>
		</div>
	)
}

export default Categories