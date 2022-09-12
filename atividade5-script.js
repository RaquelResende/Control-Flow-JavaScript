var maior 
var n1 = 3
var n2 = 6
var n3 = 9
var n4
if(n1 > n2 && n1 > n3 ){   
maior = n1

}
else if(n2 > n1 && n2 > n3 ){
maior = n2
}

else{
maior = n3
}

console.log(maior)

if(n1 > n2) {   
      
    n4= n2
    n2= n1
    n1= n4
  }

       
     if( n1 > n3){

        n4= n3
        n3=n1
        n1=n4
    }

    if( n2 > n3 ){

     n4 = n3
     n3=n2
     n2= n4
    
    }
    

    console.log(n1,n2,n3 )