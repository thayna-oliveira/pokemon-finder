import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  const fgd: FormGroupDirective = new FormGroupDirective([], []);

  fgd.form = new FormGroup({
    test: new FormControl(''),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchBarComponent],
      providers: [{ provide: FormGroupDirective, useValue: fgd }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    component.controlName = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable click event if button is disable', () => {
    const button = fixture.debugElement.query(By.css('.search-icon'));
    expect(button.nativeElement.disabled).toBe(true);
  });

  it('should emit click event if button is enable', () => {
    component.disableButton = false;
    fixture.detectChanges();

    const buttonSpy = jest.spyOn(component.onClickEvent, 'emit');
    const button = fixture.debugElement.query(By.css('.search-icon'));

    button.nativeElement.click();
    expect(buttonSpy).toHaveBeenCalledTimes(1);
  });
});
