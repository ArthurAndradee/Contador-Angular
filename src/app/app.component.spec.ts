import { TestBed } from '@angular/core/testing';
import { AppCounter } from './app.component';

describe('AppCounter', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCounter],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppCounter);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Counter' title`, () => {
    const fixture = TestBed.createComponent(AppCounter);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Counter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppCounter);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Counter');
  });
});
