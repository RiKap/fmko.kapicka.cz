class Fm2014 {
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
			this.getLowerNumber(
				this.roundHalf(
					(fitness * 9 +
						(discipline + determination + motivation) * 2) /
						60,
				) + 0.5,
				5,
			),
		);
		$('.result .aerobic .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(fitness * 9 +
						(discipline + determination + motivation) * 2) /
						60,
				) + 0.5,
				5,
			),
		);
		$('.result .tactics .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(tactical * 2 +
						(discipline + determination + motivation) * 1) /
						20,
				) + 0.5,
				5,
			),
		);
		$('.result .ball-control .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(technical * 6 +
						mental * 3 +
						(discipline + determination + motivation) * 2) /
						60,
				) + 0.5,
				5,
			),
		);
		$('.result .defending .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(defending * 8 +
						tactical * 3 +
						(discipline + determination + motivation) * 3) /
						80,
				) + 0.5,
				5,
			),
		);
		$('.result .attacking .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(attacking * 6 +
						tactical * 3 +
						(discipline + determination + motivation) * 2) /
						60,
				) + 0.5,
				5,
			),
		);
		$('.result .shooting .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(technical * 6 +
						attacking * 3 +
						(discipline + determination + motivation) * 2) /
						60,
				) + 0.5,
				5,
			),
		);
		$('.result .shot-stopping .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(goalkeepers * 8 +
						tactical * 3 +
						(discipline + determination + motivation) * 3) /
						80,
				) + 0.5,
				5,
			),
		);
		$('.result .handling .star').text(
			this.getLowerNumber(
				this.roundHalf(
					(goalkeepers * 8 +
						technical * 3 +
						(discipline + determination + motivation) * 3) /
						80,
				) + 0.5,
				5,
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

	roundHalf(number) {
		return Math.floor(number * 2) / 2;
	}

	getLowerNumber(number1, number2) {
		return number1 < number2 ? number1 : number2;
	}
}

let Fmko = (window.Fmko = window.Fmko || {});
Fmko.Fm2014 = Fmko.Fm2014 || new Fm2014();
