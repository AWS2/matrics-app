(function($) {
    $(function() {
        // Loading modal options:
        var modalLoading = document.querySelectorAll('#loading');
        M.Modal.init(modalLoading, {opacity: 0.5, dismissible: false, endingTop: '35%'});

        // Requisits upload modal options:
        var modalUpload = document.querySelectorAll('#reqUpload');
        M.Modal.init(modalUpload, {opacity: 0.5, dismissible: true});

        //Wrong user data modal options
        var modalLoginHelper = document.querySelectorAll('#loginHelper');
        M.Modal.init(modalLoginHelper, {opacity: 0.5, dismissible: true, endingTop: '50%'});

        //Wrong user data modal options
        var modalErrorData = document.querySelectorAll('#wrongDataModal');
        M.Modal.init(modalErrorData, {opacity: 0.5, dismissible: true});

        $(".modal-content").css("padding", "0px");

        // Loading modal css:
        $("#loading").css("padding", "2em");
        $("#loading").css("overflow", "hidden");
        $("#loading").addClass("custom-border-radius");

        $(".preloader-wrapper").css("display", "block");
        $(".preloader-wrapper").css("margin", "auto");
        $(".preloader-wrapper").css("margin-bottom", "2em");

        // Login helper modal css:
        $("#loginHelper").css("overflow", "hidden");
        $("#loginHelper").addClass("custom-transform-vertical-translate");
        $("#loginHelper").addClass("custom-border-radius");

        // Upload modal css:
        $("#reqUpload").css("overflow-y", "scroll");
        $("#reqUpload").css("max-height", "50%");

        // Wrong user data modal:
        $("#wrongDataModal").css("max-height", "85%");
        $("#wrongDataModal").css("overflow", "hidden");
        $("#wrongDataModal").addClass("custom-height-90");
        $("#wrongDataModal").addClass("custom-border-radius");

        // Para cambiar el click de cancelar en el pago. Hara que vuelva a la aplicacion (WIP)
        //$("#divImgCancelar").on("click", function() {window.location.href = "javascript:history.back()"});

        $(document).ready(function() {
            $('.tabs').tabs();
            $('.collapsible').collapsible();
            $('.fixed-action-btn').floatingActionButton();
            $('.sidenav').sidenav();
            $('.dropdown-trigger').dropdown();
            $('select').formSelect();
        });        


    });
})(jQuery);

//var urlAjax = "https://matrics-test.ieti.cat";
var urlAjax = "http://3.220.37.220:8000";

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Personalizar los insets y la navigationBar del movil
    if (cordova.platformId == 'android') {
        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByHexString('#2196F3');
        NavigationBar.backgroundColorByHexString('#FFFFFF', true);
    }
}

function toggleTheme(theme) {
    // 0 - Light
    // 1 - Dark
    if (localStorage.getItem("data-theme")) {
        if (localStorage.getItem("data-theme") != theme) {
            $("html").attr("data-theme", theme == 1 ? "dark" : "light");

            if ($("#sideNavTheme").length > 0) {
                $("#sideNavTheme")[0].innerHTML = theme == 1 ? 'Tema fosc<i class="material-icons right" style="margin-right: auto;">arrow_drop_down</i>' : 'Tema clar<i class="material-icons right" style="margin-right: auto;">arrow_drop_down</i>';
            }
            
            localStorage.setItem("data-theme", theme == 1 ? "dark" : "light");
        }
    } else {
        if (localStorage.getItem("data-theme") != theme) {
            $("html").attr("data-theme", theme == 1 ? "dark" : "light");

            if ($("#sideNavTheme").length > 0) {
                $("#sideNavTheme")[0].innerHTML = theme == 1 ? 'Tema fosc<i class="material-icons right" style="margin-right: auto;">arrow_drop_down</i>' : 'Tema clar<i class="material-icons right" style="margin-right: auto;">arrow_drop_down</i>';
            }

            localStorage.setItem("data-theme", theme == 1 ? "dark" : "light");
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
