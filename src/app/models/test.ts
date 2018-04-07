import {Question} from './question';

export class Test {
  constructor(
   public id?: number,
   public name?: string,
   public duration?: number,
   public questions?: Question[]
  ) {}
}
