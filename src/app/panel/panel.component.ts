import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {

  @Output()
  webPrice: EventEmitter<number> = new EventEmitter();

  public panelForm: FormGroup = this.fb.group({
    nPages: [1, [Validators.required, Validators.min(1)]],
    nLanguages: [1, [Validators.required, Validators.min(1)]],
  })

  constructor(
    public fb: FormBuilder,
    public budgetService: BudgetService,
  ) {};

  ngOnInit(): void {
    this.panelForm.setValue({
      nPages: 1,
      nLanguages: 1
    });


  }

}
