import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[tweempusYellowBackground]'
})

export class YellowBackgroundDirective {

  @HostListener('click',['$event'])

  onClick() {
    alert('Click');
    // let styles = {
    //   'background': 'red'
    // };
    // return styles;
  }
}
