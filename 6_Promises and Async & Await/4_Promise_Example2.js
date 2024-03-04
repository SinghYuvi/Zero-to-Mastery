const promise1 = new Promise((resolve,reject) => {
            if(true){
                resolve('Stuff Worked');
            }else{
                reject('Error, it broke')
            }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve , 1000, 'Hello')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve , 5000, 'Yuvraj')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve , 7000, 'Singh')
})


Promise.all([promise1,promise2,promise3,promise4])
            .then(values => {
                console.log(values);
            })
