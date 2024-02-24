import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  shuffle(arr: string[]): string[] {
    return arr.sort(() => Math.random() - 0.5);
  }

}
