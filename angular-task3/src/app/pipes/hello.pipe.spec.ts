
import { HelloPipe } from './hello.pipe';

describe('HelloPipe', () => {
  it('create an instance', () => {
    const pipe = new HelloPipe();
    expect(pipe).toBeTruthy();
  });

  it ("expect John to equal Hello John", () => {
    const pipe = new HelloPipe();
    expect(pipe.transform("John")).toEqual("Hello John");
  })
  it ("expect Vijay to equal Vijay", () => {
    const pipe = new HelloPipe();
    expect(pipe.transform("Vijay")).toEqual("Hello Vijay");
  })

});