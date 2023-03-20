import { state } from "../../models/state.interface";
import { IsValuePipe } from "./is-value.pipe";


describe('IsValuePipe', () => {
  const pipe = new IsValuePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return value if state equals state.LOADED', () => {
    const value = [{ id: 'id', name: 'test' }];
    expect(pipe.transform({ state: state.LOADED, value })).toEqual(value);
  });

  it('should return null if state does NOT equal state.LOADED', () => {
    expect(pipe.transform({ state: state.LOADING, value: null })).toEqual(null);
    expect(pipe.transform({ state: state.LOADING, value: undefined })).toEqual(null);
    expect(pipe.transform({ state: state.LOADING, value: {} })).toEqual(null);
  });
});
