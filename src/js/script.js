const navButton = document.querySelector('.nav-mobile__burger')
const navMobileList = document.querySelector('.nav-mobile__items')
const navMobileItems = document.querySelectorAll('.nav-mobile__item')
const footerDate = document.querySelector('.footer__year')
const navDesktopItems = document.querySelectorAll('.nav-desktop__item')
const scrollSpySections = document.querySelectorAll('.section')
const cookies = document.querySelector('.cookies')
const cookiesButton = document.querySelector('.cookies__button')

const showNavbar = () => {
	navMobileList.classList.toggle('nav-mobile__items--active')
	navButton.classList.toggle('nav-mobile__burger--white')

	navMobileItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobileList.classList.remove('nav-mobile__items--active')
			navButton.classList.remove('nav-mobile__burger--white')
		})
	})
}

const showYear = () => {
	const year = new Date().getFullYear()
	footerDate.textContent = year
}

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 120) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				navDesktopItems.forEach(item => item.classList.remove('active'))
				activeSection.classList.add('active')
			}
		})
	}
}

const hideCookies = () => {
	cookies.style.display = 'none'
}

showYear()
navButton.addEventListener('click', showNavbar)
window.addEventListener('scroll', handleScrollSpy)
window.addEventListener('DOMContentLoaded', handleScrollSpy)
cookiesButton.addEventListener('click', hideCookies)
