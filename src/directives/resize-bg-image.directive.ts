import {
  AfterViewInit,
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[resizeBgImage]',
})
export class ResizeBgImageDirective implements AfterViewInit, OnDestroy {
  widthBgImage = 500;
  observer!: ResizeObserver;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2,
    private zone: NgZone
  ) {}
  ngAfterViewInit(): void {
    this.observer = new ResizeObserver((entries) => {
      this.zone.run(() => {
        // console.log('resize', entries[0].target.getBoundingClientRect());
        entries.forEach((entry) => {
          this.widthBgImage = entry.target.getBoundingClientRect().width;
          this.widthBgImage < 560
            ? this.renderer2?.setStyle(
                this.el.nativeElement,
                'background-size',
                'contain'
              )
            : this.renderer2?.setStyle(
                this.el.nativeElement,
                'background-size',
                'cover'
              );
        });
      });
    });
    this.observer.observe(this.el.nativeElement);
  }
  ngOnDestroy() {
    this.observer.observe(this.el.nativeElement);
  }
}
