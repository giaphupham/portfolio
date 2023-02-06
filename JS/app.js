let elToShow = document.querySelectorAll('.show-on-scroll')
var loader = document.getElementById('preloader')


window.addEventListener('load',()=>{
	
	loader.classList.add('disappear')
})

let isElInViewPort = (el) => {
	let rect = el.getBoundingClientRect()
	// some browsers support innerHeight, others support documentElement.clientHeight
	let viewHeight = window.innerHeight || document.documentElement.clientHeight

	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= viewHeight && rect.top <= viewHeight) ||
		(rect.top >= 0 && rect.bottom <= viewHeight)
	)
}

function loop() {
	elToShow.forEach((item) => {
		if (isElInViewPort(item)) {
			item.classList.add('start')
		}
	})
}

window.onscroll = loop

loop()