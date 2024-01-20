import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget.service';
import { BudgetOptions } from '../interfaces/budgetOptions.interface';
import { PanelComponent } from '../panel/panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ReactiveFormsModule, PanelComponent, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  public options: BudgetOptions[] = this.budgetOptions.budgetOptions;
  public totalBudget: number = 0;
 // public status: boolean [] = [false];

  public checkBoxForm : FormGroup = this.fb.group({
    box1: [false],
    box2: [false],
    box3: [false],
  });

  constructor(
    public fb: FormBuilder,
    public budgetOptions: BudgetService
    ) {}

}
