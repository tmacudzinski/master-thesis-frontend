import {Question} from './question';

export class Category {
  constructor(
    public id?: number,
    public name?: string,
    public numberOfQuestions?: number,
    public questions?: Question[]
  ) {}
}
