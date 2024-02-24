import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: 'getAnswer'
})
export class getAnswerPipe implements PipeTransform {
  transform(value: string): number {
    const splitString = value.split(' ');

    return +splitString[0] - +splitString[2];
  }
}
