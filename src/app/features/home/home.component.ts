import { QuestionsService } from 'src/app/services/questions.service';
import { SectionsService } from './../../services/sections.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sectionForm:any;
  checkvalueClick: any = '';
  listClass: any = '';
  dropdownResponse: any = '';
  buttonValues = '';
  section: any = [];
  question: any = [];
  isOpen: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private _sectionsService: SectionsService,
    private _questionsService: QuestionsService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.sectionForm = this.fb.group({
      questionHS: ['', Validators.required],
      questionMedium: [''],
      questionDropdownParent: [''],
      questionDependentDropdown: [''],
    });

    this._sectionsService.getAllSectionsServices().then((sections) => {
      this.section = sections[0];
      this.getQuestionsById();

    });
  }

  getQuestionsById() {
    this._questionsService.getAllQuestionsServices().then((questions) => {
      this.question = questions[0];

    });

  }

  onIsOpen() {
    this.isOpen = !this.isOpen;
  }

  onClickOptions(questions: any, choiceOptions: any) {
    console.log(
      '[Questions] ID: ' +
        questions +
        ' [ChoiceOptions] {ID}: ' +
        choiceOptions.id +
        ' {VALUE}: ' +
        choiceOptions.value +
        ' {LABEL}: ' +
        choiceOptions.label
    );
    this.checkvalueClick  = choiceOptions.value;
  }

  receiveMessage(msg: any) {
    console.log(msg)
    this.dropdownResponse = msg;
  }

  checkFrm(data:any){

  }

}
