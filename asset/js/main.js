document.addEventListener("DOMContentLoaded",()=>{
    let result=""
    let field=document.querySelector(".result")
    let btn=document.querySelector(".btn")
    let error_btn=document.querySelector(".container__error span b")

    let error=document.querySelector(".error__message span")
    let blockError=document.querySelector(".container__error")
    
    let maj=document.querySelector("#maj");
    let min=document.querySelector("#min");
    let nbr=document.querySelector("#nbr");
    let car=document.querySelector("#car");

   error_btn.addEventListener("click",(event)=>{
            blockError.style.display="none";

   })
  
    btn.addEventListener("click",(event)=>{
        let nbrCaracter=document.querySelector("#my_nbr")
        let result=""
        error.innerHTML="";
        if(nbrCaracter.value==""){
            event.preventDefault();
            error.innerHTML="Le champ ne peut être vide !!";
            blockError.style.display="block";
            return
        }else{
            blockError.style.display="none";

            if(maj.checked){
                result+='AZERTYUIOPQSDFGHJKLMWXCVBN';
            }
            if(min.checked){
                result+='azertyuiopqsdfghjklmwxcvbn';
            }
            if(nbr.checked){
                result+='0123456789';
            }
            if (car.checked) {
                result+='&~é"#(){}[]|è-_çà@^$£ù%*µ!§:/;.,?';
            }
            let number=parseInt(nbrCaracter.value,10);
            if(result===""){
                event.preventDefault();
                error.innerHTML="cochez au moin une case !";
                blockError.style.display="block";
                return
            }else if(isNaN(number) || number<6 ||number >20){
                event.preventDefault();
                error.innerHTML=`Saisi un entier compris entre 6 et 20`;
                blockError.style.display="block";
                return
            }
            else{
                
                let password="";
                if(!isNaN(number) && number>=6 && number<=20){
                    for (let i = 0; i < number; i++) {
                        const indice = Math.floor(Math.random()*result.length);
                        password += result[indice];
                    }
                    field.innerHTML=password;
                }
            }

            
           


        }
    })
});