
function switchForm(type) {
	const wrapper = document.querySelector('.form-toggle-wrapper');
	const buttons = document.querySelectorAll('.toggle-btn');
	const customerPane = document.getElementById('customerForm');
	const vendorPane = document.getElementById('vendorForm');


	buttons.forEach(btn => btn.classList.remove('active'));

	if (type === 'customer') {
		wrapper.classList.remove('vendor-active');
		buttons[0].classList.add('active');

		vendorPane.classList.remove('active');
		customerPane.classList.add('active');
	} else {
		wrapper.classList.add('vendor-active');
		buttons[1].classList.add('active');

		customerPane.classList.remove('active');
		vendorPane.classList.add('active');
	}
}


document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
	const sections = document.querySelectorAll('header, section, footer');

	// 1. Click Handler: Instantly switch active class when a link is clicked
	navLinks.forEach(link => {
		link.addEventListener('click', function () {
		navLinks.forEach(item => item.classList.remove('active'));
		this.classList.add('active');

		// On mobile devices, automatically close the collapsed hamburger menu after clicking a link
		const navbarCollapse = document.getElementById('navbarNav');
		if (navbarCollapse.classList.contains('show')) {
			const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
			if (bsCollapse) bsCollapse.hide();
		}
		});
	});

	// 2. Scroll Handler (Scrollspy): Update active link automatically as user scrolls
	window.addEventListener('scroll', function () {
		let currentSectionId = "";
		const scrollPosition = window.scrollY + 120; 

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
				if (section.getAttribute('id')) {
					currentSectionId = section.getAttribute('id');
				}
			}
		});

		if (currentSectionId) {
			navLinks.forEach(link => {
				link.classList.remove('active');
				if (link.getAttribute('href') === `#${currentSectionId}`) {
					link.classList.add('active');
				}
			});
		}
	});
});