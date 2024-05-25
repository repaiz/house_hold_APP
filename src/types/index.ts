export type TransactionType = "income" | "expense";

export type IncomeCategory = "給与" | "副収入" | "各種手当";
export type ExpenseCategory = "食料" | "外食" | "日用品"| "交際費"| "買い物"| "娯楽"| "交通費"| "光熱費";


export interface Transaction {
    id: string,
    date: string,
    amount: number,
    content: string,
    type: TransactionType,
    category: IncomeCategory | ExpenseCategory,

}

export interface Balance {
    income: number,
    expense: number,
    balance: number,
}

export interface CalenderContent {
    start: string,
    income: string,
    expense: string,
    balance: string,
}