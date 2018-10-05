//% weight=0 color=#3CB371 icon="\uf0ad" block="JoyStick"
namespace JoyStick {
    //% blockId="x" block="X axis"
    export function x(): number {
        return pins.analogReadPin(AnalogPin.P2)
    }
    //% blockId="y" block="Y axis"
    export function y(): number {
        return pins.analogReadPin(AnalogPin.P1)
    }
        //% blockId="c" block="Button C"
    export function c(): number {
        return pins.digitalReadPin(DigitalPin.P15)
    }
        //% blockId="d" block="Button D"
    export function d(): number {
        return pins.digitalReadPin(DigitalPin.P14)
    }
        //% blockId="e" block="Button E"
    export function e(): number {
        return pins.digitalReadPin(DigitalPin.P13)
    }
        //% blockId="f" block="Button F"
    export function f(): number {
        return pins.digitalReadPin(DigitalPin.P12)
    }
            //% blockId="a" block="Button A"
    export function a(): number {
        return pins.digitalReadPin(DigitalPin.P5)
    }
            //% blockId="b" block="Button B"
    export function b(): number {
        return pins.digitalReadPin(DigitalPin.P11)
    }
    //% blockId="motor" block="Start vibration motor %value"
    export function motor(value: number) {
       pins.digitalWritePin(DigitalPin.P16, value)
    }
}
