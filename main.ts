input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        number_1 += 1
        basic.showNumber(number_1)
    }
    if (_switch == 1) {
        number_2 += 1
        basic.showNumber(number_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (_switch == 0) {
        _switch += 1
        number_1 = number_1
        basic.clearScreen()
    }
    if (_switch == 1) {
        basic.showNumber(number_2)
        basic.showString("and")
        basic.showNumber(number_1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (_switch == 0) {
        number_1 += -1
        basic.showNumber(number_1)
    }
    if (_switch == 1) {
        number_2 += -1
        basic.showNumber(number_2)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number_1 = 0
    number_2 = 0
    basic.showIcon(IconNames.Heart)
})
let _switch = 0
let number_2 = 0
let number_1 = 0
basic.showIcon(IconNames.Skull)
number_1 = 0
number_2 = 0
_switch = 0
