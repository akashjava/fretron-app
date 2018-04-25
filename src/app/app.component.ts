import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { environment as env } from '@env/environment';


@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
     
  }

   
}
