const grid = document.getElementById("stories");

const stories = [];

for (let i = 1; i <= 100; i++) {
  stories.push({
    title: "حالة رقم " + i,
    image: `https://picsum.photos/400/600?random=${i}`
  });
}

stories.forEach(story => {
  grid.innerHTML += `
    <div class="card">
      <img src="${story.image}">
      <p>${story.title}</p>
    </div>
  `;
});
