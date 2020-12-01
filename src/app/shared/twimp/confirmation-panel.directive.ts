import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tweempusConfirmationPanel]'
})

export class ConfirmationPanelDirective {

  @Input('confirm') execFunction: Function;

  @HostListener('click', ['$event'])
  onClick() {
    const confirmed = window.confirm('Esas seguro?');
    if (confirmed)
      this.execFunction();
  }


}
