/*  
Here is the exercise on working on the remaining bom method 
Location , Navigator , screen , Window 
Follow the Instruction on the comments 
1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 
Adding Extra is Possible if you want to explore more ...
Good Luck !!! 
*/

//Location info


var url = window.location;
// var url = document.createElement('a')
// url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container'
// url.href = 'file:///E:/Tekle/Class%20files/Files/Web/Labs/Lab%20-%2005%20DOM%20&%20BOM/TaskManager/bom.html'
document.getElementById('href').innerHTML =  url.href; 
document.getElementById('protocol').innerHTML =  url.protocol;   
document.getElementById('host').innerHTML =  url.host; 
document.getElementById('hostName').innerHTML =  url.hostname; 
document.getElementById('port').innerHTML =  url.port; 

//Browser Info
document.getElementById('appName').innerHTML =  navigator.appName ; 
document.getElementById('appVersion').innerHTML =  navigator.appVersion; 
document.getElementById('platform').innerHTML =  navigator.platform; 
document.getElementById('language').innerHTML =  navigator.language; 
document.getElementById('cookieEnabled').innerHTML =  (navigator.cookieEnabled); 


//Screen Information
document.getElementById('height').innerHTML =  window.screen.height + ' px'; 
document.getElementById('width').innerHTML =  window.screen.width + ' px'; 
document.getElementById('pixelDepth').innerHTML =  window.screen.pixelDepth + ' px'; 


//Browsing History Information
document.getElementById('length').innerHTML =  history.length;
if (history.state === null) {
    document.getElementById('state').innerHTML = 'null';
}else{
    document.getElementById('state').innerHTML = history.state;
}