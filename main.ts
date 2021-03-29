input.onButtonPressed(Button.A, function () {
    radio.sendString("E")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("S")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("F")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("W")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("G")
})
radio.setGroup(11)
basic.showIcon(IconNames.Angry)
basic.clearScreen()
