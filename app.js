const grid = document.getElementById("stories");

async function loadStories() {
  const res = await fetch("stories.json");
  const data = await res.json();

  data.forEach(story => {
    grid.innerHTML += `
      <div class="card">
        <img src="${story.image}">
        <p>${story.title}</p>
      </div>
    `;
  });
}

loadStories();
