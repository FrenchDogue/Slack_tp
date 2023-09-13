import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Canal } from 'src/app/core/models/canal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public form!: FormGroup;
  @Input() canal!: Canal;

  @Output() submitted = new EventEmitter();

  public onSubmit() {
    this.submitted.emit(this.form.value);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('from init ' + this.canal);

    this.form = this.fb.group({
      canalName: [this.canal.canalName],
      messages: [this.canal.messages],
      id: [this.canal.id],
    });
  }
}
