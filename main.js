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

//Komentar
function submitComment(event) {
  event.preventDefault(); // Menghentikan pengiriman form default

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  // Buat elemen baru untuk menampilkan komentar
  const commentElement = document.createElement("div");
  commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;

  // Tambahkan komentar ke dalam div "comments"
  document.getElementById("comments").appendChild(commentElement);

  // Bersihkan input
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}

// Mengaitkan fungsi submitComment dengan form
document.getElementById("comment-form").addEventListener("submit", submitComment);