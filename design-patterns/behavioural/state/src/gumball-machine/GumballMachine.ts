import { WinnerState } from './../gumball-state/WinnerState';
import { SoldoutState } from './../gumball-state/SoldoutState';
import { NoQuarterState } from './../gumball-state/NoQuarterState';
import {  HasQuarterState } from '../gumball-state/HasQuarterState';
import { GumballState } from './../gumball-state/GumballState';
import { SoldState } from '../gumball-state/SoldState';
export class GumballMachine {
    private hasQuarterState:GumballState;
    private noQuarterState:GumballState;
    private soldoutState:GumballState;
    private soldState:GumballState;
    private winnerState:GumballState;
    private state: GumballState;
    private count:number = 0;

    constructor(_count:number){
        this.hasQuarterState = new HasQuarterState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.soldoutState = new SoldoutState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);
        this.state = this.soldoutState;
        this.count = _count;
        if(this.count)
            this.state = this.noQuarterState;
    }


    insertQuarter():void{
        this.state.insertQuarter();
    }

    ejectQuarter():void{    
        this.state.ejectQuarter();
    }

    turnCrank():void{
        this.state.turnCrank();
    }

    dispenseGumball():void{
        this.state.dispenseGumball();
    }

    releaseBall(){
        console.log("gumball comes rolling out the slot");
        this.count--;
    }
    /* setters */
    setState(_state:GumballState){
        this.state = _state;
    }
    /* getters */
    getState():GumballState{
        return this.state;
    }
    getHasQuarterState():GumballState{
        return this.hasQuarterState;
    }
    getNoQuarterState():GumballState{
        return this.noQuarterState;
    }
    getSoldoutState():GumballState{
        return this.soldoutState;
    }
    getSoldState():GumballState{
        return this.soldState;
    }
    getWinnerState():GumballState{
        return this.winnerState;
    }
    getCount():number{
        return this.count;
    }
}