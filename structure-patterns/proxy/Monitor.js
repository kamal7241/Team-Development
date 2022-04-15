export class Monitor {
    constructor(machine){
        this.machine = machine;
    }
    report(){
      console.log(`gumball in ${this.machine.location} have ${this.machine.count} gums`);
    }
}