import { Injectable } from '@angular/core';

import {
  Budget,
  BudgetRecurrence
} from '@interfaces/budget.interface';

import {
  Observable,
  of
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  all(): Observable<Budget[]> {
    return of([
      {
        id: '1',
        name: 'Food',
        amount: 1000,
        recurrence: BudgetRecurrence.monthly
      },
      {
        id: '2',
        name: 'Transportation',
        amount: 1000,
        recurrence: BudgetRecurrence.monthly
      }
    ]);
  }
}
