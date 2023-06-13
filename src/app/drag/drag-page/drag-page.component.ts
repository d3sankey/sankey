import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-page',
  templateUrl: './drag-page.component.html',
  styleUrls: ['./drag-page.component.scss']
})
export class DragPageComponent implements OnInit {
onSelect($event: Event) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
