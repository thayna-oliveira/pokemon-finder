import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct title', () => {
    component.title = 'Error title';
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('.title'));
    expect(title.nativeElement.textContent.trim()).toBe('Error title');
  });

  it('should render the correct description', () => {
    component.description = 'Error description';
    fixture.detectChanges();

    const description = fixture.debugElement.query(By.css('.description'));
    expect(description.nativeElement.textContent.trim()).toBe(
      'Error description'
    );
  });

  it('should emit click event on close icon click', () => {
    const buttonSpy = jest.spyOn(component.onCloseEvent, 'emit');
    const button = fixture.debugElement.query(By.css('.close-icon'));

    button.nativeElement.click();
    expect(buttonSpy).toHaveBeenCalledTimes(1);
  });
});
