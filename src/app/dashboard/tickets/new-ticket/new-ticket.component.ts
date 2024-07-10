import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ ButtonComponent, ControlComponent, FormsModule ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter<{ title: string, text: string }>();
  add = output<{ title: string, text: string }>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit(): void {
    console.log(' ngOnInit ')
    console.dir(this.form().nativeElement)
  }

  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit ')
    console.dir(this.form().nativeElement)
  }

  onSubmit() {
    // this.form().nativeElement.reset();
    this.add.emit({ title: this.enteredTitle, text: this.enteredText});
    this.enteredTitle = '';
    this.enteredText = '';

  }
}
