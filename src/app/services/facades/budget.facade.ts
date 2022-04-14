import { Injectable } from '@angular/core';
import { Budget } from '@interfaces/budget.interface';
import { BudgetService } from '@services/database/mock/budget.service';

import {
  BehaviorSubject,
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetFacade {

  budgets$: Observable<Budget[]>;

  private $budgets = new BehaviorSubject<Budget[]>(undefined);

  constructor(private budgetService: BudgetService) {
    this.budgets$ = this.$budgets.asObservable();
  }

  loadBudgets() {
    this.budgetService.all().subscribe(budgets => {
      this.$budgets.next(budgets);
    });
  }

  createBudget(budget: Budget) {
    return this.budgetService.create(budget);
  }

  updateBudget(budget: Budget) {
    return this.budgetService.update(budget);
  }

  deleteBudget(id: string) {
    return this.budgetService.delete(id);
  }

  reset() {
    this.$budgets.next(null);
  }
}
