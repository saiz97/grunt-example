var as_cookiehint = (function () {
    var cookiehint = {};
    cookiehint.check = function() {
        if (getCookie('cookiesAccepted') === null) {
            // Show cookie banner
            console.log(document.getElementsByTagName("body"));
            var banner = document.createElement('div');
            banner.id = "cookie-alert";
            banner.innerHTML = '<div class="sp-container">' +
                '<p>Auf Basis deiner (jederzeit widerrufbaren) Einwilligung werden Cookies zum Zweck der Verbesserung der Website sowie Analyse des Userverhaltens verwendet. <br/>Nähere Informationen findest du in der ' +
                '<a href="/datenschutz/">Datenschutzerklärung</a>.</p><p>' +
                '<button class="btn" onclick="as_cookiehint.acceptCookies(1)">Akzeptieren</button> ' +
                '<button class="btn" onclick="as_cookiehint.acceptCookies(0)">Ablehnen</button></p></div>';
            console.log(banner);
            document.body.appendChild(banner);
        } else if (getCookie('cookiesAccepted') == 1) {
            executeIfCookiesAreAccepted();
        }
    }

    cookiehint.acceptCookies = function(accepted) {
        // Set cookie
        var date = new Date();
        date.setTime(date.getTime() + (5*365*24*60*60*1000)); // 5 years
        document.cookie = "cookiesAccepted=" + ( accepted == 1 ? 1 : 0 ) + "; expires=" + date.toUTCString() + "; path=/";

        if(accepted == 1) { executeIfCookiesAreAccepted(); }

        // remove cookie banner
        var banner = document.getElementById("cookie-alert");
        banner.parentNode.removeChild(banner);
    }

    function executeIfCookiesAreAccepted() {
        // executed if cookies are accepted

    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    return cookiehint;
}());

as_cookiehint.check();