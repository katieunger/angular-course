export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactiveCounter(){
    this.activeToInactiveCounter++;
    console.log("The active to inactive count is: " + this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCounter(){
    this.inactiveToActiveCounter++;
    console.log("The active to inactive count is: " + this.inactiveToActiveCounter);
  }
}
