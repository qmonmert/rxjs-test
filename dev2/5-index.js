/* concat */

let Observable = Rx.Observable;

const deletePost1$ = $.ajax('http://localhost:3000/posts/1', {
  method: 'DELETE'
});

const deletePost2$ = $.ajax('http://localhost:3000/posts/2', {
  method: 'DELETE'
});

const getPosts$ = $.ajax('http://localhost:3000/posts', {
  method: 'GET'
});

const combined$ = Observable.concat(deletePost1$, deletePost2$, getPosts$);

combined$.subscribe(
    (data) => { console.log(data); },
    () => {},
    () => { console.log("finished"); }
);
