import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './compnents/tab/tab.component';
import { NavBarComponent } from './compnents/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { LoaderComponent } from './compnents/loader/loader.component';
import { IsValuePipe } from './pipes/isValue/is-value.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const ANGULAR_MATERIAL = [MatButtonModule, MatProgressSpinnerModule];

const CUSTOM_COMPONENTS = [
  TabComponent,
  NavBarComponent,
  InfiniteScrollDirective,
  LoaderComponent,
];

const PIPES = [
  IsValuePipe
];

@NgModule({
  declarations: [
    ...CUSTOM_COMPONENTS,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...ANGULAR_MATERIAL,
  ],
  exports: [
    ...CUSTOM_COMPONENTS,
    ...PIPES,
    ...ANGULAR_MATERIAL,
  ]
})
export class CoreModule { }
