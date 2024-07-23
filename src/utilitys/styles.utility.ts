import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

export type StyleMap<T> = {
  [P in keyof T]: string | number;
};

export function showTypeStyle(
  args: Partial<
    StyleMap<{
      background: string;
      color: string;
      padding: string;
      border: string;
      'font-size': string;
    }>
  >
) {
  return args;
}

export class State<T> {
  private state$!: BehaviorSubject<T>;

  protected get state(): T {
    return this.state$.getValue();
  }

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  protected seState(newState: Partial<T>) {
    const resp = this.state$.next({
      ...this.state,
      ...newState,
    });
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    );
  }
}
