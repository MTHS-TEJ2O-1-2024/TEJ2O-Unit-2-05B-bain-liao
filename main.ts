/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Sep 2024
 * This program finds out the temperature in kelvin.
*/

let findTemperature: number
let findTemperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
pause(1000)

input.onButtonPressed(Button.A, function () {
    findTemperature = input.temperature()
    findTemperatureKelvin = (findTemperature + 273.15)
    findTemperatureKelvin = Math.round(findTemperatureKelvin)
   
   basic.clearScreen()
    basic.showString('The temperature is:' + findTemperatureKelvin.toString() + 'K.')
    basic.showIcon(IconNames.Happy)
})