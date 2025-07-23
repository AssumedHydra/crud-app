const postForm = document.getElementById('postForm');
const postInput = document.getElementById('postInput');
const postList = document.getElementById('postList');

let posts = [];

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = postInput.value.trim();
  if (content) {
    posts.push(content);
    renderPosts();
    postInput.value = '';
  }
});

function renderPosts() {
    postList.innerHTML = '';
    posts.forEach((post, index) => {
      const li = document.createElement('li');
      li.textContent = post;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑';
      deleteBtn.onclick = () => {
        posts.splice(index, 1);
        renderPosts();
      };
      li.appendChild(deleteBtn);
      postList.appendChild(li);
    });
  }