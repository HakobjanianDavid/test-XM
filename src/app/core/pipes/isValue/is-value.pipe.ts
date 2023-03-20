import { IState, state } from 'src/app/core/models/state.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isValue'
})
export class IsValuePipe implements PipeTransform {

  transform(data: IState<any>): any | null {
    return data.state === state.LOADED ? data.value : null;
  }
}
