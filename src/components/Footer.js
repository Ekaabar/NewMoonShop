import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("the tipped E-mail address is not valid!!! 😥")
		}
	}

	return (
		<footer className='nms-footer'>
			<div className='nms-footer-elem'>
				For Books Passionate📖📚
			</div>
			<div className='nms-footer-elem'> Would you like to keep updated about new editions, 
				please leave your E-mail address here:</div>
			<input className='nms-footer-input'
				placeholder='Enter your e-mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer