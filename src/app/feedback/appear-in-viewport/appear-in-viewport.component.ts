import {
  Component, OnInit, HostListener, Input, ChangeDetectorRef, ElementRef,
  ChangeDetectionStrategy, OnChanges, Output, EventEmitter, AfterViewChecked
} from '@angular/core';
import {AnimateActionEnum} from "../../../animations/animate-action.enum";
import {WindowRefService} from "../../services/window-ref.service";

@Component({
  selector: 'i24-appear-in-viewport',
  templateUrl: './appear-in-viewport.component.html',
  styleUrls: ['./appear-in-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppearInViewportComponent implements OnInit, OnChanges {

  action: AnimateActionEnum;

  private _previousVisible: boolean;
  isVisible: boolean;



  @Input() scrollOffset: number;
  @Input() animationDelay: number;
  @Input() animation: AnimateActionEnum;

  @Output() in: EventEmitter<any> = new EventEmitter();
  @Output() out: EventEmitter<any> = new EventEmitter();

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private elementRef: ElementRef,
              private windowRef: WindowRefService) {
    this.action = AnimateActionEnum.Hidden;
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    this.setVisible();
  }

  ngOnChanges(): void {
    this.scrollOffset = this.scrollOffset != null ? this.scrollOffset : 0;
    this.animationDelay = this.animationDelay != null ? this.animationDelay : 0;
  }

  ngOnInit(): void {
    setTimeout(() => this.setVisible());
  }

  private setVisible(): void {
    this.isVisible = this.isElementInViewport(this.elementRef.nativeElement, this.windowRef.nativeWindow);
    if (this.isVisible != this._previousVisible) {
      this._previousVisible = this.isVisible;
      if (this.isVisible) {
        setTimeout(() => {
          this.action = this.animation;
          this.changeDetectorRef.markForCheck();
          this.in.emit();
        }, this.animationDelay);
      } else {
        this.out.emit();
      }
    }
  }

  private isElementInViewport(el: HTMLElement, window: Window): boolean {

    let top = el.offsetTop;
    let height = el.offsetHeight;
    let parEl = el;

    while (parEl.offsetParent) {
      parEl = <HTMLElement>parEl.offsetParent;
      top += parEl.offsetTop;
    }

    return window.pageYOffset <= top + height &&
      top <= window.pageYOffset + window.innerHeight - this.scrollOffset;
  }

}
