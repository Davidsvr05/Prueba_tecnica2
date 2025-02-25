import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Ruta por defecto
  { path: 'users', component: UserListComponent }, // Ruta para la lista de usuarios
  { path: 'transactions/:userId', component: TransactionListComponent }, // Ruta para la lista de transacciones
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}