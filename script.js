const bgColorSelector = document.getElementById('bg-color');
bgColorSelector.addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;

    if (this.value !== '#f4f4f4' && this.value !== '#ffcccb' && this.value !== '#cceeff' && this.value !== '#ccffcc') {
        document.body.classList.remove('dark-mode');
    }
});

const fontSizeSlider = document.getElementById('font-size');
fontSizeSlider.addEventListener('input', function() {
    document.documentElement.style.fontSize = this.value + 'px'; // Change root font-size
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// ganti font
const serifFontButton = document.getElementById('serif-font');
const sansSerifFontButton = document.getElementById('sans-serif-font');
const container = document.getElementById('mainContainer');

// inisialisasi font bebas 
document.body.style.fontFamily = "'Bebas Neue', sans-serif";

serifFontButton.addEventListener('click', function() {

    document.body.style.fontFamily = "serif";
});

sansSerifFontButton.addEventListener('click', function() {
    document.body.style.fontFamily = "'Bebas Neue', sans-serif";
});
