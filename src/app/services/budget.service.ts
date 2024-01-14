import { Injectable } from '@angular/core';
import { BudgetOptions } from '../interfaces/budgetOptions.interface';

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
      description: "Programació d'una pàgina web completa",
      price: 500
    }

  ]
}
