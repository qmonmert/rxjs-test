/*************************************/
/* Error Handler et Complete Handler */
/*************************************/

let Observable = Rx.Observable;

let values = Observable.create((observer) => {
    observer.next("hello");
    observer.next("world");
    //observer.error("fail");
    observer.complete();
});

values.subscribe(
    (data) => console.log("Success :", data),
    (error) => console.log("Error :", error),
    () => console.log("Complete")
);
