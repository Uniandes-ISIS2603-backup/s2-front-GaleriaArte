import { Feedback } from './../feedback/feedback';
import { Paintwork } from './paintwork';

export class PaintworkDetail extends Paintwork{

    /**
     * reviews del la obra
     */
    feedbacks : Feedback[];
}