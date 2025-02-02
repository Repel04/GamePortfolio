const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

// Add this at the start to set a default theme if none exists
if (!localStorage.getItem('portfolio-theme')) {
  localStorage.setItem('portfolio-theme', 'dark');
  localStorage.setItem('portfolio-btn-theme', 'fa-moon');
}

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
  try {
    body.classList.remove('dark', 'light')
    btnTheme.classList.remove('fa-sun', 'fa-moon')
    
    body.classList.add(bodyClass)
    btnTheme.classList.add(btnClass)
    
    localStorage.setItem('portfolio-theme', bodyClass)
    localStorage.setItem('portfolio-btn-theme', btnClass)
  } catch (error) {
    console.error('Error switching theme:', error)
  }
}

const toggleTheme = () => {
  const currentTheme = isDark() ? 'light' : 'dark'
  const currentIcon = isDark() ? 'fa-sun' : 'fa-moon'
  setTheme(currentTheme, currentIcon)
}

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  
  if (window.scrollY > 300) {
    btnScrollTop.style.display = 'flex';
  } else {
    btnScrollTop.style.display = 'none';
  }
}

// Add click handler
document.querySelector('.scroll-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Listen for scroll
window.addEventListener('scroll', scrollUp);
