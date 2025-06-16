window.addEventListener('DOMContentLoaded', function() {
    // Preloader hide logic
    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() { preloader.style.display = 'none'; }, 500);
        }, 2000);
    }

    // Botões de exibição
    var showLanguagesBtn = document.getElementById('showLanguagesBtn');
    var showContactBtn = document.getElementById('showContactBtn');
    var showIconsBtn = document.getElementById('showIconsBtn');
    if (showLanguagesBtn && showContactBtn && showIconsBtn) {
        showLanguagesBtn.onclick = function() {
            var langDiv = document.getElementById('languagesSection');
            var contactDiv = document.getElementById('contactSection');
            var iconsDiv = document.getElementById('iconesLinguagens');
            if (langDiv.style.display === "none") {
                langDiv.style.display = "block";
                contactDiv.style.display = "none";
                iconsDiv.style.display = "none";
                this.textContent = "Hide Languages";
                showContactBtn.textContent = "Show Contact";
                showIconsBtn.textContent = "Show Programming Languages";
            } else {
                langDiv.style.display = "none";
                this.textContent = "Show Languages";
            }
        };
        showContactBtn.onclick = function() {
            var langDiv = document.getElementById('languagesSection');
            var contactDiv = document.getElementById('contactSection');
            var iconsDiv = document.getElementById('iconesLinguagens');
            if (contactDiv.style.display === "none") {
                contactDiv.style.display = "block";
                langDiv.style.display = "none";
                iconsDiv.style.display = "none";
                this.textContent = "Hide Contact";
                showLanguagesBtn.textContent = "Show Languages";
                showIconsBtn.textContent = "Show Programming Languages";
            } else {
                contactDiv.style.display = "none";
                this.textContent = "Show Contact";
            }
        };
        showIconsBtn.onclick = function() {
            var langDiv = document.getElementById('languagesSection');
            var contactDiv = document.getElementById('contactSection');
            var iconsDiv = document.getElementById('iconesLinguagens');
            if (iconsDiv.style.display === "none") {
                iconsDiv.style.display = "block";
                langDiv.style.display = "none";
                contactDiv.style.display = "none";
                this.textContent = "Hide Programming Languages";
                showLanguagesBtn.textContent = "Show Languages";
                showContactBtn.textContent = "Show Contact";
            } else {
                iconsDiv.style.display = "none";
                this.textContent = "Show Programming Languages";
            }
        };
    }
});
