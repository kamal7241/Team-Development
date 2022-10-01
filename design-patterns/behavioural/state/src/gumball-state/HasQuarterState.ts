import { GumballMachine } from './../gumball-machine/GumballMachine';
import { GumballState } from './GumballState';
export class HasQuarterState implements GumballState {
    private gumballMachine:GumballMachine;    
    constructor(_gumballMachine : GumballMachine ){
        this.gumballMachine = _gumballMachine;
    }
    insertQuarter(){
        console.log("\x1b[1m" , "user start inserting a quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("you can`t insert another quarter");
    }
    ejectQuarter(){
        console.log("\x1b[1m" , "user start ejecting quarter: " , "\x1b[1m" , "\x1b[0m")
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
        console.log("Quarter returned");

    }
    turnCrank(){
        console.log("\x1b[1m" , "user start turning the crank: " , "\x1b[1m" , "\x1b[0m")
        console.log("You turned, please wait ...");
        let winner:number =  Math.floor(Math.random() * 10);
        if(winner == 0 && this.gumballMachine.getCount() > 1 ){
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else
        this.gumballMachine.setState(this.gumballMachine.getSoldState())
    }
    dispenseGumball(){
        console.log("\x1b[1m" , "gumball dispense starts: " , "\x1b[1m" , "\x1b[0m")
        console.log("Please turn crack to get your gumball");
    }

}