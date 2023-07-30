/* View source code start */
function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.classList.toggle("visible");
}

/* View source code end */

/* search start */

function mysearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("dl-search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("dl-library");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/* search end */

/* copy code start */

function copy(copytext, id) {
    var copyText = document.getElementById(id).textContent;
    var textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.className = "hide";
    copytext.children[0].innerText = "Copied";

}

function copied(copytext) {
    copytext.children[0].innerText = "Copy to clipboard";
}

/* copy code end */

/* sticky header start */

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', myFunctionForSticky);

    function myFunctionForSticky() {
        var header = document.getElementById("dl-right-nav");
        if (window.pageYOffset >= 108) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
})

/* sticky header end */

/* back to top start */

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* back to top end */

/* right side navigation select state start */

function myFunction(e) {
    var elems = document.querySelector("#dl-right-nav li a.selected");
    if (elems !== null) {
        elems.classList.remove("selected");
    }
    e.target.className = "selected";
}

/* right side navigation select state end */

/* left side navigation html binding start */

function bindEvents() {
    var elements = document.querySelectorAll("#navigation li");
    for (var index = 0; index < elements.length; index++) {
        var li = elements[index];
        li.addEventListener("click", function(event) {
            var filename = event.target.getAttribute("filename");
            includeHTML(filename);
            var elems = document.querySelector("#navigation li.selected");
            if (elems !== null) {
                elems.classList.remove("selected");
            }
            this.classList.add("selected");
        })
    }
}

function includeHTML(filename) {
    var elmnt = document.querySelector(".dl-preview-container")
    if (filename) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    elmnt.innerHTML = this.responseText;
                }
                if (this.status == 404) {
                    elmnt.innerHTML = "<div style='text-align: center;font-size: 30px;width: 100%;height: 100%;display: table;'><div style='display: table-cell;vertical-align: middle;'>Page not found.</div></div>";
                }
            }
        }
        xhttp.open("GET", filename, true);
        xhttp.send();
        return;
    }
}

if (document.readyState == "complete") {
    bindEvents();
} else {
    document.addEventListener('readystatechange', function(event) {
        if (event.target.readyState === 'complete') {
            bindEvents();
        }
    });
}

/* left side navigation html binding end */
/* onload focus script starts */
function FocusDesignLibrary()
{
     document.getElementById("dl-sidebar-header").focus();
}
/* onload focus script ends */


function asdf(){
    document.getElementById("divElement").scrollIntoView();
}

document.addEventListener("DOMContentLoaded", function () {
    // alert('ss');
    const scrollButton = document.getElementById("scrollButton");
    const targetDiv = document.getElementById("targetDiv");

    scrollButton.addEventListener("click", function () {
        // Calculate the distance from the top of the page to the targetDiv
        const targetDivPosition = targetDiv.getBoundingClientRect().top;
        // Get the current scroll position
        const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

        // Calculate the final scroll position
        const finalScrollPosition = targetDivPosition + scrollOffset;

        // Use smooth scrolling to scroll to the targetDiv
        window.scrollTo({
            top: finalScrollPosition,
            behavior: "smooth"
        });
    });
});


function setButtonActive(elem) {
    // get all 'a' elements
    var a = document.getElementsByClassName('filterButton');
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('filterButtonactive')
    }
    // add 'active' classs to the element that was clicked
    elem.classList.add('filterButtonactive');
}
