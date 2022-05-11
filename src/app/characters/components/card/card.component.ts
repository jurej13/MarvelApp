import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() characters !: Result[]
  constructor() { }

  ngOnInit(): void {
  }

}
