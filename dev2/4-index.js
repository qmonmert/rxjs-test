/* combineLatest */

let Observable = Rx.Observable;

const click$ = Observable.fromEvent(document, 'click');

// click$.subscribe(
//     () => console.log('clicked...')
// );

const mouse$ = Observable.fromEvent(document, 'mousemove')
                    .filter((move) => move.clientY >= 200);

// mouse$.subscribe(
//     (move) => console.log(move)
// );

const combined$ = Observable.combineLatest(mouse$, click$);

combined$.subscribe(
    combined => console.log(combined[0])
);
