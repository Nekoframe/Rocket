$(document).ready(function(){




	// Init ScrollMagic
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 1
		}
	});



var w_height = $(window).innerHeight();





	
	// fade out #main_container text
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#main_container", 
		duration: '80%',
		// offset: w_height+(0.1*w_height)
	})
	.setClassToggle('#main_container .text_wrapper', 'fade-out') // add class to text_wrapper
	/*.addIndicators({
		name: 'text fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 1000
	})*/ // this request a plugin
	.addTo(controller);




	
	// parallax scrolling #start
	var tween = new TimelineMax ()
		.add([
			TweenMax.to("#start", 1, {backgroundPosition: "0 50%", ease: Linear.easeNone})
		]);

	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#start",
		triggerHook: 0.5,
		duration: '110%',
		offset: w_height
	})
	.setTween(tween)
	.setPin("#start")
	/*.addIndicators({
		name: 'parallax scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 700
	})*/ // add indicators (requires plugin)
	.addTo(controller);




	// parallax scrolling #space
	var tween = new TimelineMax ()
		.add([
			TweenMax.to("#space", 1, {backgroundPosition: "0 50%", ease: Linear.easeNone})
		]);

	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#space",
		triggerHook: 0.5,
		duration: '56%', /*50%*/
		offset: w_height
	})
	.setTween(tween)
	.setPin("#space")
	/*.addIndicators({
		name: 'parallax scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 700
	})*/ // add indicators (requires plugin)
	.addTo(controller);




	// parallax scrolling #meteor
	var tween = new TimelineMax ()
		.add([
			TweenMax.to("#meteor", 1, {backgroundPosition: "0 50%", ease: Linear.easeNone})
		]);

	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#meteor",
		triggerHook: 0.5,
		duration: '150%',
		offset: w_height
	})
	.setTween(tween)
	.setPin("#meteor")
	/*.addIndicators({
		name: 'parallax scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 700
	})*/ // add indicators (requires plugin)
	.addTo(controller);


	// parallax scrolling #planet
	var tween = new TimelineMax ()
		.add([
			TweenMax.to("#planet", 1, {backgroundPosition: "0 50%", ease: Linear.easeNone})
		]);

	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#planet",
		triggerHook: 0.5,
		duration: '300%',
		offset: w_height
	})
	.setTween(tween)
	.setPin("#planet")
	/*.addIndicators({
		name: 'parallax scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 700
	})*/ // add indicators (requires plugin)
	.addTo(controller);




	// define images
	var images = [
		"img/number1.png",
		"img/number2.png",
		"img/number3.png"
	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5, /*0.5*/
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same amount of time
			onUpdate: function () {
			  $("#img_sequence").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);


	// build scene for number
	var scene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '70%', /*30*/
		offset: w_height+(0.2*w_height) /*w_height+(0.2*w_height)*/
	})
	.setTween(tween)
	/*.addIndicators({
		name: 'number scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 600
	})*/
	.addTo(controller);



	// fade out number
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '90%', /*45*/
		offset: w_height+(0.1*w_height) /*0.1*/
	})
	.setClassToggle('#number_wrapper', 'fade-in') // add class to number_wrapper
	/*.addIndicators({
		name: 'number fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 500
	})*/ // this request a plugin
	.addTo(controller);


	// fade out #start text
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height+(0.1*w_height)
	})
	.setClassToggle('#start .text_wrapper', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'text fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 1000
	})*/ // this request a plugin
	.addTo(controller);




	// fade out #space text
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '93%',
		offset: '100%'
	})
	.setClassToggle('#space .text_wrapper', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'space text fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 1000
	})*/ // this request a plugin
	.addTo(controller);




	// fade out #meteor text
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#meteor", 
		duration: '93%', /*93*/
		offset: w_height+(0.3*w_height) /*500*/
	})
	.setClassToggle('#meteor .text_wrapper', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'meteor text fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 1000
	})*/
	.addTo(controller);



	// fade out #planet text
	var fadein_scene = new ScrollMagic.Scene({
		triggerElement: "#planet",
		duration: '60%', /*80*/
		offset: w_height+(0.8*w_height) /*2000*/
	})
	.setClassToggle('#planet .text_wrapper', 'fade-in')
	/*.addIndicators({
		name: 'planet text fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 200
	})*/
	.addTo(controller);



	// fade out #planet text
	var fadein_scene = new ScrollMagic.Scene({
		triggerElement: "#planet",
		duration: '150%', /*230*/
		offset: (0.1*w_height) /*50*/
	})
	.setClassToggle('#planet .main_menu_wrapper', 'fade-in')
	/*.addIndicators({
		name: 'main_menu_wrapper fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 300
	})*/
	.addTo(controller);



	// fade in soil
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#planet", 
		duration: '380%', /*70%'*/
		offset: '50%' /*2500%*/
	})
	.setClassToggle('#planet .soil', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'soil fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 800
	})*/ // this request a plugin
	.addTo(controller);


	// fade in rocket2
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#planet", 
		duration: '350%', /*70%'*/
		offset: '50%' /*2300%*/
	})
	.setClassToggle('#planet .rocket2', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'rocket2 fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 800
	})*/ // this request a plugin
	.addTo(controller);




	// fade in astronaut2
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#planet", 
		duration: '300%', /*70%'*/
		offset: '50%' /*2300%*/
	})
	.setClassToggle('#planet .astronaut2', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'astronaut2 fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 800
	})*/ // this request a plugin
	.addTo(controller);



	// fade in astronaut2
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#planet", 
		duration: '280%', /*70%'*/
		offset: '50%' /*2300%*/
	})
	.setClassToggle('#planet .astronaut2', 'move-up') // add class to text_wrapper
	/*.addIndicators({
		name: 'astronaut2 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 800
	})*/ // this request a plugin
	.addTo(controller);




	// fade in flag3
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#planet", 
		duration: '250%', /*70%'*/
		offset: '50%' /*2300%*/
	})
	.setClassToggle('#planet .flag3', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'flag3 fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 800
	})*/ // this request a plugin
	.addTo(controller);




	/*var fadeout_scene = new ScrollMagic.Scene({
		triggerElement: "#meteor",
		duration: '10%',
		offset: '-5%'
	})
	.setClassToggle('#planet .main_menu_wrapper', 'fade-in')
	.addIndicators({
		name: 'planet text fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 1000
	})
	.addTo(controller);*/



	// progress bar
	var tween = TweenMax.to(".bar", 1, {className: "+=bar-increase"});

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%', /*45*/
		offset: w_height+(0.1*w_height) /*w_height+(0.1*w_height)*/
	})
	.setTween(tween)
	/*.setClassToggle('#start .bar', 'bar-increase')*/ // add class to project01
	/*.addIndicators({
		name: 'bar increase scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 1300
	})*/ // this request a plugin
	.addTo(controller);



	// progress bar
	var Bartagtween = TweenMax.to(".bar_tag", 1, {className: "+=bartag-increase"});

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '45%', 
		offset: w_height+(0.1*w_height)
	})
	.setTween(Bartagtween)
	/*.setClassToggle('#start .bar', 'bar-increase')*/ // add class to project01
	/*.addIndicators({
		name: 'bar increase scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);





	// progress tag number count
	var counter = { var: 100 };
	var tal = document.getElementById("tal");
	// var Bartagtween = TweenMax.to(".bar_tag", 1, {className: "+=bartag-increase"});
	var Counter = TweenMax.to(counter, 5, {
	      var: 63, 
	      onUpdate: function () {
	          tal.innerHTML = Math.ceil(counter.var);
	      },
	      ease:Circ.easeOut
	 });


	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '45%', 
		offset: w_height+(0.1*w_height)
	})
	.setTween(Counter)
	/*.setClassToggle('#start .bar', 'bar-increase')*/ // add class to project01
	/*.addIndicators({
		name: 'bar increase scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);






	// hide progress bar
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%', 
		offset: w_height+(0.1*w_height)
		
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.progress_bar_wrapper', 'show') // add class to progress_bar_wrapper
	/*.addIndicators({
		name: 'hide progress bar scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// hide number bar
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%', 
		offset: w_height+(0.1*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.number_bar', 'show') // add class to number_bar
	/*.addIndicators({
		name: 'number_bar move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// hide loading bar
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%', 
		offset: w_height+(0.1*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.loading_bar', 'show') // add class to loading_bar
	/*.addIndicators({
		name: 'loading_bar move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 700
	})*/ // this request a plugin
	.addTo(controller);



	



	// move rocket1
	var Rockettween = TweenMax.to(".rocket", 1, {className: "+=move-up"});

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	.setTween(Rockettween)
	// .setTween(TweenMax.to(".rocket", 1, { bottom: "+=200%" }))
	// .setPin(".rocket")
	/*.setClassToggle('.rocket', 'move-up')*/ // add class to rocket
	/*.addIndicators({
		name: 'rocket move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move m_rocket
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '180%',
		offset: w_height-(1.7*w_height)
	})
	.setClassToggle('.m_rocket', 'move-up')
	/*.addIndicators({
		name: 'm_rocket move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);



	// hide m_rocket
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '75%', /*75%*/
		offset: '80%' /*55%*/
	})
	.setClassToggle('.m_rocket', 'move-up2')
	/*.addIndicators({
		name: 'm_rocket move2 scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);




	// Smoke1 move
	// var Smoke1tween = TweenMax.to(".smoke1", 1, {className: "+=move-up"});

	var sm = new TimelineMax();
		sm.add(".smoke1", 1, {bottom: "30%"}).to(".smoke1", 1, {bottom: "-70%"});

		// sm.to(".smoke1", 1, {bottom: "-70%"}).to(".smoke1", 1, {opacity:1});
		// sm.add( TweenLite.to(".smoke1", 1, {opacity:1}) );

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.6*w_height)
	})
	// .setTween(Smoke1tween)
	.setTween(sm)
	.setClassToggle('.smoke1', 'fade-in')
	/*.addIndicators({
		name: 'smoke1 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);


	// Smoke1 fade
	// var Smoke1tween = TweenMax.to(".smoke1", 1, {className: "+=move-up"});

	/*var ourScene1 = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.6*w_height)
	})
	.setClassToggle('.smoke1', 'fade-in')
	.addIndicators({
		name: 'smoke1 fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})
	.addTo(controller);*/


	



	// move smoke1
	/*var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.6*w_height)
	})
	.setClassToggle('.smoke1', 'fade-in')
	.addIndicators({
		name: 'smoke1 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})
	.addTo(controller);*/



	// move smoke1
	/*var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.6*w_height)
	})
	.setClassToggle('.smoke1', 'move-up')
	.addIndicators({
		name: 'rocket move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})
	.addTo(controller);*/


	// move m_smoke1
	// var Smoke1tween = TweenMax.to(".smoke1", 5, {className: "+=move-up"});

	var m_ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '70%', /*80*/
		offset: w_height-(0.6*w_height) /*w_height-(0.2*w_height)*/
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.m_smoke1', 'fade-in') // add class to smoke1
	/*.addIndicators({
		name: 'm_smoke1 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);






	




	// move smoke2
	// var Smoke2tween = TweenMax.to(".smoke2", 1, {className: "+=move-up"});

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.6*w_height)
	})
	// .setTween(Smoke2tween)
	.setClassToggle('.smoke2', 'fade-in')
	/*.addIndicators({
		name: 'smoke2 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);





	// move smoke2
	// var Smoke1tween = TweenMax.to(".smoke2", 1, {className: "+=move-up"});

	var m_ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		/*duration: '80%',
		offset: w_height-(0.6*w_height)*/
		duration: '30%', /*80*/
		offset: w_height-(0.2*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.m_smoke2', 'fade-in') // add class to smoke2
	/*.addIndicators({
		name: 'm_smoke2 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// move smoke3
	var Smoke1tween = TweenMax.to(".smoke3", 1, {className: "+=move-up"});

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.6*w_height)
	})
	.setTween(Smoke1tween)
	.setClassToggle('.smoke3', 'fade-in') // add class to smoke3
	/*.addIndicators({
		name: 'smoke2 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move lightbulb
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.lightbulb', 'explode') // add class to lightbulb
	/*.addIndicators({
		name: 'lightbulb move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// move brain
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.brain', 'explode') // add class to brain
	/*.addIndicators({
		name: 'brain move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// move pencil
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height) /*0.6*/
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.pencil', 'explode') // add class to pencil
	/*.addIndicators({
		name: 'pencil move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// move text1
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.text1', 'explode') // add class to text1
	/*.addIndicators({
		name: 'text1 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// move text2
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.text2', 'explode') // add class to text2
	/*.addIndicators({
		name: 'text2 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move text3
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.text3', 'explode') // add class to text1
	/*.addIndicators({
		name: 'text3 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// move text4
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.text4', 'explode') // add class to text4
	/*.addIndicators({
		name: 'text4 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move pencil_group
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.pencil_group', 'explode') // add class to pencil_group
	/*.addIndicators({
		name: 'pencil_group move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);





	// move pencil1
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.pencil1', 'explode') // add class to pencil1
	/*.addIndicators({
		name: 'pencil1 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move pencil2
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.pencil2', 'explode') // add class to pencil2
	/*.addIndicators({
		name: 'pencil2 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move pencil3
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.pencil3', 'explode') // add class to pencil3
	/*.addIndicators({
		name: 'pencil3 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move pencil4
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.pencil4', 'explode') // add class to pencil4
	/*.addIndicators({
		name: 'pencil4 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move pencil5
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.pencil5', 'explode') // add class to pencil5
	/*.addIndicators({
		name: 'pencil5 move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);




	// move box
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.box', 'explode') // add class to box
	/*.addIndicators({
		name: 'box move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);



	// move book
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#start", 
		duration: '80%',
		offset: w_height-(0.7*w_height)
	})
	// .setTween(Smoke1tween)
	.setClassToggle('.book', 'explode') // add class to book
	/*.addIndicators({
		name: 'book move scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/ // this request a plugin
	.addTo(controller);





	





	// fade out signal
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '90%', /*90%*/
		offset: w_height-(0.6*w_height) /*w_height-(0.6*w_height)*/
	})
	.setClassToggle('.signal', 'fade-in') // add class to signal
	/*.addIndicators({
		name: 'signal fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);



	// fade out signal_green
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '70%', /*70%*/
		offset: w_height-(0.5*w_height)
	})
	.setClassToggle('.signal_green', 'fade-in') // add class to signal
	/*.addIndicators({
		name: 'signal_green fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);



	// fade out dot_green
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '70%', /*70%*/
		offset: w_height-(0.5*w_height)
	})
	.setClassToggle('.dot_green', 'fade-in') // add class to signal
	/*.addIndicators({
		name: 'dot_green fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);


	// fade out signal2
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '70%', /*70%*/
		offset: w_height-(0.65*w_height)
	})
	.setClassToggle('.signal2', 'fade-in') // add class to signal
	/*.addIndicators({
		name: 'signal fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);



	// fade in line
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '80%', /*70*/ /*140*/
		/*offset: w_height-(0.6*w_height)*/
		offset: w_height-(0.35*w_height)
	})
	.setClassToggle('.satellite_line', 'fade-in') // add class to satellite
	/*.addIndicators({
		name: 'satellite line fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);


	// fade out line
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '90%', /*90%*/
		offset: w_height-(0.6*w_height) /*w_height-(0.6*w_height)*/
	})
	.setClassToggle('.satellite_line', 'fade-out') // add class to signal
	/*.addIndicators({
		name: 'signal fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);




	// fade in satellite
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '140%', /*140*/
		offset: w_height-(0.8*w_height)
	})
	.setClassToggle('.satellite', 'fade-in') // add class to satellite
	/*.addIndicators({
		name: 'satellite fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink'
	})*/
	.addTo(controller);




	// fade out map
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#space", 
		duration: '93%',
		offset: '100%'
	})
	.setClassToggle('.map_wrapper', 'fade-in') // add class to text_wrapper
	/*.addIndicators({
		name: 'map fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 1300
	})*/ // this request a plugin
	.addTo(controller);





	// move rocket2
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#meteor", 
		duration: '150%', 
		offset: '55%'
	})
	.setClassToggle('.rocket', 'move-up2') // add class to rocket
	/*.addIndicators({
		name: 'rocket move2 scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 700
	})*/ // this request a plugin
	.addTo(controller);




	// change rocket image
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#meteor", 
		duration: '150%', 
		offset: '55%'
	})
	.setClassToggle('.rocket', 'changeimg') // add class to rocket
	/*.addIndicators({
		name: 'rocket move2 scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 700
	})*/ // this request a plugin
	.addTo(controller);



	// Barrier fade-in
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#meteor", /*meteor*/
		duration: '150%', /*150%*/ /*270*/
		offset: '800%' /*720*/
	})
	.setClassToggle('.barrier', 'fade-in')
	/*.addIndicators({
		name: 'barrier fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 300
	})*/
	.addTo(controller);



	// meteor_fall parallax
	var tween = new TimelineMax ()
		.add([
			// TweenMax.fromTo("#meteor .meteor_fall", 1, {scale: 1, autoAlpha: 1, top: '100%'}, {top: '-100%', ease: Linear.easeNone})
			TweenMax.to("#meteor .meteor_fall", 1, {backgroundPosition: "0 100%", ease: Linear.easeNone})
		]);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#meteor", /*meteor*/
		duration: '150%', /*150%*/ /*270*/
		offset: '720%' /*55*/
	})
	.setTween(tween)
	// .setClassToggle('.meteor_fall', 'fall-down')
	/*.addIndicators({
		name: 'meteor_fall fade scene',
		colorTrigger: 'black',
		ColorStart: '#75C659',
		ColorEnd: 'pink',
		indent: 300
	})*/
	.addTo(controller);





	


	




	



	








	

});


















