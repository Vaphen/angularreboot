import { Subject, Observable } from 'rxjs';

export class Bootstrap {
  private static _instance: Bootstrap;
  private _restartSubject = new Subject<void>();

  private constructor() {
    // don't allow instantiation from outside.
  }

  public restart() {
    this._restartSubject.next();
  }

  public get restart$(): Observable<void> {
    return this._restartSubject.asObservable();
  }

  public static get Instance(): Bootstrap {
    return this._instance || (this._instance = new this());
  }

}
