import { GumballMachine } from '../gumball-machine/GumballMachine';
import { GumballState } from './GumballState';
export class SoldoutState implements GumballState {
    private gumballMachine:GumballMachine;    
    constructor(_gumballMachine : GumballMachine ){
        this.gumballMachine = _gumballMachine;
    }
    insertQuarter(){
        console.log("\x1b[1m" , "user start inserting a quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" ,"you can't insert a quarter, the machine sold out" , "\x1b[0m");
    }
    ejectQuarter(){
        console.log("\x1b[1m" , "user start ejecting quarter: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" , "you can't eject, You haven't inserted a quarter yet" ,  "\x1b[0m");
    }
    turnCrank(){
        console.log("\x1b[1m" , "user start turning the crank: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" , "Sorry , but there are no gumballs" ,  "\x1b[0m");
    }
    dispenseGumball(){
        console.log("\x1b[1m" , "gumball dispense starts: " , "\x1b[1m" , "\x1b[0m")
        console.log("\x1b[31m" , "you can`t insert a quarter, the machine sold out" ,  "\x1b[0m");
    }

}