input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(1000)
    SuperBit.MotorStopAll()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.EigthNote)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -20)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 70)
    basic.pause(800)
    SuperBit.MotorStopAll()
    music.setVolume(255)
    music.playMelody("C F G A G A A F ", 60)
    music.playMelody("F G C5 C5 C5 - G - ", 60)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sword)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(1000)
    SuperBit.MotorStopAll()
})
basic.showIcon(IconNames.Yes)
