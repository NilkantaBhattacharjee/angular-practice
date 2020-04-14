import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('alias-is-favourite') isFavourite: boolean;

  @Output() change = new EventEmitter();

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  onClickMeButton() {
    this.count++;
    this.isFavourite = !this.isFavourite;
    this.change.emit({count: this.count, anotherCount: 10});
  }

}
