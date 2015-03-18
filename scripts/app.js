(function($) {
	//Angular
	var app = angular.module('app', []);

	app.controller('sliderController', function(){
		this.cat = phones;
	});
	app.controller('phonesList', function(){
		this.list = phones;
	});

	app.controller('sellController', function(){
		this.i = 0;
	});

	//Data
	var phones = [
		{
			code : 'SKU 06-A0062',
			url  : "http://example.com/",
			title: "Samsung Mini",
			img  : "media/phone1.jpg",
			price: 393,
			save : 94
		},
		{
			code : 'SKU 06-A0083',
			url  : "http://example.com/",
			title: "iPhone 5",
			img  : "media/phone2.jpg",
			price: 138,
			save : 49
		},
		{
			code : 'SKU 06-A0086',
			url  : "http://example.com/",
			title: "Facebook Phone",
			img  : "media/phone3.jpg",
			price: 294,
			save : 45
		},
		{
			code : 'SKU 06-A0103',
			url  : "http://example.com/",
			title: "Moto Indestructo",
			img  : "media/phone4.jpg",
			price: 99,
			save : 0
		},
		{
			code : 'SKU 06-A0123',
			url  : "http://example.com/",
			title: "Nokia 2014",
			img  : "media/phone5.jpg",
			price: 299,
			save : 0
		},
		{
			code : 'SKU 06-A0152',
			url  : "http://example.com/",
			title: "Motorola Razr 2",
			img  : "media/phone6.jpg",
			price: 149,
			save : 0
		},
		{
			code : 'SKU 06-A0060',
			url  : "http://example.com/",
			title: "Iphone 4s",
			img  : "media/phone7.jpg",
			price: 1499,
			save : 500
		},
		{
			code : 'SKU 06-A0076',
			url  : "http://example.com/",
			title: "iPhone 5",
			img  : "media/phone8.jpg",
			price: 590,
			save : 0
		},
		{
			code : 'SKU 60-A0077',
			url  : "http://example.com/",
			title: "Kindle Tablet",
			img  : "media/phone9.jpg",
			price: 299,
			save : 70
		},
		{
			code : 'SKU 06-A0078',
			url  : "http://example.com/",
			title: "Motorola Tablet 2015",
			img  : "media/phone10.jpg",
			price: 795,
			save : 96
		},
		{
			code : 'SKU 06-A0082',
			url  : "http://example.com/",
			title: "Hipster Tablet",
			img  : "media/phone11.jpg",
			price: 494,
			save : 95
		},
		{
			code : 'SKU 06-A0067',
			url  : "http://example.com/",
			title: "Hipster Tablet 2",
			img  : "media/phone12.jpg",
			price: 199,
			save : 50
		},
		{
			code : 'SKU 06-A0055',
			url  : "http://example.com/",
			title: "Web Developers Tab 2",
			img  : "media/phone13.jpg",
			price: 497,
			save : 298
		},
		{
			code : 'SKU 06-A0072',
			url  : "http://example.com/",
			title: "Mac Tab 2016",
			img  : "media/phone14.jpg",
			price: 299,
			save : 150
		},

	];

	//Event
	$('.menuicon').click(function(){
		$(this).fadeOut(2000);
		$('.menulist').animate({
			left: '0px'
		}, 1500);
		$('body').animate({
			left: '300px'
		}, 1500);
		$('.navbar-fixed-bottom').velocity({
			bottom: '-40%'
		},{
			duration: '1500'
		});
	});

	$('.icon-close').click(function(){
		$('.menulist').animate({
			left: '-300px'
		}, 1500);
		$('body').animate({
			left: '0px'
		}, 1500);
		$('.navbar-fixed-bottom').velocity({
			bottom: '0px'
		},{
			duration: '1500'
		});
		$('.menuicon').fadeIn(2000);
	});

	$('.owl-carousel').owlCarousel({
		items: 1,
		autoWith: true,
		loop: true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true
	});

	$('.models').click(function(){
		$('#main').fadeOut(400);
		$('#models').fadeIn(400);
	});

	$('.back').click(function(){
		$('#models, #contact').fadeOut(400);
		$('#main').fadeIn(400);
	});

	$('.contact').click(function(){
		$('#main').fadeOut(400);
		$('#contact').fadeIn(400);
	});
})(jQuery);