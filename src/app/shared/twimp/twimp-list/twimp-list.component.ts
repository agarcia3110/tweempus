import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Twimp } from '../twimp.model';
import { Author} from '../../author/author.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css']
})

export class TwimpListComponent implements OnInit {

  @Input() fraseHijo: string;
  @Output() eventoHijo = new EventEmitter();

  hola() {
    this.eventoHijo.emit("Frase del Hijo, juanito");
  }

  text: string = "Texto largo...";
  twimps: Twimp[] = [];
  authors: Author[] = [];

  ngOnInit() {
    this.authors.push(new Author('1', 'url', 'authorName', '../../../../assets/images/google-icon.png'));
    this.authors.push(new Author('2', 'urlAlfredo', 'Alfredo', '../../../../assets/images/google-icon.png'));
    this.twimps.push(new Twimp('1', '', this.authors[0], this.text, '01/01/2001', true));
    this.twimps.push(new Twimp('2', '', this.authors[1], this.text, '01/01/2001', true));
    this.twimps.push(new Twimp('3', '', this.authors[0], this.text, '01/01/2001', true));
    this.twimps.push(new Twimp('4', '', this.authors[0], this.text, '01/01/2001', false));
  }

}
