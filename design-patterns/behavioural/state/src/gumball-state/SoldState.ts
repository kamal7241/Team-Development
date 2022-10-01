import { GumballMachine } from './../gumball-machine/GumballMachine';
import { GumballState } from './GumballState';
export class SoldState implements GumballState {
    private gumballMachine:GumballMachine;    
    constructor(_gumballMachine : GumballMachine ){
        this.gumballMachine = _gumballMachine;
    }
    insertQuarter(){
        console.log("\x1b[1m" , "user start inserting a quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" , "Please wait , we're already giving you a gumball" , "\x1b[31m");
    }
    ejectQuarter(){
        console.log("\x1b[1m" , "user start ejecting quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" , "Sorry, you already turned the cranck" , "\x1b[31m");
    }
    turnCrank(){
        console.log("\x1b[1m" , "user start turning the crank: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" , "Turning twice dosen't get you another gumball!" , "\x1b[31m");
    }
    dispenseGumball(){
        console.log("\x1b[1m" , "gumball dispense starts: " , "\x1b[1m" , "\x1b[0m")
        this.gumballMachine.releaseBall();
        if(this.gumballMachine.getCount())
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldoutState());
            console.log("Oops , out of gumballs")
        }
    }

}