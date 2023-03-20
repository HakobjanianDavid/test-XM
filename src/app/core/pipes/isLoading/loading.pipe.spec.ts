import { state } from '../../models/state.interface';
import { LoadingPipe } from './loading.pipe';

describe('LoadingPipe', () => {
  const pipe = new LoadingPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return true if state equal to loading', () => {
    expect(pipe.transform({ state: state.LOADING, value: null })).toBeTrue();
  });

  it('should return false if state NOT equal to loading', () => {
    expect(pipe.transform({ state: state.LOADED, value: null })).toBeFalse();
    expect(pipe.transform({ state: '' as state, value: null })).toBeFalse();
    expect(pipe.transform({ state: null as any as state, value: null })).toBeFalse();
    expect(pipe.transform({ state: undefined as any as state, value: null })).toBeFalse();
  });

});
