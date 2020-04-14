import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('alias-is-favourite') isFavourite: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClickMeButton() {
    this.isFavourite = !this.isFavourite;
  }

}
