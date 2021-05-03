(function(){
  const server = io("");
  const onMessage = function(){};
  const onPrevData = function(){};
  server.on("getData",onPrevData);
  server.on("getMessage",onMessage);
})();
