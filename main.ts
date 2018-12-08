//% weight=0 color=#3CB371 icon="\uf0ad"
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
     //% blockId=getXY block="Joystick's  %joystickXY"
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
                return pins.digitalReadPin(DigitalPin.P5);
            case button.B:
                return pins.digitalReadPin(DigitalPin.P11);
            case button.C:
                return pins.digitalReadPin(DigitalPin.P15);
            case button.D:
                return pins.digitalReadPin(DigitalPin.P14);
            case button.E:
                return pins.digitalReadPin(DigitalPin.P13);
            case button.F:
                return pins.digitalReadPin(DigitalPin.P12);
            case button.SW:
                return pins.digitalReadPin(DigitalPin.P8);
        }
    }
    
       export enum motor {
               //% block="OFF"
               OFF=0,
               //% block="ON"
               ON=1
       }
        
    //% blockId="motor" block="Start vibration motor %value" 
    //% weight=8
    export function setmotor(value: motor) {
       pins.digitalWritePin(DigitalPin.P16, value)
    }
}
