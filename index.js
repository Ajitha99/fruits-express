const express = require('Express');//intent to use express so importing Express
// creating a port to look fot it

const fruits = require('./fruits');

//Defining port
const PORT = process.env.PORT || 3000;




//Express sets up our owm server, which will listen
//to different of HTTP requests, and serves the right response

const app = express();//calling express function, now we are going to use express

app.get('/ping', (req, res) => {
	res.json('pong');
})
app.get('/greet/:name', function (req, res) {
    // console.log(`${req.params['name']}, Hello there!`);
    const name = req.params.name;
    //console.log(`Why hello there, ${name}`)
    res.send(`Why hello there, ${name}`);
  });

app.get('/five', (req, res) => {
      let arr = [];
      for(let i = 1 ; i < 6; i++){
          arr.push(i);
      }
	res.send(arr);
})

app.get('/evens/:n', (req, res) => {
    // const n = req.params['n'];
    const n = req.params.n;
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i%2 === 0){
            arr.push(i);
        }
    }
    //   res.send(arr);
    res.json(arr);
})

app.get('/namelength/:name', (req, res) => {
    // const name = req.params['name'];
    //res.send(name.length.toString());
    const name = req.params.name;
    res.json(name.length);
  })


app.get('/fruits', (req,res) =>{
    // let arrFruit = require("./fruits");
    let arrFruit = fruits;
    res.send(arrFruit);
})

app.get('/fruits/:name', (req, res) => {
    //your code here
    // HINT - you can use a higher-order array method 
    // let fruitName = req.params['name'];
    let fruitName = req.params.name;
    let result = fruits.filter((ele) => {
        if(ele.name === fruitName){
            return ele.name;
        }
    })
   res.send(result);
})

app.get('/fruits/sort', (req, res) => {
    // implement bubble sort
    for(let i = 0; i < fruits.length; i++){
        for(let j = 0; j < fruits.length - i - 1; j++){
            let res = (fruits[j].name).localeCompare(fruits[j+1].name);
            if(res === 1){
                let temp = fruits[j].name;
                fruits[j].name = fruits[j+1].name;
                fruits[j+1].name = temp;
            }
        }
    }
  
    res.send(fruits);
  })
  
    
app.listen(PORT,() => {
    console.log(`Up on port ${PORT}`);}
    )




    // app.get('/fruits/:fname', (req, res) => {
//     //your code here
//     // HINT - you can use a higher-order array method 
//     let fruitName = req.params['fname'];
//     let result = fruits.filter((ele) => {
//         if(ele.name === fruitName){
//             return ele.name;
//         }
//     })
//    res.send(result);
// })