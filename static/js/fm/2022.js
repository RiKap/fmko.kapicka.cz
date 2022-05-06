class Fm2022
{

	init()
	{
		var self = this;

		this.checkAttrInputs();
		this.recountAttr();
		this.setAttrColors();

		$('table.attribute input').on('change keyup', function() {
			self.checkAttrInputs();
			self.recountAttr();
		});

		$('.result.training a').on('click', function() {
			var $this = $(this);

			if ($this.hasClass('underline')) {
				window.location.hash = '';
				return false;
			}
		});

		$(window).on('hashchange', function() {
			self.setAttrColors();
		});
	}


	checkAttrInputs()
	{
		$('table.attribute input').each(function() {
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


	recountAttr()
	{
		var discipline = parseInt($('.attribute .discipline input').val()),
			determination = parseInt($('.attribute .determination input').val()),
			motivation = parseInt($('.attribute .motivation input').val()),
			fitness = parseInt($('.attribute .fitness input').val()),
			tactical = parseInt($('.attribute .tactical input').val()),
			technical = parseInt($('.attribute .technical input').val()),
			mental = parseInt($('.attribute .mental input').val()),
			defending = parseInt($('.attribute .defending input').val()),
			attacking = parseInt($('.attribute .attacking input').val()),
			goalkeepingDistribution = parseInt($('.attribute .goalkeepingDistribution input').val()),
			goalkeepingHandling = parseInt($('.attribute .goalkeepingHandling input').val()),
			goalkeepingShots = parseInt($('.attribute .goalkeepingShots input').val());

		var ddm = discipline + determination + motivation;

		$('.training .defendingTechnical .star').text(this.getStarAmount(defending*6 + technical*3 + ddm*2));
		$('.training .defendingTactical .star').text(this.getStarAmount(defending*6 + tactical*3 + ddm*2));
		$('.training .possessionTechnical .star').text(this.getStarAmount(mental*6 + technical*3 + ddm*2));
		$('.training .possessionTactical .star').text(this.getStarAmount(mental*6 + tactical*3 + ddm*2));
		$('.training .attackingTechnical .star').text(this.getStarAmount(attacking*6 + technical*3 + ddm*2));
		$('.training .attackingTactical .star').text(this.getStarAmount(attacking*6 + tactical*3 + ddm*2));
		$('.training .goalkeepingShots .star').text(this.getStarAmount(goalkeepingShots*9 + ddm*2));
		$('.training .goalkeepingHd .star').text(this.getStarAmount(goalkeepingHandling*6 + goalkeepingDistribution*3 + ddm*2));
		$('.training .fitnessStrength .star').text(this.getStarAmount(fitness*9 + ddm*2));
		$('.training .fitnessQuickness .star').text(this.getStarAmount(fitness*9 + ddm*2));
	}


	setAttrColors()
	{
		$('table.training > tbody > tr').each(function() {
			var $this = $(this).find('td.color').stop();

			$this.css('background-color', '#' + $this.data('color'));
		});

		$('table.attribute > tbody > tr > td').each(function() {
			var $this = $(this);

			$this.css('background-color', '#FFFFFF');
		});

		$('.training a').removeClass('underline');

		var defendingTechnicalTraining = $('.training .defendingTechnical .color'),
			defendingTacticalTraining = $('.training .defendingTactical .color'),
			possessionTechnicalTraining = $('.training .possessionTechnical .color'),
			possessionTacticalTraining = $('.training .possessionTactical .color'),
			attackingTechnicalTraining = $('.training .attackingTechnical .color'),
			attackingTacticalTraining = $('.training .attackingTactical .color'),
			goalkeepingShotsTraining = $('.training .goalkeepingShots .color'),
			goalkeepingHdTraining = $('.training .goalkeepingHd .color'),
			fitnessStrengthTraining = $('.training .fitnessStrength .color'),
			fitnessQuicknessTraining = $('.training .fitnessQuickness .color');

		var disciplineAttr = $('.attribute .discipline td'),
			determinationAttr = $('.attribute .determination td'),
			motivationAttr = $('.attribute .motivation td'),
			fitnessAttr = $('.attribute .fitness td'),
			technicalAttr = $('.attribute .technical td'),
			tacticalAttr = $('.attribute .tactical td'),
			mentalAttr = $('.attribute .mental td'),
			defendingAttr = $('.attribute .defending td'),
			attackingAttr = $('.attribute .attacking td'),
			goalkeepingDistributionAttr = $('.attribute .goalkeepingDistribution td'),
			goalkeepingHandlingAttr = $('.attribute .goalkeepingHandling td'),
			goalkeepingShotsAttr = $('.attribute .goalkeepingShots td');

		/* Color is set by hash */
		if (window.location.hash) {
			var hash = window.location.hash.substring(1),
				color = '';

			if (hash === 'defendingTechnical') {

				color = ('#' + defendingTechnicalTraining.data('color'));

				defendingAttr.css('background-color', color);
				technicalAttr.css('background-color', color);

			} else if (hash === 'defendingTactical') {

				color = ('#' + defendingTacticalTraining.data('color'));

				defendingAttr.css('background-color', color);
				tacticalAttr.css('background-color', color);

			} else if (hash === 'possessionTechnical') {

				color = ('#' + possessionTechnicalTraining.data('color'));

				mentalAttr.css('background-color', color);
				technicalAttr.css('background-color', color);

			} else if (hash === 'possessionTactical') {

				color = ('#' + possessionTacticalTraining.data('color'));

				mentalAttr.css('background-color', color);
				tacticalAttr.css('background-color', color);

			} else if (hash === 'attackingTechnical') {

				color = ('#' + attackingTechnicalTraining.data('color'));

				attackingAttr.css('background-color', color);
				technicalAttr.css('background-color', color);

			} else if (hash === 'attackingTactical') {

				color = ('#' + attackingTacticalTraining.data('color'));

				attackingAttr.css('background-color', color);
				tacticalAttr.css('background-color', color);

			} else if (hash === 'goalkeepingShots') {

				color = ('#' + goalkeepingShotsTraining.data('color'));

				goalkeepingShotsAttr.css('background-color', color);

			} else if (hash === 'goalkeepingHd') {

				color = ('#' + goalkeepingHdTraining.data('color'));

				goalkeepingDistributionAttr.css('background-color', color);
				goalkeepingHandlingAttr.css('background-color', color);

			} else if (hash === 'fitnessStrength') {

				color = ('#' + fitnessStrengthTraining.data('color'));

				fitnessAttr.css('background-color', color);

			} else if (hash === 'fitnessQuickness') {

				color = ('#' + fitnessQuicknessTraining.data('color'));

				fitnessAttr.css('background-color', color);

			}

			if (color) {
				disciplineAttr.css('background-color', color);
				determinationAttr.css('background-color', color);
				motivationAttr.css('background-color', color);

				$('.training a[href=#' + hash + ']').addClass('underline');
			}
		}
	}


	getStarAmount(value)
	{
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
