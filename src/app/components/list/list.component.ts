import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() section: string = '';
@Input() total_questions: number | string | number[]= '';
@Input() answered: number = 0;
@Input() listClass: any;
  constructor() {}

  ngOnInit(): void {
  }



}
