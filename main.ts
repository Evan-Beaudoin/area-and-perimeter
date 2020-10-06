// Created by: Evan
// Created on: Oct. 2020
// 
// This program calculates area and perimeter of a rectangle
game.splash("Let's calculate the area and perimeter of a rectangle")
let Width = game.askForNumber("Enter the length of rectangle (cm)")
let Length = game.askForNumber("Enter the width of rectangle (cm)")
let Perimeter = Length * 2 + Width * 2
game.splash("The perimeter of rectangle dimensions: " + Length + " cm by " + Width + " cm = " + convertToText(Perimeter) + " cm")
let Area = Length * Width
game.splash("The area of rectangle dimensions: " + Length + " cm by " + Width + " cm = " + convertToText(Area) + " cm")
game.splash("Done")
