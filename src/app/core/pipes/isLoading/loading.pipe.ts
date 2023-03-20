import { IState, state } from 'src/app/core/models/state.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLoading'
})
export class LoadingPipe implements PipeTransform {

  transform(value: IState<unknown>): boolean {
    return value.state === state.LOADING;
  }
}
