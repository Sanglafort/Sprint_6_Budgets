import { Injectable } from '@angular/core';
import { BudgetOptions } from '../interfaces/budgetOptions.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public budgetOptions: BudgetOptions[] = [
    {
      title: 'Seo',
      description: "Programació d'una campanya de SEO completa",
      price: 300
    },
    {
      title: 'Ads',
      description: "Programació d'una campanya de publicitat completa",
      price: 400
    },
    {
      title: 'Web',
      description: "Programació d'una pàgina web responsive completa",
      price: 500
    }
  ];

  private _extrasSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public extras$ = this._extrasSubject.asObservable();

  get extras(): number {
    return this._extrasSubject.value;
  }

  public calculateTotalPrice(nPages: number, nLanguages: number): number {
    const extras = nPages * nLanguages * 30;
    this._extrasSubject.next(extras);
    return extras;
  }

  //public budgetList = signal <Budget[]>([]);


}
