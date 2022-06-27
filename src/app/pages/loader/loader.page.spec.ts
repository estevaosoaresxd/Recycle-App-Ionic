import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [
      IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate'); // to spy router of navigate

    component.ngOnInit(); // when component init

    tick(1500) // to wait 1,5 sec and init the test

    expect(router.navigate).toHaveBeenCalledWith(['login']); // him expect the router navigate and called login
  }))

});
