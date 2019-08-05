var runtime = (function(P) {
	'use strict';

	var self, S, REGISTER, STACK, C, WARP, CALLS, BASE, THREAD, IMMEDIATE, VISUAL;

	var bool = function(v) {
		return +v !== 0 && v !== '' && v !== 'false' && v !== false;
	};

	var DIGIT = /\d/;
	var compare = function(x, y) {
		if ((typeof x === 'number' || DIGIT.test(x)) && (typeof y === 'number' || DIGIT.test(y))) {
			var nx = +x;
			var ny = +y;
			if (nx === nx && ny === ny) {
				return nx < ny ? -1 : nx === ny ? 0 : 1;
			}
		}
		var xs = ('' + x).toLowerCase();
		var ys = ('' + y).toLowerCase();
		return xs < ys ? -1 : xs === ys ? 0 : 1;
	};
	var numLess = function(nx, y) {
		if (typeof y === 'number' || DIGIT.test(y)) {
			var ny = +y;
			if (ny === ny) {
				return nx < ny;
			}
		}
		var ys = ('' + y).toLowerCase();
		return '' + nx < ys;
	};
	var numGreater = function(nx, y) {
		if (typeof y === 'number' || DIGIT.test(y)) {
			var ny = +y;
			if (ny === ny) {
				return nx > ny;
			}
		}
		var ys = ('' + y).toLowerCase();
		return '' + nx > ys;
	};

	var equal = function(x, y) {
		if ((typeof x === 'number' || DIGIT.test(x)) && (typeof y === 'number' || DIGIT.test(y))) {
			var nx = +x;
			var ny = +y;
			if (nx === nx && ny === ny) {
				return nx === ny;
			}
		}
		var xs = ('' + x).toLowerCase();
		var ys = ('' + y).toLowerCase();
		return xs === ys;
	};
	var numEqual = function(nx, y) {
		if (typeof y === 'number' || DIGIT.test(y)) {
			var ny = +y;
			return ny === ny && nx === ny;
		}
		return false;
	};

	var mod = function(x, y) {
		var r = x % y;
		if (r / y < 0) {
			r += y;
		}
		return r;
	};

	var random = function(x, y) {
		x = +x || 0;
		y = +y || 0;
		if (x > y) {
			var tmp = y;
			y = x;
			x = tmp;
		}
		if (x % 1 === 0 && y % 1 === 0) {
			return Math.floor(Math.random() * (y - x + 1)) + x;
		}
		return Math.random() * (y - x) + x;
	};

	var rgb2hsl = function(rgb) {
		var r = (rgb >> 16 & 0xff) / 0xff;
		var g = (rgb >> 8 & 0xff) / 0xff;
		var b = (rgb & 0xff) / 0xff;

		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);

		if (min === max) {
			return [0, 0, r * 100];
		}

		var c = max - min;
		var l = (min + max) / 2;
		var s = c / (1 - Math.abs(2 * l - 1));

		var h;
		switch (max) {
			case r:
				h = ((g - b) / c + 6) % 6;
				break;
			case g:
				h = (b - r) / c + 2;
				break;
			case b:
				h = (r - g) / c + 4;
				break;
		}
		h *= 60;

		return [h, s * 100, l * 100];
	};

	var clone = function(name) {
		var parent = name === '_myself_' ? S : self.getObject(name);
		var c = parent.clone();
		self.children.splice(self.children.indexOf(parent), 0, c);
		self.triggerFor(c, 'whenCloned');
	};

	var epoch = Date.UTC(2000, 0, 1);

	var timeAndDate = P.Watcher.timeAndDate;

	var getVar = function(name) {
		return self.vars[name] !== undefined ? self.vars[name] : S.vars[name];
	};

	var getList = function(name) {
		if (self.lists[name] !== undefined) return self.lists;
		if (S.lists[name] === undefined) {
			S.lists[name] = [];
		}
		return S.lists[name];
	};

	var listIndex = function(list, index, length) {
		var i = index | 0;
		if (i === index) return i > 0 && i <= length ? i - 1 : -1;
		if (index === 'random' || index === 'any') {
			return Math.random() * length | 0;
		}
		if (index === 'last') {
			return length - 1;
		}
		return i > 0 && i <= length ? i - 1 : -1;
	};

	var contentsOfList = function(list) {
		var isSingle = true;
		for (var i = list.length; i--;) {
			if (list[i].length !== 1) {
				isSingle = false;
				break;
			}
		}
		return list.join(isSingle ? '' : ' ');
	};

	var getLineOfList = function(list, index) {
		var i = listIndex(list, index, list.length);
		return i !== -1 ? list[i] : '';
	};

	var listContains = function(list, value) {
		for (var i = list.length; i--;) {
			if (equal(list[i], value)) return true;
		}
		return false;
	};

	var appendToList = function(list, value) {
		list.push(value);
	};

	var deleteLineOfList = function(list, index) {
		if (index === 'all') {
			list.length = 0;
		} else {
			var i = listIndex(list, index, list.length);
			if (i === list.length - 1) {
				list.pop();
			} else if (i !== -1) {
				list.splice(i, 1);
			}
		}
	};

	var insertInList = function(list, index, value) {
		var i = listIndex(list, index, list.length + 1);
		if (i === list.length) {
			list.push(value);
		} else if (i !== -1) {
			list.splice(i, 0, value);
		}
	};

	var setLineOfList = function(list, index, value) {
		var i = listIndex(list, index, list.length);
		if (i !== -1) {
			list[i] = value;
		}
	};

	var mathFunc = function(f, x) {
		switch (f) {
			case 'abs':
				return Math.abs(x);
			case 'floor':
				return Math.floor(x);
			case 'sqrt':
				return Math.sqrt(x);
			case 'ceiling':
				return Math.ceil(x);
			case 'cos':
				return Math.cos(x * Math.PI / 180);
			case 'sin':
				return Math.sin(x * Math.PI / 180);
			case 'tan':
				return Math.tan(x * Math.PI / 180);
			case 'asin':
				return Math.asin(x) * 180 / Math.PI;
			case 'acos':
				return Math.acos(x) * 180 / Math.PI;
			case 'atan':
				return Math.atan(x) * 180 / Math.PI;
			case 'ln':
				return Math.log(x);
			case 'log':
				return Math.log(x) / Math.LN10;
			case 'e ^':
				return Math.exp(x);
			case '10 ^':
				return Math.exp(x * Math.LN10);
		}
		return 0;
	};

	var attribute = function(attr, objName) {
		var o = self.getObject(objName);
		if (!o) return 0;
		if (o.isSprite) {
			switch (attr) {
				case 'x position':
					return o.scratchX;
				case 'y position':
					return o.scratchY;
				case 'direction':
					return o.direction;
				case 'costume #':
					return o.currentCostumeIndex + 1;
				case 'costume name':
					return o.costumes[o.currentCostumeIndex].costumeName;
				case 'size':
					return o.scale * 100;
				case 'volume':
					return 0; // TODO
			}
		} else {
			switch (attr) {
				case 'background #':
				case 'backdrop #':
					return o.currentCostumeIndex + 1;
				case 'backdrop name':
					return o.costumes[o.currentCostumeIndex].costumeName;
				case 'volume':
					return 0; // TODO
			}
		}
		var value = o.vars[attr];
		if (value !== undefined) {
			return value;
		}
		return 0;
	};

	var VOLUME = 0.3;

	var audioContext = P.audioContext;
	if (audioContext) {
		var wavBuffers = P.IO.wavBuffers;

		var volumeNode = audioContext.createGain();
		volumeNode.gain.value = VOLUME;
		volumeNode.connect(audioContext.destination);

		var playNote = function(id, duration) {
			var spans = INSTRUMENTS[S.instrument];
			for (var i = 0, l = spans.length; i < l; i++) {
				var span = spans[i];
				if (span.top >= id || span.top === 128) break;
			}
			playSpan(span, Math.max(0, Math.min(127, id)), duration);
		};

		var playSpan = function(span, id, duration) {
			if (!S.node) {
				S.node = audioContext.createGain();
				S.node.gain.value = S.volume;
				S.node.connect(volumeNode);
			}

			var source = audioContext.createBufferSource();
			var note = audioContext.createGain();
			var buffer = wavBuffers[span.name];
			if (!buffer) return;

			source.buffer = buffer;
			if (source.loop = span.loop) {
				source.loopStart = span.loopStart;
				source.loopEnd = span.loopEnd;
			}

			source.connect(note);
			note.connect(S.node);

			var time = audioContext.currentTime;
			source.playbackRate.value = Math.pow(2, (id - 69) / 12) / span.baseRatio;

			var gain = note.gain;
			gain.value = 0;
			gain.setValueAtTime(0, time);
			if (span.attackEnd < duration) {
				gain.linearRampToValueAtTime(1, time + span.attackEnd);
				if (span.decayTime > 0 && span.holdEnd < duration) {
					gain.linearRampToValueAtTime(1, time + span.holdEnd);
					if (span.decayEnd < duration) {
						gain.linearRampToValueAtTime(0, time + span.decayEnd);
					} else {
						gain.linearRampToValueAtTime(1 - (duration - holdEnd) / span.decayTime, time + duration);
					}
				} else {
					gain.linearRampToValueAtTime(1, time + duration);
				}
			} else {
				gain.linearRampToValueAtTime(1, time + duration);
			}
			gain.linearRampToValueAtTime(0, time + duration + 0.02267573696);

			source.start(time);
			source.stop(time + duration + 0.02267573696);
		};

		var playSound = function(sound) {
			if (!sound.buffer) return;
			if (!sound.node) {
				sound.node = audioContext.createGain();
				sound.node.gain.value = S.volume;
				sound.node.connect(volumeNode);
			}
			sound.target = S;
			sound.node.gain.setValueAtTime(S.volume, audioContext.currentTime);

			if (sound.source) {
				sound.source.disconnect();
			}
			sound.source = audioContext.createBufferSource();
			sound.source.buffer = sound.buffer;
			sound.source.connect(sound.node);

			sound.source.start(audioContext.currentTime);
		};
	}

	var save = function() {
		STACK.push(REGISTER);
		REGISTER = {};
	};

	var restore = function() {
		REGISTER = STACK.pop();
	};

	// var lastCalls = [];
	var call = function(procedure, id, values) {
		// lastCalls.push(spec);
		// if (lastCalls.length > 10000) lastCalls.shift();
		if (procedure) {
			STACK.push(REGISTER);
			CALLS.push(C);
			C = {
				base: procedure.fn,
				fn: S.fns[id],
				args: values,
				numargs: [],
				boolargs: [],
				stack: STACK = [],
				warp: procedure.warp
			};
			REGISTER = {};
			if (C.warp || WARP) {
				WARP++;
				IMMEDIATE = procedure.fn;
			} else {
				for (var i = CALLS.length, j = 5; i-- && j--;) {
					if (CALLS[i].base === procedure.fn) {
						var recursive = true;
						break;
					}
				}
				if (recursive) {
					self.queue[THREAD] = {
						sprite: S,
						base: BASE,
						fn: procedure.fn,
						calls: CALLS
					};
				} else {
					IMMEDIATE = procedure.fn;
				}
			}
		} else {
			IMMEDIATE = S.fns[id];
		}
	};

	var endCall = function() {
		if (CALLS.length) {
			if (WARP) WARP--;
			IMMEDIATE = C.fn;
			C = CALLS.pop();
			STACK = C.stack;
			REGISTER = STACK.pop();
		}
	};

	var sceneChange = function() {
		return self.trigger('whenSceneStarts', self.costumes[self.currentCostumeIndex].costumeName);
	};

	var broadcast = function(name) {
		return self.trigger('whenIReceive', name);
	};

	var running = function(bases) {
		for (var j = 0; j < self.queue.length; j++) {
			if (self.queue[j] && bases.indexOf(self.queue[j].base) !== -1) return true;
		}
		return false;
	};

	var queue = function(id) {
		if (WARP) {
			IMMEDIATE = S.fns[id];
		} else {
			forceQueue(id);
		}
	};

	var forceQueue = function(id) {
		self.queue[THREAD] = {
			sprite: S,
			base: BASE,
			fn: S.fns[id],
			calls: CALLS
		};
	};

	// Internal definition
	(function() {
		'use strict';

		P.Stage.prototype.framerate = 30;
		P.Stage.prototype.frametime = 1000 / P.Stage.prototype.framerate;

		P.Stage.prototype.initRuntime = function() {
			this.queue = [];
			this.onError = this.onError.bind(this);
		};

		P.Stage.prototype.startThread = function(sprite, base) {
			var thread = {
				sprite: sprite,
				base: base,
				fn: base,
				calls: [{
					args: [],
					stack: [{}]
				}]
			};
			for (var i = 0; i < this.queue.length; i++) {
				var q = this.queue[i];
				if (q && q.sprite === sprite && q.base === base) {
					this.queue[i] = thread;
					return;
				}
			}
			this.queue.push(thread);
		};

		P.Stage.prototype.triggerFor = function(sprite, event, arg) {
			var threads;
			if (event === 'whenClicked') {
				threads = sprite.listeners.whenClicked;
			} else if (event === 'whenCloned') {
				threads = sprite.listeners.whenCloned;
			} else if (event === 'whenGreenFlag') {
				threads = sprite.listeners.whenGreenFlag;
			} else if (event === 'whenIReceive') {
				threads = sprite.listeners.whenIReceive[('' + arg).toLowerCase()];
			} else if (event === 'whenKeyPressed') {
				threads = sprite.listeners.whenKeyPressed[arg];
			} else if (event === 'whenSceneStarts') {
				threads = sprite.listeners.whenSceneStarts[('' + arg).toLowerCase()];
			}
			if (threads) {
				for (var i = 0; i < threads.length; i++) {
					this.startThread(sprite, threads[i]);
				}
			}
			return threads || [];
		};

		P.Stage.prototype.trigger = function(event, arg) {
			var threads = [];
			for (var i = this.children.length; i--;) {
				threads = threads.concat(this.triggerFor(this.children[i], event, arg));
			}
			return threads.concat(this.triggerFor(this, event, arg));
		};

		P.Stage.prototype.triggerGreenFlag = function() {
			this.timerStart = this.rightNow();
			this.trigger('whenGreenFlag');
		};

		P.Stage.prototype.start = function() {
			this.isRunning = true;
			if (this.interval) return;
			addEventListener('error', this.onError);
			this.baseTime = Date.now();
			this.interval = setInterval(this.step.bind(this), this.frametime);
			if (audioContext) audioContext.resume();
		};

		P.Stage.prototype.pause = function() {
			if (this.interval) {
				this.baseNow = this.rightNow();
				clearInterval(this.interval);
				delete this.interval;
				removeEventListener('error', this.onError);
				if (audioContext) audioContext.suspend();
			}
			this.isRunning = false;
		};

		P.Stage.prototype.stopAll = function() {
			this.hidePrompt = false;
			this.prompter.style.display = 'none';
			this.promptId = this.nextPromptId = 0;
			this.queue.length = 0;
			this.resetFilters();
			this.stopSounds();
			for (var i = 0; i < this.children.length; i++) {
				var c = this.children[i];
				if (c.isClone) {
					c.remove();
					this.children.splice(i, 1);
					i -= 1;
				} else {
					c.resetFilters();
					if (c.saying) c.say('');
					c.stopSounds();
				}
			}
		};

		P.Stage.prototype.rightNow = function() {
			return this.baseNow + Date.now() - this.baseTime;
		};

		P.Stage.prototype.step = function() {
			self = this;
			VISUAL = false;
			var start = Date.now();
			do {
				var queue = this.queue;
				this.now = this.rightNow();
				for (THREAD = 0; THREAD < queue.length; THREAD++) {
					if (queue[THREAD]) {
						S = queue[THREAD].sprite;
						IMMEDIATE = queue[THREAD].fn;
						BASE = queue[THREAD].base;
						CALLS = queue[THREAD].calls;
						C = CALLS.pop();
						STACK = C.stack;
						REGISTER = STACK.pop();
						queue[THREAD] = undefined;
						WARP = 0;
						while (IMMEDIATE) {
							var fn = IMMEDIATE;
							IMMEDIATE = null;
							fn();
						}
						STACK.push(REGISTER);
						CALLS.push(C);
					}
				}
				for (var i = queue.length; i--;) {
					if (!queue[i]) queue.splice(i, 1);
				}
			} while ((self.isTurbo || !VISUAL) && Date.now() - start < this.frametime && queue.length !== 0);
			this.draw();
			S = null;
		};

		P.Stage.prototype.onError = function(e) {
			this.handleError(e.error);
			clearInterval(this.interval);
		};

		P.Stage.prototype.handleError = function(e) {
			console.error(e.stack);
		};

	}());

	const instrumentConstants = require("../instrument-constants");

	const INSTRUMENTS = instrumentConstants.INSTRUMENTS;
	const DRUMS = instrumentConstants.DRUMS;

	return {
		scopedEval: function(source) {
			console.log(source);
			return eval(source);
		}
	};

});

module.exports = runtime;
