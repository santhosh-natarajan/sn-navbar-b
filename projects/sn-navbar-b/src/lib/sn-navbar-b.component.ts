import { Component, Input, OnInit } from '@angular/core';
import { SnMenuItems } from './sn-menu-items.model';

@Component({
  selector: 'sn-navbar-b',
  templateUrl: './sn-navbar-b.component.html',
  inputs: [
    'logoNav',
    'logoImgSrc',
    'brandName',
    'menuItems',
    'customNavBgColor',
    'customNavBrandColor',
    'customNavBtnBgColor',
    'customNavItemColor',
  ],
})
export class SnNavbarBComponent implements OnInit {
  @Input() logoNav: string = '';
  @Input() logoImgSrc: string = '';
  @Input() brandName: string = '';
  @Input() menuItems: SnMenuItems[] = [];
  @Input() customNavBgColor: string = '';
  @Input() customNavBrandColor: string = '';
  @Input() customNavBtnBgColor: string = '';
  @Input() customNavItemColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
