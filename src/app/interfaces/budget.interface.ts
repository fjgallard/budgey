export interface Budget {
  id: string;
  name: string;
  amount: number;
  recurrence: BudgetRecurrence;
  order: number;
}

export enum BudgetRecurrence {
  monthly, weekly, daily,
  specific, none
}
