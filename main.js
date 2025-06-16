// Lógica dos botões de exibição das seções
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('showLanguagesBtn').onclick = function() {
        var langDiv = document.getElementById('languagesSection');
        var contactDiv = document.getElementById('contactSection');
        var iconsDiv = document.getElementById('iconesLinguagens');
        if (langDiv.style.display === "none") {
            langDiv.style.display = "block";
            contactDiv.style.display = "none";
            iconsDiv.style.display = "none";
            this.textContent = "Hide Languages";
            document.getElementById('showContactBtn').textContent = "Show Contact";
            document.getElementById('showIconsBtn').textContent = "Show Programming Languages";
        } else {
            langDiv.style.display = "none";
            this.textContent = "Show Languages";
        }
    };
    document.getElementById('showContactBtn').onclick = function() {
        var langDiv = document.getElementById('languagesSection');
        var contactDiv = document.getElementById('contactSection');
        var iconsDiv = document.getElementById('iconesLinguagens');
        if (contactDiv.style.display === "none") {
            contactDiv.style.display = "block";
            langDiv.style.display = "none";
            iconsDiv.style.display = "none";
            this.textContent = "Hide Contact";
            document.getElementById('showLanguagesBtn').textContent = "Show Languages";
            document.getElementById('showIconsBtn').textContent = "Show Programming Languages";
        } else {
            contactDiv.style.display = "none";
            this.textContent = "Show Contact";
        }
    };
    document.getElementById('showIconsBtn').onclick = function() {
        var langDiv = document.getElementById('languagesSection');
        var contactDiv = document.getElementById('contactSection');
        var iconsDiv = document.getElementById('iconesLinguagens');
        if (iconsDiv.style.display === "none") {
            iconsDiv.style.display = "block";
            langDiv.style.display = "none";
            contactDiv.style.display = "none";
            this.textContent = "Hide Programming Languages";
            document.getElementById('showLanguagesBtn').textContent = "Show Languages";
            document.getElementById('showContactBtn').textContent = "Show Contact";
        } else {
            iconsDiv.style.display = "none";
            this.textContent = "Show Programming Languages";
        }
    };
});
