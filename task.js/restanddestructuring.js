//function add2(a,b,...c){
    //console.log(a);
    //console.log(b);
        
   // for(var i of c)
    //console.log(i);
    
//}	


//add2(1,2,3,4,4,55,66);
function add(a,b,...c)
{
    console.log('a   '  +a);
    console.log('b   ' +b);
    let[d,e,f,g,h,i=10]=c;
    console.log('d   ' +d);
    console.log('e   ' +e);
    console.log('f   ' +f);
    console.log('g   ' +g);
    console.log('h   ' +h);
    console.log('i   ' +i);

}
add(1,2,3,4,4,55,66);