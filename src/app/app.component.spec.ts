import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]) ],
      providers: [provideAnimationsAsync(),
      ] 
    }).compileComponents();
  });

  it(`should have the 'simple-crm' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('simple-crm');
  });

});
