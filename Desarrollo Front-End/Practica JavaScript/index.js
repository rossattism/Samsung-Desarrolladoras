function underline(){
    if
    ( document.getElementById("text").style.textDecoration=="underline" ) 
    ( document.getElementById("text").style.textDecoration="none" );
    else
    ( document.getElementById("text").style.textDecoration="underline" );
}

function background(){
    if
    ( document.getElementById("text").style.backgroundColor=="red" )
    ( document.getElementById("text").style.backgroundColor="blue" );
    else if
    ( document.getElementById("text").style.backgroundColor=="blue" )
    ( document.getElementById("text").style.backgroundColor="yellow" );
    else if
    ( document.getElementById("text").style.backgroundColor=="yellow" )
    ( document.getElementById("text").style.backgroundColor="white" );
    else
    ( document.getElementById("text").style.backgroundColor="red");
}

function text(){
    if
    ( document.getElementById("text").style.color=="red" )
    ( document.getElementById("text").style.color="blue" );
    else if
    ( document.getElementById("text").style.color=="blue" )
    ( document.getElementById("text").style.color="yellow" );
    else if
    ( document.getElementById("text").style.color=="yellow" )
    ( document.getElementById("text").style.color="black" );
    else
    ( document.getElementById("text").style.color="red" );
}

function size(){
    if( document.getElementById("text").style.fontSize=="large" )
    ( document.getElementById("text").style.fontSize="x-large" );
    else if( document.getElementById("text").style.fontSize=="x-large" )
    ( document.getElementById("text").style.fontSize="xx-large" );
    else if( document.getElementById("text").style.fontSize=="xx-large" )
    ( document.getElementById("text").style.fontSize="medium" );
    else( document.getElementById("text").style.fontSize="large" );
}
