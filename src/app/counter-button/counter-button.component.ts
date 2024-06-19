import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../counter.actions';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css',
})
export class CounterButtonComponent {
  // @Output()
  // incrementEvent = new EventEmitter();

  // @Output()
  // decrementEvent = new EventEmitter();

  // onIncrementHandler() {
  //   this.incrementEvent.emit();
  // }

  // onDecrementHandler() {
  //   this.decrementEvent.emit();
  // }


  private store = inject(Store);

  onIncrementHandler() {
    this.store.dispatch(increment());
  }

  onDecrementHandler() {
    this.store.dispatch(decrement());
  }
}
