import { GumballMachine } from '../gumball-machine/GumballMachine';
import { GumballState } from './GumballState';
export class WinnerState implements GumballState {
    private gumballMachine:GumballMachine;    
    constructor(_gumballMachine : GumballMachine ){
        this.gumballMachine = _gumballMachine;
    }
    insertQuarter(){
        console.log("\x1b[1m" , "user start inserting a quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("Please wait , we're already giving you a gumball");
    }
    ejectQuarter(){
        console.log("\x1b[1m" , "user start ejecting quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m","Sorry, you already turned the crank", "\x1b[31m");
    }
    turnCrank(){
        console.log("\x1b[1m" , "user start turning the crank: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" , "Turning twice dosen't get you another gumball!" , "\x1b[31m");
    }
    dispenseGumball(){
        console.log("\x1b[1m" , "gumball dispense starts: " , "\x1b[1m" , "\x1b[0m")
        this.gumballMachine.releaseBall();
        if(this.gumballMachine.getCount() == 0 ){
            this.gumballMachine.setState(this.gumballMachine.getSoldoutState());
        } else {
            this.gumballMachine.releaseBall();
            console.log("\x1b[32m" , "You 'RE A WINNER! you got two gumballs for your quarter" , '\x1b[0m' );
            if(this.gumballMachine.getCount())
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            else {
                this.gumballMachine.setState(this.gumballMachine.getSoldoutState());
                console.log("Oops , out of gumballs")
            }
        }
    }

}