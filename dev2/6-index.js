/* switchMap */

let Observable = Rx.Observable;

const createPost4$ = $.ajax('http://localhost:3000/posts', {
  method: 'POST',
  data: {
    id: 4,
    title: 'Backbone',
    author: 'Thibaud'
  }
});

const promiseCreatePost4$ = Observable.fromPromise(createPost4$);

const createPost5$ = $.ajax('http://localhost:3000/posts', {
  method: 'POST',
  data: {
    id: 5,
    title: 'JQuery',
    author: 'Quentin'
  }
});

const promiseCreatePost5$ = Observable.fromPromise(createPost5$);

const getPosts$ = $.ajax('http://localhost:3000/posts', {
  method: 'GET'
});

const promiseGetPost$ = Observable.fromPromise(getPosts$);

const chain$ = promiseCreatePost4$
                .switchMap(result => promiseCreatePost5$)
                .switchMap(() => promiseGetPost$);

chain$.subscribe(
    value => console.log(value),
    error => console.log(error),
    () => console.log("completed")
);
