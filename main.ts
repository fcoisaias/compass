let Brújula = 0
basic.forever(function () {
    Brújula = input.compassHeading()
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showIcon(IconNames.House)
    basic.pause(5000)
    if (Brújula == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (Brújula == 180) {
        basic.showArrow(ArrowNames.South)
    } else if (Brújula == 90) {
        basic.showArrow(ArrowNames.East)
    } else if (Brújula == 270) {
        basic.showArrow(ArrowNames.West)
    } else if (Brújula >= 1 && Brújula <= 89) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (Brújula >= 91 && Brújula <= 179) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (Brújula >= 181 && Brújula <= 269) {
        basic.showArrow(ArrowNames.SouthWest)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
    basic.pause(5000)
})
