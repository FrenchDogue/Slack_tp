import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalDiscussionComponent } from './canal-discussion.component';

describe('CanalDiscussionComponent', () => {
  let component: CanalDiscussionComponent;
  let fixture: ComponentFixture<CanalDiscussionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalDiscussionComponent]
    });
    fixture = TestBed.createComponent(CanalDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
