import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetService } from '../services/budget.service';
import { BudgetOptions } from '../interfaces/budgetOptions.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public options: BudgetOptions[] = this.budgetOptions.budgetOptions;

  public status: boolean [] = [false];

  public checkBoxForm : FormGroup = this.fb.group({
    box1: [false, [ Validators.required, Validators.requiredTrue ]],
    box2: [false, [ Validators.required, Validators.requiredTrue ]],
    box3: [false, [ Validators.required, Validators.requiredTrue ]],
  });

  constructor(
    public fb: FormBuilder,
    public budgetOptions: BudgetService
    ) {}

}
