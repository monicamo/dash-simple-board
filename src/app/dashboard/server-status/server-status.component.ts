import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements AfterViewInit, OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // private interval?: NodeJS.Timeout;
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

  ngOnInit(): void {
    console.log('SERVER: on Init')
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.7) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('SERVER: ng After View Init')
  }
}
