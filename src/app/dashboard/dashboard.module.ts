import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { ThrowStmt } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {
}
