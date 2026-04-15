let stories = JSON.parse(localStorage.getItem("stories")) || [];

function addStory() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;

  stories.push({ title, image });

  localStorage.setItem("stories", JSON.stringify(stories));

  alert("تمت الإضافة 🔥");
}
