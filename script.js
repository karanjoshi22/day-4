// koi bhi code js mein line by line chalega aur ye natural pattern bhi hota hai ki code line by line chale, but kabhi kabaar aise cases aate hai life mein jagha par aapka code wait krta hai and utni der mein agla code chal jaata hai

// sync code
// aisa code jo line by line chale hota hai sync code
// aisa code jo jab chalne ke liye ready ho jaaye tab chale wo hai async 
 
// callbacks
// function kuchhDerBaadChalunga(fnc){
//     setTimeout(fnc,Math.floor(Math.random()*20) * 1000);
// }
// kuchhDerBaadChalunga(function(){
//     console.log("hey");    
// })

// ek function ko agar aap ek aur function bhej de rahe ho parameter mein , to wo parameter waala fnc kehlaata hai callback

// call back hell

function profileLekarAao(username,cb){
    setTimeout(()=>{
        console.log(`profile fetched of ${username}`);
        cb({username})
    },2000)
}

profileLekarAao("harsh",function(profileData){
    console.log(profileData);
    
})