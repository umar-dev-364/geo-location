function loadJQuery(callback) {
  
    if (typeof jQuery !== 'undefined') {
        console.log("jQuery is already loaded.");
        if (callback) callback(); 
        return;
    }

   
    const script = document.createElement('script');
    script.src = "https://code.jquery.com/jquery-3.6.4.min.js"; 
    script.type = "text/javascript";
    script.onload = function () {
        console.log("jQuery has been loaded.");
        if (callback) callback(); 
    };
    script.onerror = function () {
        console.error("Failed to load jQuery.");
    };

    
    document.head.appendChild(script);
}


loadJQuery(function () {
    
    console.log("jQuery version:", jQuery.fn.jquery);
    $('body').css('background', 'lightblue'); S
});
