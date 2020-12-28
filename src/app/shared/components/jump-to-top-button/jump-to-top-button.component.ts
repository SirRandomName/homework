import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-jump-to-top-button',
  templateUrl: './jump-to-top-button.component.html',
  styleUrls: ['./jump-to-top-button.component.scss']
})
export class JumpToTopButtonComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isWindowScrolled = verticalOffset > 100;
  }
  isWindowScrolled = false;
  constructor() {}

  ngOnInit(): void {}

  jumpToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
