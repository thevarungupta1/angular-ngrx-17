import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  // @Input()
  // counterChild: number = 0

  private store = inject(Store);
  counter?: Observable<number>;

  constructor(){
    this.counter = this.store.select('counter');
    console.log(this.counter)
  }
}
