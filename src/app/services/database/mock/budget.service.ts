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

  private budgets: Budget[] = [
    {
      id: '1',
      name: 'Food',
      amount: 1000,
      recurrence: BudgetRecurrence.monthly,
      order: 1
    },
    {
      id: '2',
      name: 'Transportation',
      amount: 1000,
      recurrence: BudgetRecurrence.monthly,
      order: 2
    }
  ];

  constructor() { }

  all(): Observable<Budget[]> {
    return of(this.budgets);
  }

  create(budget: Budget) {
    this.budgets.push(budget);
  }

  read(id: string) {
    return of(this.budgets.filter(budget => budget.id === id)[0]).toPromise();
  }

  update(budget: Budget) {
    const budgetToUpdate = this.budgets.filter(obj => obj.id === budget.id)[0];
    const index = this.budgets.indexOf(budgetToUpdate);
    return of(this.budgets[index] = budget);
  }

  delete(id: string) {
    const budgetToDelete = this.budgets.filter(budget => budget.id === id)[0];
    const index = this.budgets.indexOf(budgetToDelete);
    return of(delete this.budgets[index]).toPromise();
  }
}
