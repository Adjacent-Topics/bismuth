const INSTRUMENTS = [
	[{
		top: 38,
		name: 'AcousticPiano_As3',
		baseRatio: 0.5316313272700484,
		loop: true,
		loopStart: 0.465578231292517,
		loopEnd: 0.7733786848072562,
		attackEnd: 0,
		holdEnd: 0.1,
		decayEnd: 22.1
	}, {
		top: 44,
		name: 'AcousticPiano_C4',
		baseRatio: 0.5905141892259927,
		loop: true,
		loopStart: 0.6334693877551021,
		loopEnd: 0.8605442176870748,
		attackEnd: 0,
		holdEnd: 0.1,
		decayEnd: 20.1
	}, {
		top: 51,
		name: 'AcousticPiano_G4',
		baseRatio: 0.8843582887700535,
		loop: true,
		loopStart: 0.5532879818594104,
		loopEnd: 0.5609977324263039,
		attackEnd: 0,
		holdEnd: 0.08,
		decayEnd: 18.08
	}, {
		top: 62,
		name: 'AcousticPiano_C6',
		baseRatio: 2.3557692307692304,
		loop: true,
		loopStart: 0.5914739229024943,
		loopEnd: 0.6020861678004535,
		attackEnd: 0,
		holdEnd: 0.08,
		decayEnd: 16.08
	}, {
		top: 70,
		name: 'AcousticPiano_F5',
		baseRatio: 1.5776515151515151,
		loop: true,
		loopStart: 0.5634920634920635,
		loopEnd: 0.5879818594104308,
		attackEnd: 0,
		holdEnd: 0.04,
		decayEnd: 14.04
	}, {
		top: 77,
		name: 'AcousticPiano_Ds6',
		baseRatio: 2.800762112139358,
		loop: true,
		loopStart: 0.560907029478458,
		loopEnd: 0.5836281179138322,
		attackEnd: 0,
		holdEnd: 0.02,
		decayEnd: 10.02
	}, {
		top: 85,
		name: 'AcousticPiano_Ds6',
		baseRatio: 2.800762112139358,
		loop: true,
		loopStart: 0.560907029478458,
		loopEnd: 0.5836281179138322,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 8
	}, {
		top: 90,
		name: 'AcousticPiano_Ds6',
		baseRatio: 2.800762112139358,
		loop: true,
		loopStart: 0.560907029478458,
		loopEnd: 0.5836281179138322,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 6
	}, {
		top: 96,
		name: 'AcousticPiano_D7',
		baseRatio: 5.275119617224881,
		loop: true,
		loopStart: 0.3380498866213152,
		loopEnd: 0.34494331065759637,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 3
	}, {
		top: 128,
		name: 'AcousticPiano_D7',
		baseRatio: 5.275119617224881,
		loop: true,
		loopStart: 0.3380498866213152,
		loopEnd: 0.34494331065759637,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 2
	}],
	[{
		top: 48,
		name: 'ElectricPiano_C2',
		baseRatio: 0.14870515241435123,
		loop: true,
		loopStart: 0.6956009070294784,
		loopEnd: 0.7873015873015873,
		attackEnd: 0,
		holdEnd: 0.08,
		decayEnd: 10.08
	}, {
		top: 74,
		name: 'ElectricPiano_C4',
		baseRatio: 0.5945685670261941,
		loop: true,
		loopStart: 0.5181859410430839,
		loopEnd: 0.5449433106575964,
		attackEnd: 0,
		holdEnd: 0.04,
		decayEnd: 8.04
	}, {
		top: 128,
		name: 'ElectricPiano_C4',
		baseRatio: 0.5945685670261941,
		loop: true,
		loopStart: 0.5181859410430839,
		loopEnd: 0.5449433106575964,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 6
	}],
	[{
		top: 128,
		name: 'Organ_G2',
		baseRatio: 0.22283731584620914,
		loop: true,
		loopStart: 0.05922902494331066,
		loopEnd: 0.1510204081632653,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 40,
		name: 'AcousticGuitar_F3',
		baseRatio: 0.3977272727272727,
		loop: true,
		loopStart: 1.6628117913832199,
		loopEnd: 1.6685260770975057,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 15
	}, {
		top: 56,
		name: 'AcousticGuitar_F3',
		baseRatio: 0.3977272727272727,
		loop: true,
		loopStart: 1.6628117913832199,
		loopEnd: 1.6685260770975057,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 13.5
	}, {
		top: 60,
		name: 'AcousticGuitar_F3',
		baseRatio: 0.3977272727272727,
		loop: true,
		loopStart: 1.6628117913832199,
		loopEnd: 1.6685260770975057,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 12
	}, {
		top: 67,
		name: 'AcousticGuitar_F3',
		baseRatio: 0.3977272727272727,
		loop: true,
		loopStart: 1.6628117913832199,
		loopEnd: 1.6685260770975057,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 8.5
	}, {
		top: 72,
		name: 'AcousticGuitar_F3',
		baseRatio: 0.3977272727272727,
		loop: true,
		loopStart: 1.6628117913832199,
		loopEnd: 1.6685260770975057,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 7
	}, {
		top: 83,
		name: 'AcousticGuitar_F3',
		baseRatio: 0.3977272727272727,
		loop: true,
		loopStart: 1.6628117913832199,
		loopEnd: 1.6685260770975057,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 5.5
	}, {
		top: 128,
		name: 'AcousticGuitar_F3',
		baseRatio: 0.3977272727272727,
		loop: true,
		loopStart: 1.6628117913832199,
		loopEnd: 1.6685260770975057,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 4.5
	}],
	[{
		top: 40,
		name: 'ElectricGuitar_F3',
		baseRatio: 0.39615522817103843,
		loop: true,
		loopStart: 1.5733333333333333,
		loopEnd: 1.5848072562358277,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 15
	}, {
		top: 56,
		name: 'ElectricGuitar_F3',
		baseRatio: 0.39615522817103843,
		loop: true,
		loopStart: 1.5733333333333333,
		loopEnd: 1.5848072562358277,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 13.5
	}, {
		top: 60,
		name: 'ElectricGuitar_F3',
		baseRatio: 0.39615522817103843,
		loop: true,
		loopStart: 1.5733333333333333,
		loopEnd: 1.5848072562358277,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 12
	}, {
		top: 67,
		name: 'ElectricGuitar_F3',
		baseRatio: 0.39615522817103843,
		loop: true,
		loopStart: 1.5733333333333333,
		loopEnd: 1.5848072562358277,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 8.5
	}, {
		top: 72,
		name: 'ElectricGuitar_F3',
		baseRatio: 0.39615522817103843,
		loop: true,
		loopStart: 1.5733333333333333,
		loopEnd: 1.5848072562358277,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 7
	}, {
		top: 83,
		name: 'ElectricGuitar_F3',
		baseRatio: 0.39615522817103843,
		loop: true,
		loopStart: 1.5733333333333333,
		loopEnd: 1.5848072562358277,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 5.5
	}, {
		top: 128,
		name: 'ElectricGuitar_F3',
		baseRatio: 0.39615522817103843,
		loop: true,
		loopStart: 1.5733333333333333,
		loopEnd: 1.5848072562358277,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 4.5
	}],
	[{
		top: 34,
		name: 'ElectricBass_G1',
		baseRatio: 0.11111671034065712,
		loop: true,
		loopStart: 1.9007709750566892,
		loopEnd: 1.9212244897959183,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 17
	}, {
		top: 48,
		name: 'ElectricBass_G1',
		baseRatio: 0.11111671034065712,
		loop: true,
		loopStart: 1.9007709750566892,
		loopEnd: 1.9212244897959183,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 14
	}, {
		top: 64,
		name: 'ElectricBass_G1',
		baseRatio: 0.11111671034065712,
		loop: true,
		loopStart: 1.9007709750566892,
		loopEnd: 1.9212244897959183,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 12
	}, {
		top: 128,
		name: 'ElectricBass_G1',
		baseRatio: 0.11111671034065712,
		loop: true,
		loopStart: 1.9007709750566892,
		loopEnd: 1.9212244897959183,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 10
	}],
	[{
		top: 38,
		name: 'Pizz_G2',
		baseRatio: 0.21979665071770335,
		loop: true,
		loopStart: 0.3879365079365079,
		loopEnd: 0.3982766439909297,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 5
	}, {
		top: 45,
		name: 'Pizz_G2',
		baseRatio: 0.21979665071770335,
		loop: true,
		loopStart: 0.3879365079365079,
		loopEnd: 0.3982766439909297,
		attackEnd: 0,
		holdEnd: 0.012,
		decayEnd: 4.012
	}, {
		top: 56,
		name: 'Pizz_A3',
		baseRatio: 0.503654636820466,
		loop: true,
		loopStart: 0.5197278911564626,
		loopEnd: 0.5287528344671202,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 4
	}, {
		top: 64,
		name: 'Pizz_A3',
		baseRatio: 0.503654636820466,
		loop: true,
		loopStart: 0.5197278911564626,
		loopEnd: 0.5287528344671202,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 3.2
	}, {
		top: 72,
		name: 'Pizz_E4',
		baseRatio: 0.7479647218453188,
		loop: true,
		loopStart: 0.7947845804988662,
		loopEnd: 0.7978231292517007,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 2.8
	}, {
		top: 80,
		name: 'Pizz_E4',
		baseRatio: 0.7479647218453188,
		loop: true,
		loopStart: 0.7947845804988662,
		loopEnd: 0.7978231292517007,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 2.2
	}, {
		top: 128,
		name: 'Pizz_E4',
		baseRatio: 0.7479647218453188,
		loop: true,
		loopStart: 0.7947845804988662,
		loopEnd: 0.7978231292517007,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 1.5
	}],
	[{
		top: 41,
		name: 'Cello_C2',
		baseRatio: 0.14870515241435123,
		loop: true,
		loopStart: 0.3876643990929705,
		loopEnd: 0.40294784580498866,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 52,
		name: 'Cello_As2',
		baseRatio: 0.263755980861244,
		loop: true,
		loopStart: 0.3385487528344671,
		loopEnd: 0.35578231292517004,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 62,
		name: 'Violin_D4',
		baseRatio: 0.6664047388781432,
		loop: true,
		loopStart: 0.48108843537414964,
		loopEnd: 0.5151927437641723,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 75,
		name: 'Violin_A4',
		baseRatio: 0.987460815047022,
		loop: true,
		loopStart: 0.14108843537414967,
		loopEnd: 0.15029478458049886,
		attackEnd: 0.07,
		holdEnd: 0.07,
		decayEnd: 0.07
	}, {
		top: 128,
		name: 'Violin_E5',
		baseRatio: 1.4885238523852387,
		loop: true,
		loopStart: 0.10807256235827664,
		loopEnd: 0.1126530612244898,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 30,
		name: 'BassTrombone_A2_3',
		baseRatio: 0.24981872564125807,
		loop: true,
		loopStart: 0.061541950113378686,
		loopEnd: 0.10702947845804989,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 40,
		name: 'BassTrombone_A2_2',
		baseRatio: 0.24981872564125807,
		loop: true,
		loopStart: 0.08585034013605441,
		loopEnd: 0.13133786848072562,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 55,
		name: 'Trombone_B3',
		baseRatio: 0.5608240680183126,
		loop: true,
		loopStart: 0.12,
		loopEnd: 0.17673469387755103,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 88,
		name: 'Trombone_B3',
		baseRatio: 0.5608240680183126,
		loop: true,
		loopStart: 0.12,
		loopEnd: 0.17673469387755103,
		attackEnd: 0.05,
		holdEnd: 0.05,
		decayEnd: 0.05
	}, {
		top: 128,
		name: 'Trumpet_E5',
		baseRatio: 1.4959294436906376,
		loop: true,
		loopStart: 0.1307936507936508,
		loopEnd: 0.14294784580498865,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 128,
		name: 'Clarinet_C4',
		baseRatio: 0.5940193965517241,
		loop: true,
		loopStart: 0.6594104308390023,
		loopEnd: 0.7014965986394558,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 40,
		name: 'TenorSax_C3',
		baseRatio: 0.2971698113207547,
		loop: true,
		loopStart: 0.4053968253968254,
		loopEnd: 0.4895238095238095,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 50,
		name: 'TenorSax_C3',
		baseRatio: 0.2971698113207547,
		loop: true,
		loopStart: 0.4053968253968254,
		loopEnd: 0.4895238095238095,
		attackEnd: 0.02,
		holdEnd: 0.02,
		decayEnd: 0.02
	}, {
		top: 59,
		name: 'TenorSax_C3',
		baseRatio: 0.2971698113207547,
		loop: true,
		loopStart: 0.4053968253968254,
		loopEnd: 0.4895238095238095,
		attackEnd: 0.04,
		holdEnd: 0.04,
		decayEnd: 0.04
	}, {
		top: 67,
		name: 'AltoSax_A3',
		baseRatio: 0.49814747876378096,
		loop: true,
		loopStart: 0.3875736961451247,
		loopEnd: 0.4103854875283447,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 75,
		name: 'AltoSax_A3',
		baseRatio: 0.49814747876378096,
		loop: true,
		loopStart: 0.3875736961451247,
		loopEnd: 0.4103854875283447,
		attackEnd: 0.02,
		holdEnd: 0.02,
		decayEnd: 0.02
	}, {
		top: 80,
		name: 'AltoSax_A3',
		baseRatio: 0.49814747876378096,
		loop: true,
		loopStart: 0.3875736961451247,
		loopEnd: 0.4103854875283447,
		attackEnd: 0.02,
		holdEnd: 0.02,
		decayEnd: 0.02
	}, {
		top: 128,
		name: 'AltoSax_C6',
		baseRatio: 2.3782742681047764,
		loop: true,
		loopStart: 0.05705215419501134,
		loopEnd: 0.0838095238095238,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 61,
		name: 'Flute_B5_2',
		baseRatio: 2.255113636363636,
		loop: true,
		loopStart: 0.08430839002267573,
		loopEnd: 0.10244897959183673,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 128,
		name: 'Flute_B5_1',
		baseRatio: 2.255113636363636,
		loop: true,
		loopStart: 0.10965986394557824,
		loopEnd: 0.12780045351473923,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 128,
		name: 'WoodenFlute_C5',
		baseRatio: 1.1892952324548416,
		loop: true,
		loopStart: 0.5181859410430839,
		loopEnd: 0.7131065759637188,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 57,
		name: 'Bassoon_C3',
		baseRatio: 0.29700969827586204,
		loop: true,
		loopStart: 0.11011337868480725,
		loopEnd: 0.19428571428571428,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 67,
		name: 'Bassoon_C3',
		baseRatio: 0.29700969827586204,
		loop: true,
		loopStart: 0.11011337868480725,
		loopEnd: 0.19428571428571428,
		attackEnd: 0.04,
		holdEnd: 0.04,
		decayEnd: 0.04
	}, {
		top: 76,
		name: 'Bassoon_C3',
		baseRatio: 0.29700969827586204,
		loop: true,
		loopStart: 0.11011337868480725,
		loopEnd: 0.19428571428571428,
		attackEnd: 0.08,
		holdEnd: 0.08,
		decayEnd: 0.08
	}, {
		top: 84,
		name: 'EnglishHorn_F3',
		baseRatio: 0.39601293103448276,
		loop: true,
		loopStart: 0.341859410430839,
		loopEnd: 0.4049886621315193,
		attackEnd: 0.04,
		holdEnd: 0.04,
		decayEnd: 0.04
	}, {
		top: 128,
		name: 'EnglishHorn_D4',
		baseRatio: 0.6699684005833739,
		loop: true,
		loopStart: 0.22027210884353743,
		loopEnd: 0.23723356009070296,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 39,
		name: 'Choir_F3',
		baseRatio: 0.3968814788643197,
		loop: true,
		loopStart: 0.6352380952380953,
		loopEnd: 1.8721541950113378,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 50,
		name: 'Choir_F3',
		baseRatio: 0.3968814788643197,
		loop: true,
		loopStart: 0.6352380952380953,
		loopEnd: 1.8721541950113378,
		attackEnd: 0.04,
		holdEnd: 0.04,
		decayEnd: 0.04
	}, {
		top: 61,
		name: 'Choir_F3',
		baseRatio: 0.3968814788643197,
		loop: true,
		loopStart: 0.6352380952380953,
		loopEnd: 1.8721541950113378,
		attackEnd: 0.06,
		holdEnd: 0.06,
		decayEnd: 0.06
	}, {
		top: 72,
		name: 'Choir_F4',
		baseRatio: 0.7928898424161845,
		loop: true,
		loopStart: 0.7415419501133786,
		loopEnd: 2.1059410430839,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 128,
		name: 'Choir_F5',
		baseRatio: 1.5879576065654504,
		loop: true,
		loopStart: 0.836281179138322,
		loopEnd: 2.0585487528344673,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 38,
		name: 'Vibraphone_C3',
		baseRatio: 0.29829545454545453,
		loop: true,
		loopStart: 0.2812698412698413,
		loopEnd: 0.28888888888888886,
		attackEnd: 0,
		holdEnd: 0.1,
		decayEnd: 8.1
	}, {
		top: 48,
		name: 'Vibraphone_C3',
		baseRatio: 0.29829545454545453,
		loop: true,
		loopStart: 0.2812698412698413,
		loopEnd: 0.28888888888888886,
		attackEnd: 0,
		holdEnd: 0.1,
		decayEnd: 7.6
	}, {
		top: 59,
		name: 'Vibraphone_C3',
		baseRatio: 0.29829545454545453,
		loop: true,
		loopStart: 0.2812698412698413,
		loopEnd: 0.28888888888888886,
		attackEnd: 0,
		holdEnd: 0.06,
		decayEnd: 7.06
	}, {
		top: 70,
		name: 'Vibraphone_C3',
		baseRatio: 0.29829545454545453,
		loop: true,
		loopStart: 0.2812698412698413,
		loopEnd: 0.28888888888888886,
		attackEnd: 0,
		holdEnd: 0.04,
		decayEnd: 6.04
	}, {
		top: 78,
		name: 'Vibraphone_C3',
		baseRatio: 0.29829545454545453,
		loop: true,
		loopStart: 0.2812698412698413,
		loopEnd: 0.28888888888888886,
		attackEnd: 0,
		holdEnd: 0.02,
		decayEnd: 5.02
	}, {
		top: 86,
		name: 'Vibraphone_C3',
		baseRatio: 0.29829545454545453,
		loop: true,
		loopStart: 0.2812698412698413,
		loopEnd: 0.28888888888888886,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 4
	}, {
		top: 128,
		name: 'Vibraphone_C3',
		baseRatio: 0.29829545454545453,
		loop: true,
		loopStart: 0.2812698412698413,
		loopEnd: 0.28888888888888886,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 3
	}],
	[{
		top: 128,
		name: 'MusicBox_C4',
		baseRatio: 0.5937634640241276,
		loop: true,
		loopStart: 0.6475283446712018,
		loopEnd: 0.6666666666666666,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 2
	}],
	[{
		top: 128,
		name: 'SteelDrum_D5',
		baseRatio: 1.3660402567543959,
		loop: false,
		loopStart: -0.000045351473922902495,
		loopEnd: -0.000045351473922902495,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 2
	}],
	[{
		top: 128,
		name: 'Marimba_C4',
		baseRatio: 0.5946035575013605,
		loop: false,
		loopStart: -0.000045351473922902495,
		loopEnd: -0.000045351473922902495,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 80,
		name: 'SynthLead_C4',
		baseRatio: 0.5942328422565577,
		loop: true,
		loopStart: 0.006122448979591836,
		loopEnd: 0.06349206349206349,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}, {
		top: 128,
		name: 'SynthLead_C6',
		baseRatio: 2.3760775862068964,
		loop: true,
		loopStart: 0.005623582766439909,
		loopEnd: 0.01614512471655329,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}],
	[{
		top: 38,
		name: 'SynthPad_A3',
		baseRatio: 0.4999105065330231,
		loop: true,
		loopStart: 0.1910204081632653,
		loopEnd: 3.9917006802721087,
		attackEnd: 0.05,
		holdEnd: 0.05,
		decayEnd: 0.05
	}, {
		top: 50,
		name: 'SynthPad_A3',
		baseRatio: 0.4999105065330231,
		loop: true,
		loopStart: 0.1910204081632653,
		loopEnd: 3.9917006802721087,
		attackEnd: 0.08,
		holdEnd: 0.08,
		decayEnd: 0.08
	}, {
		top: 62,
		name: 'SynthPad_A3',
		baseRatio: 0.4999105065330231,
		loop: true,
		loopStart: 0.1910204081632653,
		loopEnd: 3.9917006802721087,
		attackEnd: 0.11,
		holdEnd: 0.11,
		decayEnd: 0.11
	}, {
		top: 74,
		name: 'SynthPad_A3',
		baseRatio: 0.4999105065330231,
		loop: true,
		loopStart: 0.1910204081632653,
		loopEnd: 3.9917006802721087,
		attackEnd: 0.15,
		holdEnd: 0.15,
		decayEnd: 0.15
	}, {
		top: 86,
		name: 'SynthPad_A3',
		baseRatio: 0.4999105065330231,
		loop: true,
		loopStart: 0.1910204081632653,
		loopEnd: 3.9917006802721087,
		attackEnd: 0.2,
		holdEnd: 0.2,
		decayEnd: 0.2
	}, {
		top: 128,
		name: 'SynthPad_C6',
		baseRatio: 2.3820424708835755,
		loop: true,
		loopStart: 0.11678004535147392,
		loopEnd: 0.41732426303854875,
		attackEnd: 0,
		holdEnd: 0,
		decayEnd: 0
	}]
];

const DRUMS = [{
	name: 'SnareDrum',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Tom',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'SideStick',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Crash',
	baseRatio: 0.8908987181403393,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'HiHatOpen',
	baseRatio: 0.9438743126816935,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'HiHatClosed',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Tambourine',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Clap',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Claves',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'WoodBlock',
	baseRatio: 0.7491535384383408,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Cowbell',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Triangle',
	baseRatio: 0.8514452780229479,
	loop: true,
	loopStart: 0.7638548752834468,
	loopEnd: 0.7825396825396825,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 2
}, {
	name: 'Bongo',
	baseRatio: 0.5297315471796477,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Conga',
	baseRatio: 0.7954545454545454,
	loop: true,
	loopStart: 0.1926077097505669,
	loopEnd: 0.20403628117913833,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 2
}, {
	name: 'Cabasa',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'GuiroLong',
	baseRatio: 0.5946035575013605,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Vibraslap',
	baseRatio: 0.8408964152537145,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}, {
	name: 'Cuica',
	baseRatio: 0.7937005259840998,
	loop: false,
	loopStart: null,
	loopEnd: null,
	attackEnd: 0,
	holdEnd: 0,
	decayEnd: 0
}];

module.exports = {INSTRUMENTS, DRUMS};