export class GumballMachine {
    static readonly NO_QUARTER: number = 1;
    static readonly SOLD_OUT: number = 2;
    static readonly HAS_QUARTER: number = 3;
    static readonly SOLD: number = 4;
    state: number = GumballMachine.SOLD_OUT;
    count:number = 0;

    constructor(_count:number){
        this.count = _count;
        if(this.count)
            this.state = GumballMachine.NO_QUARTER;
    }
    insertQuarter():void{
        console.log("\x1b[1m" , "user try to insert quarter:" , "\x1b[1m" , "\x1b[0m")
        switch(this.state){
            case GumballMachine.HAS_QUARTER :
                console.log("you can`t insert another quarter");
            break;
            case GumballMachine.NO_QUARTER :
                this.state = GumballMachine.HAS_QUARTER;
                console.log("you inserted a quarter");
            break;
            case GumballMachine.SOLD_OUT :
                console.log("you can't insert a quarter, the machine sold out");
            break;
            case GumballMachine.SOLD :
                console.log("Please wait , we're already giving you a gumball");
        }

    }

    ejectQuarter():void{
        console.log("\x1b[1m" , "user try to eject quarter:" , "\x1b[1m" , "\x1b[0m")
        switch(this.state){
            case GumballMachine.HAS_QUARTER :
                this.state = GumballMachine.NO_QUARTER
                console.log("Quarter returned");
            break;
            case GumballMachine.NO_QUARTER :
                console.log("You haven't inserted a quarter");
            break;
            case GumballMachine.SOLD_OUT :
                console.log("you can't eject, You haven't inserted a quarter yet");
            break;
            case GumballMachine.SOLD :
                console.log("Sorry, you already turned the cranck");
        }
    }

    turnCrank():void{
        console.log("\x1b[1m" , "user start turning the crank: " , "\x1b[1m" , "\x1b[0m")
        switch(this.state){
            case GumballMachine.HAS_QUARTER :
                console.log("You turned, please wait ...");
                this.state = GumballMachine.SOLD;
            break;
            case GumballMachine.NO_QUARTER :
                console.log("Sorry, you need to insert quarter");
            break;
            case GumballMachine.SOLD_OUT :
                console.log("Sorry , but there are no gumballs");
            break;
            case GumballMachine.SOLD :
                console.log("Turning twice dosen't get you another gumball!");
        }
    }

    dispenseGumball():void{
        console.log("\x1b[1m" , "gumball dispense starts: " , "\x1b[1m" , "\x1b[0m")
        switch(this.state){
            case GumballMachine.HAS_QUARTER :
                console.log("Please turn crack to get your gumball");
            break;
            case GumballMachine.NO_QUARTER :
                    console.log("Please insert a quarter first");
            break;
            case GumballMachine.SOLD_OUT :
                console.log("you can`t insert a quarter, the machine sold out");
            break;
            case GumballMachine.SOLD :
                console.log("gumball comes rolling out the slot");
                this.count--;
                if(this.count)
                    this.state = GumballMachine.NO_QUARTER
                else {
                    this.state = GumballMachine.SOLD_OUT;
                    console.log("Oops , out of gumballs")
                }
            }
    }

}