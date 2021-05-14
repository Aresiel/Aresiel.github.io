
/*******************************************************************/
/* See README.md for more informations about the TypeWriter Object */
/*******************************************************************/

function TypeWriter(elmt) {
	this.elmt = elmt;
	this.selector = $(elmt);
	this.linesToDisplay = [
		'Hello, this is my website.',
		'I made it like this because it requires little to no effort and there was a handy JQuery plugin to use for the text.',
		'My tag on Discord is "Aresiel#0666".',
		"There is an dialogue which will appear if you press enter but I didn't put anything special in it.",
		"This is on Github pages btw, so the repo is <a href='https://github.com/Aresiel/Aresiel.github.io/'>here</a>."
	];
	this.firstDelay = 1000;
	this.typingDelay = 45;
	this.afterLineDelay = 500;
	this.endTimeOut = 1000;
	this.endText = "There isn't any more content...";
}

TypeWriter.prototype.typeIt = function(selector, text, n) {
	var that = this;

	if (n < (text.length)) {
		$(that.elmt + ' ' + selector).html(text.substring(0, n + 1));
		n++;
		setTimeout(function() {
			that.typeIt(selector, text, n);
		}, that.typingDelay);
	} else {
		$.event.trigger("TypeWriter:linedisplayed");
	}
};

TypeWriter.prototype.appendTypeWriterItem = function(...args) {
	switch (args.length) {
		case 0:
			this.selector.append(
				"<span class='typewriter-item'>"
			);
			break;
		case 1:
			this.selector.append(
				"<span class='typewriter-item' data-text='" + args[0] + "'>"
			);
			break;
		default:
			break;
	}
};

TypeWriter.prototype.start = function() {
	var that = this;
	var i = 0;

	that.appendTypeWriterItem(that.linesToDisplay[i]);

	setTimeout(function() {
		that.typeIt('span.typewriter-item', that.linesToDisplay[i], 0);
	}, that.firstDelay);

	$(window).on('TypeWriter:linedisplayed', function() {
		i++;

		if (i < that.linesToDisplay.length) {
			that.appendTypeWriterItem(that.linesToDisplay[i]);
			setTimeout(function() {
				that.typeIt('span.typewriter-item:last-child', that.linesToDisplay[i], 0);
			}, that.afterLineDelay);
		} else
			that.appendTypeWriterItem();

		if (i === that.linesToDisplay.length)
			$.event.trigger("TypeWriter:finished");
	});

	$(window).on('TypeWriter:finished', function() {
		$(window).on('keypress', function(e) {
			if (e.keyCode == 13) {
				$(that.elmt).append("<span id='init'>" + that.endText);
				setTimeout(function() {
					//$(that.elmt).fadeOut("slow");
				}, that.endTimeOut);
			}
		});
	});
};