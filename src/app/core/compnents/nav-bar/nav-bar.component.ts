import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IScheme } from '../../models/scheme.interface';
import { HEADER_NAVIGATION } from '../../schems/header-navigation.scheme';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  schema: IScheme[] = HEADER_NAVIGATION;
}
