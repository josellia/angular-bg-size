import 'zone.js/dist/zone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-dummy',
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
    .dummy {
      background-color: orange;
      padding: 5px;
    }
  `,
  ],
  template: `
    <div class="dummy">
    <h4>{{name}}</h4>
    {{counter}}
    <button (click)="increase()">Inc</button>
    </div>
  `,
})
export class Dummy {
  @Input() set initial(val: number) {
    this.counter = val;
  }
  @Input() name = 'dummy';
  counter = 1;

  increase() {
    this.inc();
  }

  inc() {
    this.counter += 1;
  }

  ///////

  ngOnInit() {
    console.log('ngOnInit', this.name);
  }

  ngOnChanges() {
    console.log('ngOnChanges', this.name);
  }

  ngDoCheck() {
    console.log('ngDoCheck', this.name);
  }
}
