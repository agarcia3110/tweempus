import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { ConfirmationPanelDirective } from './twimp/confirmation-panel.directive';
import { NumberPrefixPipe } from './twimp/number-prefix.pipe';
import { YellowBackgroundDirective } from './twimp/yellow-background.directive';

@NgModule({
  declarations: [TwimpCardComponent, TwimpListComponent, ConfirmationPanelDirective, NumberPrefixPipe, YellowBackgroundDirective ],
  imports: [
    CommonModule
  ],
  exports: [
    TwimpCardComponent,
    TwimpListComponent
  ]
})

export class SharedModule { }
