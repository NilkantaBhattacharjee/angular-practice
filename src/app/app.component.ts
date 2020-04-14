import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  count = 0;

  title = 'Angular Practice';
  text = `In the interest of public health and to ensure the well-being of
  our employees and partners Siemens Stiftung is reducing direct person-to-person
  contact to help stop the spread of the COVID-19 pandemic. We will continue
  working – mostly online – to advance the foundation’s issues and projects.
  As a foundation active internationally, these measures apply globally.`;

  post = {
    title: 'Title',
    isFavourite: true
  };

  getCount(dataFromFavouriteComponent) {
    this.count = dataFromFavouriteComponent.count;
    console.log('Clicked me button was clicked' + dataFromFavouriteComponent.anotherCount);
  }
}
