    
document.querySelector('#cerca').addEventListener ('click', function () {
	var xhr = new XMLHttpRequest({mozSystem: true});
	xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		alert( xhr.status );
	    document.write('<p><pre><code>'+xhr.responseText+'</code></pre></p>' );
    }
	};
	xhr.open('GET', 'http://mobile.viaggiatreno.it/vt_pax_internet/mobile/numero', true);
	xhr.send(null); 
});
