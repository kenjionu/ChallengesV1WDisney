import { QuestionsService } from 'src/app/services/questions.service';
import { SectionsService } from './../../services/sections.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  section: any = [];
  question: any = [];
  isOpen: boolean = false;
  constructor(
    private _sectionsService: SectionsService,
    private _questionsService: QuestionsService) { }
  ngOnInit(): void {
    this._sectionsService.getAllSectionsServices().then((sections) => {
      this.section = sections[0]
      this.getQuestionsById();
    })
  }

  getQuestionsById(){
    this._questionsService.getAllQuestionsServices().then((questions) => {
      this.question = questions[0]
    })
  }

  onIsOpen(){
    this.isOpen = !this.isOpen;
  }

  getSumLength(data: Array<any>): any {
    console.log(data)
  }

}
