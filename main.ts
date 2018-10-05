//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    //% blockId="x" block="x"
    export function x(): number {
        return pins.analogReadPin(AnalogPin.P2)
    }
    //% blockId="y" block="Y"
    export function y(): number {
        return pins.analogReadPin(AnalogPin.P1)
    }
        //% blockId="c" block="C"
    export function c(): number {
        return pins.digitalReadPin(DigitalPin.P15)
    }
        //% blockId="d" block="D"
    export function d(): number {
        return pins.digitalReadPin(DigitalPin.P14)
    }
        //% blockId="e" block="E"
    export function e(): number {
        return pins.digitalReadPin(DigitalPin.P13)
    }
        //% blockId="f" block="F"
    export function f(): number {
        return pins.digitalReadPin(DigitalPin.P12)
    }
}
