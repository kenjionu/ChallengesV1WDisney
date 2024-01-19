import { QuestionsService } from 'src/app/services/questions.service';
import { SectionsService } from './../../services/sections.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  submitted = false;
  answeredForm: number = 0;
  public sectionForm! :FormGroup;
  checkvalueClick: any = '';
  listClass: any = '';
  dropdownResponse: any = '';
  buttonValues = '';
  section: any = [];
  question: any = [];
  isOpen: boolean = false;

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

  onClickOptions(questions: any, choiceOptions: any, type: any) {
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
    this.validationType(choiceOptions, type);
  }

  validationType(choiceOptions:any, type:any){
    if(type === 'three_buttons'){
      this.sectionForm.get('questionMedium')?.setValue(choiceOptions.value)
    }
    if(type === 'radio'){
      this.sectionForm.get('questionHS')?.setValue(choiceOptions.value)
    }
  }

  receiveMessage(msg: any) {
    this.dropdownResponse = msg;

    this.sectionForm.get('questionDropdownParent')?.setValue(msg)
  }

  checkFrm(){
    this.submitted = true;

    if (this.sectionForm.invalid) {

      console.log('invalid');
    }

    console.log(JSON.stringify(this.sectionForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.sectionForm.reset();
  }

}
