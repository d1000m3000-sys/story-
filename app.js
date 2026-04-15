const stories = [
  {
    img: "https://picsum.photos/400/600?1",
    title: "الحب الحقيقي"
  },
  {
    img: "https://picsum.photos/400/600?2",
    title: "الحياة صعبة لكن جميلة"
  },
  {
    img: "https://picsum.photos/400/600?3",
    title: "لا تستسلم أبداً"
  },
  {
    img: "https://picsum.photos/400/600?4",
    title: "الله مع الصابرين"
  }
];

const grid = document.getElementById("grid");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

let currentImg = "";

stories.forEach(story => {
  grid.innerHTML += `
    <div class="card" onclick="openViewer('${story.img}')">
      <img src="${story.img}" />
      <p>${story.title}</p>
    </div>
  `;
});

function openViewer(img) {
  currentImg = img;
  viewerImg.src = img;
  viewer.style.display = "flex";
}

function closeViewer() {
  viewer.style.display = "none";
}

function downloadImg() {
  const a = document.createElement("a");
  a.href = currentImg;
  a.download = "story.png";
  a.click();
}

async function shareImg() {
  if (navigator.share) {
    await navigator.share({
      title: "Story+",
      url: currentImg
    });
  } else {
    alert("المشاركة غير مدعومة في هذا الجهاز");
  }
}
