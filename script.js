function api(){
    

let url = "https://catfact.ninja/fact";



let btn = document.querySelector("#btnn");
let p = document.querySelector("p");

btn.addEventListener("click", async ()=>{
    
    let fact =  await get();
    p.textContent = fact;

})


async function get(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log(e);
    }
}
get();
}
api();

var tl = gsap.timeline();

tl.from("h1",{
    x:-50,
    duration:1,
    opacity:0
   
});




