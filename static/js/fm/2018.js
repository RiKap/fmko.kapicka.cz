class Fm2018 {
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
			tactical = parseInt($('.attribute .tactical input').val()),
			technical = parseInt($('.attribute .technical input').val()),
			mental = parseInt($('.attribute .mental input').val()),
			defending = parseInt($('.attribute .defending input').val()),
			attacking = parseInt($('.attribute .attacking input').val()),
			gk_distribution = parseInt(
				$('.attribute .gk-distribution input').val(),
			),
			gk_handling = parseInt($('.attribute .gk-handling input').val()),
			gk_shot_stopping = parseInt(
				$('.attribute .gk-shot-stopping input').val(),
			);

		var total_fitness = discipline + determination + motivation;

		$('.result .strength .star').text(
			this.getStarAmount(fitness * 9 + total_fitness * 2),
		);
		$('.result .aerobic .star').text(
			this.getStarAmount(fitness * 9 + total_fitness * 2),
		);
		$('.result .tactics .star').text(
			this.getStarAmount(tactical * 6 + mental * 3 + total_fitness * 2),
		);
		$('.result .ball-control .star').text(
			this.getStarAmount(technical * 6 + mental * 3 + total_fitness * 2),
		);
		$('.result .defending .star').text(
			this.getStarAmount(
				defending * 6 + tactical * 3 + total_fitness * 2,
			),
		);
		$('.result .attacking .star').text(
			this.getStarAmount(
				attacking * 6 + tactical * 3 + total_fitness * 2,
			),
		);
		$('.result .shooting .star').text(
			this.getStarAmount(
				technical * 6 + attacking * 3 + total_fitness * 2,
			),
		);
		$('.result .gk-distribution .star').text(
			this.getStarAmount(gk_distribution * 9 + total_fitness * 2),
		);
		$('.result .gk-handling .star').text(
			this.getStarAmount(gk_handling * 9 + total_fitness * 2),
		);
		$('.result .gk-shot-stopping .star').text(
			this.getStarAmount(gk_shot_stopping * 9 + total_fitness * 2),
		);
	}

	setAttrColors() {
		$('table.training > tbody > tr').each(function () {
			var $this = $(this).find('td.color').stop();

			$this.css('background-color', '#' + $this.data('color'));
		});

		$('table.attribute > tbody > tr').each(function () {
			var $this = $(this);

			$this.css('background-color', '#FFFFFF');
		});

		$('.training a').removeClass('underline');

		var strengthTraining = $('.training .strength .color'),
			aerobicTraining = $('.training .aerobic .color'),
			tacticsTraining = $('.training .tactics .color'),
			ballControlTraining = $('.training .ball-control .color'),
			defendingTraining = $('.training .defending .color'),
			attackingTraining = $('.training .attacking .color'),
			shootingTraining = $('.training .shooting .color'),
			shotStoppingTraining = $('.training .shot-stopping .color'),
			handlingTraining = $('.training .handling .color'),
			gkDistributionTraining = $('.training .gk-distribution .color'),
			gkHandlingTraining = $('.training .gk-handling .color'),
			gkShotStoppingTraining = $('.training .gk-shot-stopping .color');

		var disciplineAttr = $('.attribute .discipline'),
			determinationAttr = $('.attribute .determination'),
			motivationAttr = $('.attribute .motivation'),
			fitnessAttr = $('.attribute .fitness'),
			tacticalAttr = $('.attribute .tactical'),
			technicalAttr = $('.attribute .technical'),
			mentalAttr = $('.attribute .mental'),
			defendingAttr = $('.attribute .defending'),
			attackingAttr = $('.attribute .attacking'),
			gkDistributionAttr = $('.attribute .gk-distribution'),
			gkHandlingAttr = $('.attribute .gk-handling'),
			gkShotStoppingAttr = $('.attribute .gk-shot-stopping');

		/* Color is set by hash */
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
				mentalAttr.css('background-color', color);
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
			} else if (hash === 'gk-distribution') {
				color = '#' + gkDistributionTraining.data('color');

				gkDistributionAttr.css('background-color', color);
			} else if (hash === 'gk-handling') {
				color = '#' + gkHandlingTraining.data('color');

				gkHandlingAttr.css('background-color', color);
			} else if (hash === 'gk-shot-stopping') {
				color = '#' + gkShotStoppingTraining.data('color');

				gkShotStoppingAttr.css('background-color', color);
			}

			if (color) {
				disciplineAttr.css('background-color', color);
				determinationAttr.css('background-color', color);
				motivationAttr.css('background-color', color);

				$('.training a[href=#' + hash + ']').addClass('underline');
			}
		}
	}

	getStarAmount(value) {
		if (value >= 270) {
			return 5;
		} else if (value >= 240) {
			return 4.5;
		} else if (value >= 210) {
			return 4;
		} else if (value >= 180) {
			return 3.5;
		} else if (value >= 150) {
			return 3;
		} else if (value >= 120) {
			return 2.5;
		} else if (value >= 90) {
			return 2;
		} else if (value >= 60) {
			return 1.5;
		} else if (value >= 30) {
			return 1;
		} else {
			return 0.5;
		}
	}
}

let Fmko = (window.Fmko = window.Fmko || {});
Fmko.Fm2018 = Fmko.Fm2018 || new Fm2018();
