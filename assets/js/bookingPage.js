const embeddedBP = document.getElementById('SOIDIV_ANRDiscoveryCall');

var url_string = window.location.href;
var decoded = decodeURI(url_string);
var url = new URL(decoded);

var soSkip = url.searchParams.get('soskip')

if (soSkip) {
  embeddedBP.setAttribute('data-psz','11')
}
else {
  embeddedBP.setAttribute('data-psz','10')
}
