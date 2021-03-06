class Base {
	constructor () {
		this.isClone = false;
		this.costumes = [];
		this.currentCostumeIndex = 0;
		this.objName = '';
		this.instrument = 0;
		this.volume = 100;

		this.soundRefs = Object.create(null);
		this.sounds = [];

		this.vars = Object.create(null);
		this.watchers = Object.create(null);
		this.lists = Object.create(null);

		this.procedures = {};
		this.listeners = {
			whenClicked: [],
			whenCloned: [],
			whenGreenFlag: [],
			whenIReceive: {},
			whenKeyPressed: [],
			whenSceneStarts: [],
			whenSensorGreaterThan: []
		};
		for (let i = 0; i < 128; i++) {
			this.listeners.whenKeyPressed.push([]);
		}
		this.fns = [];
		this.scripts = [];
		this.continuations = [];

		this.resetFilters();
	}

	addSounds (sounds) {
		for (let i = 0; i < sounds.length; i++) {
			const s = sounds[i];
			this.sounds.push(s);
			this.soundRefs[s.name] = s;
		}
	}

	addVariable (name, value) {
		this.vars[name] = value;
	}

	addList (name, contents) {
		this.lists[name] = contents;
	}

	setVariableVisible (name, visible) {
		let watcher = this.watchers[name];
		const stage = this.stage;
		if (!watcher) {
			watcher = this.watchers[name] = new P.Watcher(stage);
			watcher.x = stage.defaultWatcherX;
			watcher.y = stage.defaultWatcherY;
			stage.defaultWatcherY += 26;
			if (stage.defaultWatcherY >= 450) {
				stage.defaultWatcherY = 10;
				stage.defaultWatcherX += 150;
			}
			watcher.target = this;
			watcher.label = (watcher.target === stage ? '' : watcher.target.objName + ': ') + name;
			watcher.param = name;
			stage.allWatchers.push(watcher);
		}
		watcher.visible = visible;
		watcher.layout();
	}

	showNextCostume () {
		this.currentCostumeIndex = (this.currentCostumeIndex + 1) % this.costumes.length;
		if (this.isStage) this.updateBackdrop();
		if (this.saying) this.updateBubble();
	}

	showPreviousCostume () {
		const length = this.costumes.length;
		this.currentCostumeIndex = (this.currentCostumeIndex + length - 1) % length;
		if (this.isStage) this.updateBackdrop();
		if (this.saying) this.updateBubble();
	}

	getCostumeName () {
		return this.costumes[this.currentCostumeIndex] ? this.costumes[this.currentCostumeIndex].costumeName : '';
	}

	setCostume (costume) {
		if (typeof costume !== 'number' && Number.isNaN(Number(costume))) {
			costume = String(costume);
			for (let i = 0; i < this.costumes.length; i++) {
				if (this.costumes[i].costumeName === costume) {
					this.currentCostumeIndex = i;
					if (this.isStage) this.updateBackdrop();
					if (this.saying) this.updateBubble();
					return;
				}
			}
			if (costume === (this.isSprite ? 'next costume' : 'next backdrop')) {
				this.showNextCostume();
				return;
			}
			if (costume === (this.isSprite ? 'previous costume' : 'previous backdrop')) {
				this.showPreviousCostume();
				return;
			}
		}
		let i = (Math.floor(costume) - 1 || 0) % this.costumes.length;
		if (i < 0) i += this.costumes.length;
		this.currentCostumeIndex = i;
		if (this.isStage) this.updateBackdrop();
		if (this.saying) this.updateBubble();
	}

	setFilter (name, value) {
		switch (name) {
			case 'ghost':
				if (value < 0) value = 0;
				if (value > 100) value = 100;
				break;
			case 'brightness':
				if (value < -100) value = -100;
				if (value > 100) value = 100;
				break;
			case 'color':
				value = value % 200;
				if (value < 0) value += 200;
				break;
		}
		this.filters[name] = value;
		if (this.isStage) this.updateFilters();
	}

	changeFilter (name, value) {
		this.setFilter(name, this.filters[name] + value);
	}

	resetFilters () {
		this.filters = {
			color: 0,
			fisheye: 0,
			whirl: 0,
			pixelate: 0,
			mosaic: 0,
			brightness: 0,
			ghost: 0
		};
	}

	getSound (name) {
		if (typeof name === 'string') {
			const s = this.soundRefs[name];
			if (s) return s;
			name = +name;
		}
		const l = this.sounds.length;
		if (l && typeof name === 'number' && name === name) {
			let i = Math.round(name - 1) % l;
			if (i < 0) i += l;
			return this.sounds[i];
		}

		return null;
	}

	stopSounds () {
		if (this.node) {
			this.node.disconnect();
			this.node = null;
		}
		for (let i = this.sounds.length; i--;) {
			const s = this.sounds[i];
			if (s.node) {
				s.node.disconnect();
				s.node = null;
			}
		}
	}

	ask (question) {
		const stage = this.stage;
		if (question) {
			if (this.isSprite && this.visible) {
				this.say(question);
				stage.promptTitle.style.display = 'none';
			} else {
				stage.promptTitle.style.display = 'block';
				stage.promptTitle.textContent = question;
			}
		} else {
			stage.promptTitle.style.display = 'none';
		}
		stage.hidePrompt = false;
		stage.prompter.style.display = 'block';
		stage.prompt.value = '';
		stage.prompt.focus();
	}
}

module.exports = Base;
