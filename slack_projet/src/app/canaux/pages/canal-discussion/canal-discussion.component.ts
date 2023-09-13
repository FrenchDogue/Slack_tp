import { Component, Input } from '@angular/core';
import { Canal } from 'src/app/core/models/canal';
import { CanauxMessagesService } from '../../services/canaux-messages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canal-discussion',
  templateUrl: './canal-discussion.component.html',
  styleUrls: ['./canal-discussion.component.scss']
})
export class CanalDiscussionComponent {

  public canal!: Canal;
  public id!: number;

  constructor(private activatedRoute : ActivatedRoute, private canauxMessagesService: CanauxMessagesService) {
    // this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.id);

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // console.log(paramMap);
      this.id = Number(paramMap.get("id"));
      console.log(this.id);

      
      this.canauxMessagesService.getCanalById(this.id).subscribe(
        (data) => (this.canal = data)
      );


    });
    console.log(this.id);

    
  }
  
}
