import { GumballMachine } from './src/gumball-machine/GumballMachine';
const gumballMachine = new GumballMachine(20);

let arr:number[] = [];
arr.length = 20;
arr.fill(1)
arr.forEach(()=>{
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.dispenseGumball();
})
