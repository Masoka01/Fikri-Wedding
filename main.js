// Countdown
simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 11, // required
  day: 5, // required
  hours: 8, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

// Scroll dan Audio
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.querySelector("#song");
let isPlaying = false;

function disableSCroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {
    rootElement.style.scrollBehavior = "smooth";
  };
  playAudio();
}

function playAudio() {
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.addEventListener("click", function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
});

disableSCroll();

// Animasi
function handleScrollAnimation() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.classList.add("show");
    }
  });
}

// Tambahkan event listener saat pengguna menggulir
window.addEventListener("scroll", handleScrollAnimation);

// Panggil fungsi untuk menampilkan elemen yang sudah terlihat saat halaman dimuat
handleScrollAnimation();

// Animasi Foto
const gambar = document.getElementById("gambar");

// Fungsi untuk mengaktifkan goyangan
function aktifkanGoyangan() {
  gambar.classList.add("bergoyang");
}

// Fungsi untuk menonaktifkan goyangan
function nonaktifkanGoyangan() {
  gambar.classList.remove("bergoyang");
}

// Setel event mouseover dan mouseout untuk mengaktifkan dan menonaktifkan goyangan
gambar.addEventListener("mouseover", aktifkanGoyangan);
gambar.addEventListener("mouseout", nonaktifkanGoyangan);

// Komentar
(function () { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://fikri-wedding.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
