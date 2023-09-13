import { Component } from '@angular/core';
import { Canal } from '../../models/canal';
import { CanauxMessagesService } from 'src/app/canaux/services/canaux-messages.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public tab!: Canal[];

  constructor(private canauxMessagesService: CanauxMessagesService) {
    this.canauxMessagesService.getData().subscribe((data) => (this.tab = data));
  }
}
