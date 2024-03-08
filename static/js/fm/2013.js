class Fm2013 {
	init() {
		var self = this;

		this.checkAttrInputs();
		this.recountAttr();
		this.setAttrColors();

		$('table.attribute input').on('change', function () {
			self.checkAttrInputs();
			self.recountAttr();
		});

		$('.result.training a').on('click', function () {
			var $this = $(this);

			if ($this.hasClass('underline')) {
				window.location.hash = '';
				return false;
			}
		});

		$(window).on('hashchange', function () {
			self.setAttrColors();
		});
	}

	checkAttrInputs() {
		$('table.attribute input').each(function () {
			var $this = $(this);

			if (!$this.val()) {
				$this.val(10);
			}

			if (isNaN($this.val())) {
				$this.val(10);
			}

			if ($this.val() < 1) {
				$this.val(1);
			}

			if ($this.val() > 20) {
				$this.val(20);
			}
		});
	}

	recountAttr() {
		var discipline = parseInt($('.attribute .discipline input').val()),
			determination = parseInt(
				$('.attribute .determination input').val(),
			),
			motivation = parseInt($('.attribute .motivation input').val()),
			fitness = parseInt($('.attribute .fitness input').val()),
			goalkeepers = parseInt($('.attribute .goalkeepers input').val()),
			tactical = parseInt($('.attribute .tactical input').val()),
			technical = parseInt($('.attribute .technical input').val()),
			mental = parseInt($('.attribute .mental input').val()),
			defending = parseInt($('.attribute .defending input').val()),
			attacking = parseInt($('.attribute .attacking input').val());

		$('.result .strength .star').text(
			this.getStarAmount(
				this.getCoachScore(
					discipline * 2 +
						motivation * 2 +
						fitness * 9 +
						determination * 2,
					300,
				),
			),
		);
		$('.result .aerobic .star').text(
			this.getStarAmount(
				this.getCoachScore(
					discipline * 2 +
						motivation * 2 +
						fitness * 9 +
						determination * 2,
					300,
				),
			),
		);
		$('.result .tactics .star').text(
			this.getStarAmount(
				this.getCoachScore(
					discipline * 1 +
						motivation * 1 +
						determination * 1 +
						tactical * 2,
					100,
				),
			),
		);
		$('.result .ball-control .star').text(
			this.getStarAmount(
				this.getCoachScore(
					discipline * 2 +
						motivation * 2 +
						mental * 3 +
						determination * 2 +
						technical * 6,
					300,
				),
			),
		);
		$('.result .defending .star').text(
			this.getStarAmount(
				this.getCoachScore(
					defending * 8 +
						discipline * 3 +
						motivation * 3 +
						determination * 3 +
						tactical * 3,
					400,
				),
			),
		);
		$('.result .attacking .star').text(
			this.getStarAmount(
				this.getCoachScore(
					attacking * 6 +
						discipline * 2 +
						determination * 2 +
						tactical * 3,
					300,
				),
			),
		);
		$('.result .shooting .star').text(
			this.getStarAmount(
				this.getCoachScore(
					attacking * 3 +
						discipline * 2 +
						motivation * 2 +
						determination * 2 +
						technical * 6,
					300,
				),
			),
		);
		$('.result .shot-stopping .star').text(
			this.getStarAmount(
				this.getCoachScore(
					discipline * 1 +
						goalkeepers * 2 +
						motivation * 1 +
						determination * 1,
					100,
				),
			),
		);
		$('.result .handling .star').text(
			this.getStarAmount(
				this.getCoachScore(
					discipline * 1 +
						goalkeepers * 2 +
						motivation * 1 +
						determination * 1,
					100,
				),
			),
		);
	}

	setAttrColors() {
		/* Set colors for training table */
		var strengthTraining = $('.training .strength .color'),
			aerobicTraining = $('.training .aerobic .color'),
			tacticsTraining = $('.training .tactics .color'),
			ballControlTraining = $('.training .ball-control .color'),
			defendingTraining = $('.training .defending .color'),
			attackingTraining = $('.training .attacking .color'),
			shootingTraining = $('.training .shooting .color'),
			shotStoppingTraining = $('.training .shot-stopping .color'),
			handlingTraining = $('.training .handling .color');

		strengthTraining.css(
			'background-color',
			'#' + strengthTraining.data('color'),
		);
		aerobicTraining.css(
			'background-color',
			'#' + aerobicTraining.data('color'),
		);
		tacticsTraining.css(
			'background-color',
			'#' + tacticsTraining.data('color'),
		);
		ballControlTraining.css(
			'background-color',
			'#' + ballControlTraining.data('color'),
		);
		defendingTraining.css(
			'background-color',
			'#' + defendingTraining.data('color'),
		);
		attackingTraining.css(
			'background-color',
			'#' + attackingTraining.data('color'),
		);
		shootingTraining.css(
			'background-color',
			'#' + shootingTraining.data('color'),
		);
		shotStoppingTraining.css(
			'background-color',
			'#' + shotStoppingTraining.data('color'),
		);
		handlingTraining.css(
			'background-color',
			'#' + handlingTraining.data('color'),
		);

		/* Set colors for attribute table */
		var disciplineAttr = $('.attribute .discipline'),
			determinationAttr = $('.attribute .determination'),
			motivationAttr = $('.attribute .motivation'),
			fitnessAttr = $('.attribute .fitness'),
			goalkeepersAttr = $('.attribute .goalkeepers'),
			tacticalAttr = $('.attribute .tactical'),
			technicalAttr = $('.attribute .technical'),
			mentalAttr = $('.attribute .mental'),
			defendingAttr = $('.attribute .defending'),
			attackingAttr = $('.attribute .attacking');

		/* Reset colors for attribute table */
		disciplineAttr.css('background-color', '#FFFFFF');
		determinationAttr.css('background-color', '#FFFFFF');
		motivationAttr.css('background-color', '#FFFFFF');
		fitnessAttr.css('background-color', '#FFFFFF');
		goalkeepersAttr.css('background-color', '#FFFFFF');
		tacticalAttr.css('background-color', '#FFFFFF');
		technicalAttr.css('background-color', '#FFFFFF');
		mentalAttr.css('background-color', '#FFFFFF');
		defendingAttr.css('background-color', '#FFFFFF');
		attackingAttr.css('background-color', '#FFFFFF');

		$('.training a').removeClass('underline');

		/* Color is by hash */
		if (window.location.hash) {
			var hash = window.location.hash.substring(1),
				color = '';

			if (hash === 'strength') {
				color = '#' + strengthTraining.data('color');

				fitnessAttr.css('background-color', color);
			} else if (hash === 'aerobic') {
				color = '#' + aerobicTraining.data('color');

				fitnessAttr.css('background-color', color);
			} else if (hash === 'tactics') {
				color = '#' + tacticsTraining.data('color');

				tacticalAttr.css('background-color', color);
			} else if (hash === 'ball-control') {
				color = '#' + ballControlTraining.data('color');

				technicalAttr.css('background-color', color);
				mentalAttr.css('background-color', color);
			} else if (hash === 'defending') {
				color = '#' + defendingTraining.data('color');

				defendingAttr.css('background-color', color);
				tacticalAttr.css('background-color', color);
			} else if (hash === 'attacking') {
				color = '#' + attackingTraining.data('color');

				attackingAttr.css('background-color', color);
				tacticalAttr.css('background-color', color);
			} else if (hash === 'shooting') {
				color = '#' + shootingTraining.data('color');

				technicalAttr.css('background-color', color);
				attackingAttr.css('background-color', color);
			} else if (hash === 'shot-stopping') {
				color = '#' + shotStoppingTraining.data('color');

				goalkeepersAttr.css('background-color', color);
				tacticalAttr.css('background-color', color);
			} else if (hash === 'handling') {
				color = '#' + handlingTraining.data('color');

				goalkeepersAttr.css('background-color', color);
				technicalAttr.css('background-color', color);
			}

			if (color) {
				disciplineAttr.css('background-color', color);
				determinationAttr.css('background-color', color);
				motivationAttr.css('background-color', color);

				$('.training a[href=#' + hash + ']').addClass('underline');
			}
		}
	}

	getCoachScore(value, maxValue) {
		return Math.floor((value / maxValue) * 100);
	}

	getStarAmount(number) {
		var result;

		switch (true) {
			case number >= 5 && number <= 9:
				result = 0.5;
				break;
			case number >= 10 && number <= 19:
				result = 1;
				break;
			case number >= 20 && number <= 29:
				result = 1.5;
				break;
			case number >= 30 && number <= 39:
				result = 2;
				break;
			case number >= 40 && number <= 49:
				result = 2.5;
				break;
			case number >= 50 && number <= 59:
				result = 3;
				break;
			case number >= 60 && number <= 69:
				result = 3.5;
				break;
			case number >= 70 && number <= 79:
				result = 4;
				break;
			case number >= 80 && number <= 89:
				result = 4.5;
				break;
			case number >= 90:
				result = 5;
				break;
			default:
				result = 0;
				break;
		}

		return result;
	}
}

let Fmko = (window.Fmko = window.Fmko || {});
Fmko.Fm2013 = Fmko.Fm2013 || new Fm2013();
