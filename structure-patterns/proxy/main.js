import { GumballMachine } from "./GumballMachine.js";
import { MachineProxy } from "./MachineProxy.js";
import { Monitor } from "./Monitor.js";
// machine
// const gumballMachine = new GumballMachine("same machine" , 100);
const machine1 = new MachineProxy("room1").machine;
const monitor = new Monitor(machine1);
monitor.report();
