/* map */

let Observable = Rx.Observable;

const usersPromise$ = $.get('http://jsonplaceholder.typicode.com/users').then(res => res);

const users$ = Observable.fromPromise(usersPromise$);

const firstUser$ = users$.map(users => users[0]);

users$.subscribe(
    users => console.log('Success : ', users),
    error => console.log('Error :', error),
    () => console.log('Completed')
);

firstUser$.subscribe(
    user => console.log(user)
);
