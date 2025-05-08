import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: false,
})
export class LoaderPage implements OnInit {
router = inject(Router);
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login'])
    }, 1000)
    
  }

}
