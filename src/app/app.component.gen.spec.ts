import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
