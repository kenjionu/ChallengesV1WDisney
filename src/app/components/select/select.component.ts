import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Option } from 'src/app/interfaces/options';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{
  @Input() data:any = '';
  dataOutput: Option[] = []
  options: Option[] = [];
  selectedOption!: Option;
  @Output() valueResponse = new EventEmitter<any>();


  constructor(){

  }

  ngOnInit(): void {
      this.dataOutput = this.data.choiceOptions
  }

  onSelect(event: Event): void {
    console.log("[Questions ID]: ", this.data.id, "[Options Questions ID]: ", this.selectedOption.id, "[Options Value]: ", this.selectedOption.value, "[Options Label]: ", this.selectedOption.label);
    this.valueResponse.emit(this.selectedOption.value)

  }
}
