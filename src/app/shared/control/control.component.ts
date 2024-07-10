import { afterNextRender, afterRender, AfterViewInit, Component, ContentChild, contentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterViewInit {
  // @HostBinding('class') className = 'control'; //compatibilidade
  @HostListener('click') onClick() {
    console.log('Clicked !');
    console.log(this.el);
    console.log(this.control());
  }
  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender( () => {
      console.log('afterNextRender');
    });
  }

  ngAfterViewInit(): void {

  }

  // onClick() {
  //   console.log('Clicked !');
  // }
}
