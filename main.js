$(function() {
	
	//Intiate controller
		
		var controller = new ScrollMagic.Controller();

	//==============================================================================================//

	//Pin container for whole duration of show
		
		var WholeScene = new ScrollMagic.Scene({
			triggerElement: '#container',
			duration: 1000
		})
		.setPin('#container')
		.addIndicators()
		.addTo(controller);

	//==============================================================================================//

	//SCENE ONE - Intro and understanding people

		//Entrance SCENE

			//DEFINE Tweens here

				var personIN = new TweenMax.to('#person', 0.3, {
					marginLeft: '30vw'
				});

			//ADD ALL TWEENS TO THE TIMELINE 

				var sc1IN = new TimelineMax()
					.add([personIN]);

			//Scene here, add timeline and tweens here

				var introSceneIN = new ScrollMagic.Scene({
					triggerElement: '#container',
					duration: 200
				})
				.setTween(sc1IN)
				.addIndicators()
				.addTo(controller);

		//Exit SCENE

			//DEFINE ALL TWEENS

				var personOUT = new TweenMax.to('#person', 0.3, {
					marginLeft: '-100px'
				});

				var understandOUT = new TweenMax.to('#understand', 0.3, {
					height: '0px'
				});

			//ADD ALL TWEENS TO THE TIMELINE
 				var sc1out = new TimelineMax()
					.add([personOUT, understandOUT]);

			//ADD TIMELINE AND TWEENS TO THE SCENE

				var introSceneOUT = new ScrollMagic.Scene({
					triggerElement: '#container',
					duration: 200
				})
				.offset(250)
				.setTween(sc1out)
				.addIndicators()
				.addTo(controller);

	//==============================================================================================//

	//SCENE TWO - INSIGHTS

		//Entrance SCENE

			//DEFINE Tweens here

				var person2IN = new TweenMax.to('#person', 0.3, {
					marginLeft: '30vw'
				});

				var insightIN = new TweenMax.to('#understand', 0.3, {
					height: '20vh'
				});

			//ADD ALL TWEENS TO THE TIMELINE 

				var sc2IN = new TimelineMax()
					.add([person2IN, insightIN]);

			//Scene here, add timeline and tweens here

				var insightSceneIN = new ScrollMagic.Scene({
					triggerElement: '#container',
					duration: 200
				})
				.offset(450)
				.setTween(sc2IN)
				.addIndicators()
				.addTo(controller);

		//Exit SCENE

			//DEFINE ALL TWEENS

				var person2OUT = new TweenMax.to('#person', 0.3, {
					marginLeft: '-100px'
				});

				var insightOUT = new TweenMax.to('#understand', 0.3, {
					height: '0px'
				});

			//ADD ALL TWEENS TO THE TIMELINE

				var sc2out = new TimelineMax()
					.add([person2OUT, insightOUT]);

			//ADD TIMELINE AND TWEENS TO THE SCENE

				var introSceneOUT = new ScrollMagic.Scene({
					triggerElement: '#container',
					duration: 200
				})
				.offset(650)
				.setTween(sc2out)
				.addIndicators()
				.addTo(controller);

	//==============================================================================================//

});

