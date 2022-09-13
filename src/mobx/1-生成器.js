// 生成器

// function *test () {
//   console.log('111')
//   var a = yield '111-输出';
//   console.log('222', a)
//   var b = yield '222-输出';
//   console.log('333', b)
//   var c = yield '333-输出';
//   console.log(c)
// }

// test()

// var newTest = test()
// var test1 = newTest.next()
// console.log(test1);
// var test2 = newTest.next('A')
// console.log(test2);
// var test3 = newTest.next('B')
// console.log(test3);
// var test4 = newTest.next('C')
// console.log(test4);


//  可执行生成器

function getData1(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve("data1")
      },1000)
  })
}
function getData2(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve("data2")
      },1000)
  })
}

function getData3(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve("data3")
      },1000)
  })
}

function *gen(){
  var f1 = yield getData1();
  console.log(f1)
  var f2 = yield getData2(f1);
  console.log(f2)
  var f3 =yield getData3(f2)

  console.log(f3)
}

function run(fn){

  var g = fn()

  function next(data){
      var result= g.next(data);

      if(result.done){
          return result.value
      }

      result.value.then(res=>{
          next(res)
      })
  }
  next()
  // g.next()
}

run(gen)