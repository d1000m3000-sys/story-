const stories = [
  { img: "https://picsum.photos/300/400?1", title: "قريباً حالات" },
  { img: "https://picsum.photos/300/400?2", title: "Story+" }
];

const grid = document.getElementById("stories");

stories.forEach(s => {
  grid.innerHTML += `
    <div class="card">
      <img src="${s.img}">
      <p>${s.title}</p>
    </div>
  `;
});
