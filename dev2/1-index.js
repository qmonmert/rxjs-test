/* fromEvent - do */

let Observable = Rx.Observable;

var keys$ = Observable.fromEvent(document, 'keyup')
                .do((keyUp) => console.log(keyUp.key));

keys$.subscribe();