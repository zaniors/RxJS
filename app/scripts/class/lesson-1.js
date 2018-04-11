import Rx from 'rxjs/Rx';
import {
    timer
} from 'rxjs/observable/timer';
import {
    interval
} from 'rxjs/observable/interval';
import {
    debounce
} from 'rxjs/operators';

const rx = Rx.Observable.of(1, 2, 3, 4, 5);
console.log('-----1-----2-----3-----4-----5');

// console.log('rx.scan(a + b)：');
// rx.scan((a, b) => a + b)
//     .subscribe(sum => {
//         console.log(sum);
//     })

// console.log('rx.reduce(a + b)：');
// rx.reduce((a, b) => a + b)
//     .subscribe(sum => {
//         console.log(sum);
//     })

// console.log('rx.filter(a%2 === 0)：');
// rx.filter(a => a % 2 === 0)
//     .subscribe(a => {
//         console.log(a);
//     })

// console.log('rx.take(3)：');
// rx.take(3)
//     .subscribe(a => {
//         console.log(a);
//     })

// console.log('rx.skip(3)：');
// rx.skip(3)
//     .subscribe(a => {
//         console.log(a);
//     })

// console.log('rx.first()：');
// rx.first()
//     .subscribe(a => {
//         console.log(a);
//     })

// console.log('rx.last()：');
// rx.last()
//     .subscribe(a => {
//         console.log(a);
//     })

// // Rx.Observable.interval(1000).subscribe(a => console.log(a));
// // Rx.Observable.timer(3000, 1000).subscribe(a => console.log(a));

// const interval$ = interval(1000);
// interval$.pipe(debounce((val => timer(val * 200))).subscribe(val =>
//     console.log(`Example Two: ${val}`)
// );

const volumeEle = document.querySelector('#volume');

const xInputEle = document.querySelector('#xInput');
const yInputEle = document.querySelector('#yInput');

const x$ = Rx.Observable
    .fromEvent(xInputEle, 'keyup')
    .pluck('target', 'value');

const y$ = Rx.Observable
    .fromEvent(yInputEle, 'keyup')
    .pluck('target', 'value');

x$.withLatestFrom(y$).subscribe(val => console.log(val));