// let p = new promise((resolve,reject)=>{
//     let a = 1+1;
//     if(a==2){
//         resolve('success')
//     }
//     else{
//         reject('failed')
//     }
// })

// p.then((message)=>{
//     console.log('this is the then '+message)
// });

// p.catch((message)=>{
//     console.log('this is the catch '+message)
// })

var fruits = ["apple","orange","banana","grapes","govava"];
var mine = fruits.splice(2,2,"kiwi","mango");
console.log(mine);

var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null); 