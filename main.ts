//% weight=0 color=#3CB371 icon="\uf0ad" block="JoyStick"
namespace JoyStick {
        export enum button {
        //% block="A"
        A,
        //% block="B"
        B,
        //% block="C"
        C,
        //% block="D"
        D,
        //% block="E"
        E,
        //% block="F"
        F,
        //% block="SW"
        SW
   }
       export enum XY {
        //% block="X"
        X,
        //% block="Y"
        Y
    } 

    //% blockId=buttonclick block="on button | %which_button | pressed"
    //% weight=70  blockInlineInputs=true
    export function buttonclick(which_button: button): void {

    }
     //% blockId=getXY block="joystick's  %joystickXY"
    //% weight=100
    export function getXY(joystickXY: XY): number {
        switch (joystickXY) {
            case XY.X: 
                return (1023 - pins.analogReadPin(AnalogPin.P2));
            case XY.Y: 
                return pins.analogReadPin(AnalogPin.P1);
        }
    }
    
    //% blockId="getbutton" block="value of JoyStick button %ABCDEF" 
    //% weight=0
    export function getbutton(ABCDEF: button): number {
        switch (ABCDEF){
            case button.A:
                return pins.analogReadPin(AnalogPin.P5);
            case button.B:
                return pins.analogReadPin(AnalogPin.P11);
            case button.C:
                return pins.analogReadPin(AnalogPin.P15);
            case button.D:
                return pins.analogReadPin(AnalogPin.P14);
            case button.E:
                return pins.analogReadPin(AnalogPin.P13);
            case button.F:
                return pins.analogReadPin(AnalogPin.P12);
            case button.SW:
                return pins.analogReadPin(AnalogPin.P8);
        }
    }

    //% blockId="motor" block="Start vibration motor %value" weight=8
    export function motor(value: number) {
       pins.digitalWritePin(DigitalPin.P16, value)
    }
}
