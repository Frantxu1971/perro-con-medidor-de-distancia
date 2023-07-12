input.onButtonPressed(Button.A, function () {
    control2 = 1
})
input.onButtonPressed(Button.B, function () {
    control2 = 0
    wuKong.stopMotor(wuKong.MotorList.M1)
})
let dist = 0
let control2 = 0
let luz = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
control2 = 0
basic.forever(function () {
    dist = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    basic.showNumber(dist)
    if (control2 == 1) {
        if (dist > 15) {
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 70)
            luz.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (dist > 5 && dist <= 15) {
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 30)
            luz.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (dist <= 5) {
            wuKong.stopMotor(wuKong.MotorList.M1)
            luz.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})
