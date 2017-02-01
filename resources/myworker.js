(function(){
    var count=0;
for(i=0;i<30000000000;i++){
count++;
}
postMessage(count);
})();