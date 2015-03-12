if( typeof getParameterByName === "undefined" ){
   alert( "Doesn't work on this website" );
   return;
}

var url = getParameterByName( "lnk" );
if( !url ){
  alert( "Oops doesn't work anymore" );
  return;
}
window.location = url;