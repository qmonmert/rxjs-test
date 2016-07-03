/****************************/
/* Création d'un Observable */
/****************************/

let Observable = Rx.Observable;

let values = Observable.create((observer) => {
    observer.next("hello");
    observer.next("world");
    setTimeout(() => observer.next("2016"), 2000);
});

values.subscribe((data) => console.log(data));
