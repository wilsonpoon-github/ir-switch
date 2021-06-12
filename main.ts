basic.forever(function () {
    basic.showString("" + (pins.digitalReadPin(DigitalPin.P5)))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        while (true) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(1000)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
