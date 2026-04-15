const grid = document.getElementById("stories");

// جلب البيانات من التخزين
let stories = JSON.parse(localStorage.getItem("stories")) || [];

function render() {
  grid.innerHTML = "";

  stories.forEach(story => {
    grid.innerHTML += `
      <div class="card">
        <img src="${story.image}">
        <p>${story.title}</p>
      </div>
    `;
  });
}

render();
