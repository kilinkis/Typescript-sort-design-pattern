import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {

  constructor (public data: number[]) {
    super();
  }

  get length(): number { // the `get` keyword allows us to invoke this method without using parenthesis at the end, that means, access it as if it was a property
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number):boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}