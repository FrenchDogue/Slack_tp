import { Component, Input } from '@angular/core';
import { Canal } from '../../models/canal';
import { CanauxMessagesService } from 'src/app/canaux/services/canaux-messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public tab!: Canal[];

  public newCanal = new Canal();

  constructor(
    private canauxMessagesService: CanauxMessagesService,
    private router: Router
  ) {
    this.canauxMessagesService.getData().subscribe((data) => (this.tab = data));
  }

  public onAdd(canal: Canal) {
    this.canauxMessagesService
      .addData(canal)
      .subscribe((response) => this.tab.push(response));
  }

  public goToCanal(canal: Canal) {
    this.router.navigate(['accueil', 'canal', canal.id]);
  }
}
