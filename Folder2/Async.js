const apiUrl=fetch('https://fakestoreapi.com/products/1');
.then(res=>res.json())
.then(json=>console.log(json))
function getTop100Campers(){
    fetch(apiUrl)
    .then((r)=>r.json())
    .then((json) => {
        console.log(json[0])
    }).catch((error)=>{
        console.log('failed');
        
    });
 }
 getTop100Campers();