import { Input, Output, Directive, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModelRx]'
})
export class NgModelRx extends NgModel{
  @Input('ngModelRx') ngModel;
  @Output('ngModelRxChange') update = new EventEmitter();
}
