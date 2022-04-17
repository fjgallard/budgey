import { Component } from '@angular/core';
import { BudgetFacade } from '@services/facades/budget.facade';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private budgetFacade: BudgetFacade) {
    this.loadServices();
  }

  private loadServices() {
    this.budgetFacade.loadBudgets();
  }
}
