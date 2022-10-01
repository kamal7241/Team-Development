import { GumballMachine } from '../gumball-machine/GumballMachine';
import { GumballState } from './GumballState';
export class NoQuarterState implements GumballState {
    private gumballMachine:GumballMachine;    
    constructor(_gumballMachine : GumballMachine ){
        this.gumballMachine = _gumballMachine;
    }
    insertQuarter(){
        console.log("\x1b[1m" , "user start inserting a quarter: " , "\x1b[1m" , "\x1b[0m")
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState() );
        console.log("you inserted a quarter");
    }
    ejectQuarter(){
        console.log("\x1b[1m" , "user start ejecting quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("You haven't inserted a quarter");

    }
    turnCrank(){
        console.log("\x1b[1m" , "user start turning the crank: " , "\x1b[1m" , "\x1b[0m")
        console.log("Sorry, you need to insert quarter");

    }
    dispenseGumball(){
        console.log("\x1b[1m" , "gumball dispense starts: " , "\x1b[1m" , "\x1b[0m")
        console.log("Please insert a quarter first");
    }

}