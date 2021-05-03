(function(s,w,c){
  for(var e = 0; e < s.length; e++){
    const ss = w.document.createElement("script");
    ss.src = s[e];
    ss.onload = c || new Function();
    w.document.appendChild(ss);
  }
})(["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"],window,function(){
  return (function(){
    alert($);
      $("head").append(`
       <ul>
         <li>sheesh</li>
       </ul>`);
  })()
});
