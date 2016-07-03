/* fromPromise - subscribe */

let Observable = Rx.Observable;

const jsonPromise$ = $.get('http://echo.jsontest.com/key/value/one/two').then(res => res);

const json$ = Observable.fromPromise(jsonPromise$);

json$.subscribe(
    json => console.log('Success : ', json),
    error => console.log('Error :', error),
    () => console.log('Completed')
);