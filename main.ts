radio.onReceivedValue(function (name, value) {
	
})
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
music.play(music.stringPlayable("C D E F G A B C5 ", 255), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Ghost)
        music.play(music.stringPlayable("F E - F E - F E ", 120), music.PlaybackMode.UntilDone)
    }
})
