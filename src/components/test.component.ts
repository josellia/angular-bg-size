import 'zone.js/dist/zone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-wrapper',
  standalone: true,
  imports: [CommonModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
})
export class Wrapper {
  @Input() name = 'Wrapper';

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
