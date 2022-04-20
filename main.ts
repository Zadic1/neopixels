input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    while (!(input.buttonIsPressed(Button.B))) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    while (!(input.buttonIsPressed(Button.A))) {
        strip.setPixelColor(0, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(1, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(2, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(3, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(4, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(5, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(6, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(7, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(8, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(9, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(10, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(11, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(12, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(13, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.setPixelColor(14, neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
        strip.show()
        basic.pause(100)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
basic.forever(function () {
	
})
