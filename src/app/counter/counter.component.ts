import { Component, OnInit, inject } from '@angular/core';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterButtonComponent, CounterOutputComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 

  // counter: number = 0;

  // onIncrement(){
  //   this.counter++;
  // }

  // onDecrement(){
  //   this.counter--;
  // }



}
