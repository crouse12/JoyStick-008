//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    //% blockId="x" block="x"
    export function x(): number {
        return pins.analogReadPin(AnalogPin.P2);
    }
    //% blockId="y" block="Y"
    export function y(): number {
        return pins.analogReadPin(AnalogPin.P1);
    }
}
