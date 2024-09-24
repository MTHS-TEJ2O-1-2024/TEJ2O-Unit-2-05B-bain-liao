"""
Created by: Bain Liao
Created on: Sep 2024
This module figures out the temperature
"""

from microbit import *
from time import sleep

display.clear()
display.show(Image.HAPPY)
sleep(1)

while True:
    if button_a.is_pressed():
        find_temperature = input.temperature()
        find_temperature_kelvin = find_temperature + 273.15
        find_temperature_kelvin = round(find_temperature_kelvin)
        display.clear()
        display.show("The temperature is:")
        display.show(str(find_temperature_kelvin))
        display.show("K.")
        display.show(Image.HAPPY)
