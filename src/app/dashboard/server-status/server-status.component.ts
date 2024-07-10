import { AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements AfterViewInit, OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: NodeJS.Timeout;
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect( (onCleanup) => {
      console.log(this.currentStatus());
      // const timer = setTimeout(() => {
      //   console.log(`Current number of tasks: ${tasks().length}`);
      // }, 1000);
      // onCleanup(() => {
      //   clearTimeout(timer);
      // });

    });
    console.log(this.currentStatus())
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

  ngOnInit(): void {
    console.log('SERVER: on Init')
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.7) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit(): void {
    console.log('SERVER: ng After View Init')
  }
}
