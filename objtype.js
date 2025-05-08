//  let StrawberryJuice={
//     color:"Red"

//  };


// let OrangeJuice =StrawberryJuice;

// StrawberryJuice.price="4500";
// OrangeJuice.price="3000";

// console.log(StrawberryJuice);
// console.log(OrangeJuice);




StrawberryJuice={
 color:"Red"
    };
let OrangeJuice ={...StrawberryJuice};

StrawberryJuice.price="4500";
OrangeJuice.price="3000";
    
console.log(StrawberryJuice);
console.log(OrangeJuice);
