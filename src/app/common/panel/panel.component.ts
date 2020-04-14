import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() headerPanelName: string;
  @Input() bodyPanelName: string;

  constructor() { }

  ngOnInit() {
  }

}
