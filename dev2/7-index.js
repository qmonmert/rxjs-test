/* combineLatest, withLatestFrom, zip */

let Observable = Rx.Observable;

const slowNum$ = Observable.interval(1000);
const fastNum$ = Observable.interval(200);

const combinedLatest$ = slowNum$.combineLatest(fastNum$, (s, f) => 'combinedLatest : ' + s + ' ' + f).take(10);
const withLatestFrom$ = slowNum$.withLatestFrom(fastNum$, (s, f) => 'withLatestFrom : ' + s + ' ' + f).take(10);
const zip$ = slowNum$.zip(fastNum$, (s, f) => 'zip : ' + s + ' ' + f).take(10);

const combined$ = Observable.concat(combinedLatest$, withLatestFrom$, zip$);

combined$.subscribe(
    (data) => console.log(data),
    (err) => console.log(err),
    () => console.log('complete')
);
