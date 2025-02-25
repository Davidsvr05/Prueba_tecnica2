import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  newTransaction: Transaction = { user_id: 0, amount: 0, type: 'deposit' };
  userId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['userId'];
    this.newTransaction.user_id = this.userId;
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService
      .getTransactionsByUser(this.userId)
      .subscribe((transactions) => (this.transactions = transactions));
  }

  createTransaction(): void {
    this.transactionService
      .createTransaction(this.newTransaction)
      .subscribe((transaction) => {
        this.transactions.push(transaction);
        this.newTransaction = { user_id: this.userId, amount: 0, type: 'deposit' };
      });
  }
}