import { Component } from '@angular/core';
import { Canal } from 'src/app/core/models/canal';
import { CanauxMessagesService } from '../../services/canaux-messages.service';

@Component({
  selector: 'app-canal-discussion',
  templateUrl: './canal-discussion.component.html',
  styleUrls: ['./canal-discussion.component.scss']
})
export class CanalDiscussionComponent {

  public tab!: Canal[];

  constructor(private canauxMessagesService: CanauxMessagesService) {
    this.canauxMessagesService.getData().subscribe((data) => (this.tab = data));
  }
  
}
