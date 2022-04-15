import { GumballMachine } from "./GumballMachine.js";

export class MachineProxy {
    machine;
    constructor(location){
        this.getMachine(location);
    }
    getMachine(location){
        this.machine =  fetch('/machine/1').getMachine();
    }
}

 const fetchData = async()=> {
   let res = await  fetch('/getAll');
   return res;
}

const data = fetchData()