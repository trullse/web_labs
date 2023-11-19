let currentIndex = 0;
const ads = document.querySelectorAll('.ad-page');
const setting = document.getElementById('setting-popup');
let rotatingImage = document.getElementById('rotating-image');
let interval_input = document.getElementById('changeInterval');
let intervalId;
let interval = 5000;

function showAd(index) {
  ads.forEach((ad, i) => {
    ad.style.opacity = i === index ? '1' : '0';
    ad.style.visibility = i === index ? 'visible' : 'hidden';
  });
}

function startBannerRotation() {
  intervalId = setInterval(nextAd, interval);
  console.log('Rotation started');
}

function stopBannerRotation() {
  clearInterval(intervalId);
  console.log('Rotation stopped');
}

function nextAd() {
  currentIndex = (currentIndex + 1) % ads.length;
  showAd(currentIndex);
}

function showSetting() {
  setting.style.opacity = setting.style.opacity === '1' ? '0' : '1';
  rotatingImage.classList.toggle('rotated');
}

if (interval_input) {
  interval_input.addEventListener('click', (event) => {
    event.preventDefault();
    const newInterval = parseInt(document.getElementById('interval').value, 10) * 1000;
    if (!isNaN(newInterval)) {
        interval = newInterval;
        stopBannerRotation();
        startBannerRotation();
    }
    console.log('New interval: ' + interval);
  });
}

window.addEventListener('focus', startBannerRotation);
window.addEventListener('blur', stopBannerRotation);

showAd(currentIndex);

startBannerRotation();