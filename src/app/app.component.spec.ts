import { ComponentFixture, TestBed, async,  } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('title defaults to: Calculator', () => {
    expect(component.title).toEqual('Calculator');
  });

  it('display defaults to: 0', () => {
    expect(component.display).toEqual('0');
  });

  it('resultSet defaults to: []', () => {
    expect(component.resultSet).toEqual([]);
  });  

  describe('calculateResults', () => {
    it('makes expected calls', () => {
      spyOn(component, 'evalCustom');
      component.calculateResults();
      expect(component.evalCustom).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'clearResults');
      component.ngOnInit();
      expect(component.clearResults).toHaveBeenCalled();
    });
  });

  it('should call numberSelected when button with class grid-item-numeric is called', async(() => {
    spyOn(component, 'numberSelected');  
    let button = fixture.debugElement.nativeElement.querySelector('.grid-item-numeric');
    button.click();  
    fixture.whenStable().then(() => {
      expect(component.numberSelected).toHaveBeenCalled();
    });
  }));

  it('should call operatorSelected when button with class grid-item-operant is called', async(() => {
    spyOn(component, 'operatorSelected');  
    let button = fixture.debugElement.nativeElement.querySelector('.grid-item-operant');
    button.click();  
    fixture.whenStable().then(() => {
      expect(component.operatorSelected).toHaveBeenCalled();
    });
  }));

  it('should call calculateResults when button with class grid-item-equals is called', async(() => {
    spyOn(component, 'calculateResults');  
    let button = fixture.debugElement.nativeElement.querySelector('.grid-item-equals');
    button.click();  
    fixture.whenStable().then(() => {
      expect(component.calculateResults).toHaveBeenCalled();
    });
  }));

  it('should call clearResults when button with class grid-item-clear is called', async(() => {
    spyOn(component, 'clearResults');  
    let button = fixture.debugElement.nativeElement.querySelector('.grid-item-clear');
    button.click();  
    fixture.whenStable().then(() => {
      expect(component.clearResults).toHaveBeenCalled();
    });
  }));  
});
