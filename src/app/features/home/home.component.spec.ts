import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/components/shared.module';
import { QuestionsService } from 'src/app/services/questions.service';
import { SectionsService } from 'src/app/services/sections.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [QuestionsService, SectionsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
