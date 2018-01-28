export class CounterService {

  count: Number = 0;

  countActions(){
    this.count++;
    console.log("The count is: " + this.count);
  }
}
