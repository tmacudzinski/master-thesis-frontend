import {Variant} from './variant';

export class Question {
  constructor(
    public id?: number,
    public content?: string,
    public duration?: number,
    public image?: string,
    public open?: boolean,
    public answerVariants?: Variant[]
  ) {}
}
