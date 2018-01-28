export class CounterService {

  count: number = 0;

  countActions(){
    this.count++;
    console.log("The count is: " + this.count);
  }
}
