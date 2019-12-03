
/*let a = document.querySeletor('.tech-container');
let main_text = document.querySelector('.main-text');
let link_hide = document.querySelector('.link-hide');
a.addEventListener('click', function(){
	/*link_more.style.display = 'none';
	link_hide.style.display = 'block';
	main_text.style.height = 'auto';
	main_text.style.overflow = 'visible';
	alert('fghj');
});
link_hide.addEventListener('click', function(){
	alert ('1');

});

let a = document.querySeletor('.main-title');
a.addEventListener('click', function(){
	alert('34');

});*/




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
	brand_container.style.height = '156px';
	brand_container.style.backgroundColor = 'green';
	brand_container.style.overflow = 'hidden';	
});
let b = document.querySelector('.btn-call');
let a = document.querySelector('.main-menu__phone');
let c = document.querySelector('.callback-modal');
let d = document.querySelector('.primary-btn--close');
a.addEventListener('click', function(){
	console.log('89');
	c.style.display = 'block';
});
b.addEventListener('click', function(){
	console.log('88');
	c.style.display = 'block';
});
d.addEventListener('click', function(){
	console.log('87');
	c.style.display = 'none';
});


