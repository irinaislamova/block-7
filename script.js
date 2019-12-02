
let tech_open = document.querySelector('.tech-repair__arrows-link');
let tech_container = document.querySelector('.tech-container');
let tech_hide = document.querySelector('.tech-repair__arrows-link--hide');
tech_open.addEventListener('click', function () {
	tech_open.style.display = 'none';
	tech_hide.style.display = 'block';
	tech_container.style.height = 'auto';
	tech_container.style.overflow = 'visible';
});
tech_hide.addEventListener('click', function () {
	tech_hide.style.display = 'none';
	tech_open.style.display = 'block';
	tech_container.style.height = '180px';
	tech_container.style.overflow = 'hidden';	
});
let brand_open = document.querySelector('.brands__link--open');
let brand_container = document.querySelector('.brands__container');
let brand_hide = document.querySelector('.brands__link--hide');
brand_open.addEventListener('click', function () {
	brand_open.style.display = 'none';
	brand_hide.style.display = 'block';
	brand_container.style.height = 'auto';
	brand_container.style.overflow = 'visible';
});
brand_hide.addEventListener('click', function () {
	brand_hide.style.display = 'none';
	brand_open.style.display = 'block';
	brand_container.style.height = '176px';
	brand_container.style.overflow = 'hidden';	
});

