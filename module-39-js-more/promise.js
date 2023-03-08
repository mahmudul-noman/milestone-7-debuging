const aPromise = control => { 
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(control) {
            resolve('Success');
         } else {
            reject('Failed');
         }
      }, 3000)
   })
}

// aPromise(true)
//   .then(() => {
//      console.log('This is a Success');
//   })
//   .catch(() => {
//      console.log('This is a Failure');
//   })


aPromise (false)
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})