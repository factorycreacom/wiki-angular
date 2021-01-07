import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('title') title: string;
  @Input('image') image: string;
  @Input('description') description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
