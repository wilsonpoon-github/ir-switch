basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
})
