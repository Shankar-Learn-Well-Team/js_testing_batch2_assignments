// const mobileProduct={
//     brand:"Apple",
//     price:100100,
//     specification:{
//         screen:"6 inch",
//         processor:"A16 Bionic",
//         RAM:"32 GB",
//         storageOptions:["128GB","256GB","1TB"],
//         camera:{
//             rear:"48MP",
//             front:"12MP"
//         }
//     },
//     discount: function(){
//         return this.price*0.10;
//     }
// }

// console.log(mobileProduct.brand);
// console.log(mobileProduct.specification.camera.front);
// console.log(mobileProduct.discount());
// // delete mobileProduct.specification.storageOptions[1];
// console.log(mobileProduct.specification.storageOptions.length)
// delete mobileProduct.specification.camera.front;
// mobileProduct.specification.storageOptions.shift();
// console.log(mobileProduct);

function deepfreez(obj)
{
    Object.freeze(obj);
    Object.keys(obj).forEach(key=>{
        if(typeof obj[key]==Object && obj[key]!=null )
        {
            deepfreez(obj[key])
        }

    });
}

const abc={name: "pooja",details: {color: "black",height:5}};
// const abc=deepfreez({name: "pooja",details: {color: "black",height:5}});
deepfreez(abc);
abc.details.height=7;
console.log(abc)