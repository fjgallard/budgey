import { Component, OnInit } from '@angular/core';
import { Budget } from '@interfaces/budget.interface';
import { BudgetFacade } from '@services/facades/budget.facade';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.page.html',
  styleUrls: ['./budgets.page.scss'],
})
export class BudgetsPage implements OnInit {

  constructor(private budgetFacade: BudgetFacade) {
    this.budgets$.subscribe(budgets => console.log(budgets));
  }

  get budgets$() {
    return this.budgetFacade.budgets$;
  }

  ngOnInit() {
  }

  addBudget(budget: Budget) {
    return this.budgetFacade.createBudget(budget);
  }

}
