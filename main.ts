//% weight=0 color=#3CB371 icon="\uf0ad" block="JoyStick"
namespace JoyStick {
    //% blockId="x" block="X axis" weight=0
    export function x(): number {
        return pins.analogReadPin(AnalogPin.P2)
    }
    //% blockId="y" block="Y axis" weight=1
    export function y(): number {
        return pins.analogReadPin(AnalogPin.P1)
    }
        //% blockId="c" block="Button C" weight=4
    export function c(): number {
        return pins.digitalReadPin(DigitalPin.P15)
    }
        //% blockId="d" block="Button D" weight=5
    export function d(): number {
        return pins.digitalReadPin(DigitalPin.P14)
    }
        //% blockId="e" block="Button E" weight=6
    export function e(): number {
        return pins.digitalReadPin(DigitalPin.P13)
    }
        //% blockId="f" block="Button F" weight=7
    export function f(): number {
        return pins.digitalReadPin(DigitalPin.P12)
    }
            //% blockId="a" block="Button A" weight=2
    export function a(): number {
        return pins.digitalReadPin(DigitalPin.P5)
    }
            //% blockId="b" block="Button B" weight=3
    export function b(): number {
        return pins.digitalReadPin(DigitalPin.P11)
    }
    //% blockId="motor" block="Start vibration motor %value" weight=8
    export function motor(value: number) {
       pins.digitalWritePin(DigitalPin.P16, value)
    }
}
