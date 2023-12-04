let sendVar = 0
radio.setGroup(43)
radio.setTransmitPower(2)
basic.showIcon(IconNames.Yes)
basic.clearScreen()
loops.everyInterval(500, function () {
    radio.sendValue("heading", input.compassHeading())
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
    radio.sendValue("uTi", input.magneticForce(Dimension.Strength))
    if (randint(0, 2) > 0) {
        led.plot(randint(0, 4), randint(2, 4))
    } else {
        led.unplot(randint(0, 4), randint(2, 4))
    }
})
basic.forever(function () {
	
})
