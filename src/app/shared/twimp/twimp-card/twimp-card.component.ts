import { Component, Input, OnInit } from '@angular/core';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})

export class TwimpCardComponent implements OnInit {

  @Input() twimp: Twimp;

  selected: string = "";

  ngOnInit() {
    if (this.twimp.favorite)
      this.selected = "fav_icon-selected";

  }

  favorite(): void {
    this.twimp.favorite = !this.twimp.favorite;
    if (this.twimp.favorite)
      this.selected = "fav_icon-selected";
    else
      this.selected = "";

  }

}
