function NAVBARDIV() {
    var x = document.getElementsByClassName("dataclass");
    console.log("--------start")
    console.log(x)
    console.log("--------end")
    console.log(x[0].length)
    var z = x[0].childNodes;
    console.log(z)
    console.log(z.length)
    for (i = 0; i < z.length; i++) {
        y = z[i];
        // console.log(y.text);
        console.log("--------start1")
        console.log(y.text)
        console.log("--------end1")
        console.log(y.getElementsByClassName("c71 c70"));
    }



};

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByClassName("dataclass");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};
RTCCertificate