const input = document.querySelector('input');
const img = document.querySelector('.image');
const gitname = document.querySelector('.name');
const gitrepo = document.querySelector('.repo');
const gitloc = document.querySelector('.loc');
const gitFollowers = document.querySelector('.followers');
const gitFollowing = document.querySelector('.following');
const gitfetchFollowers = document.querySelector('.fetchfollowers');


let xhr = new XMLHttpRequest;
let xhr2 = new XMLHttpRequest;

function fetch(){
  input.addEventListener('keyup',event => {
    if(event.keyCode == 13){
      var userName = event.target.value;
      xhr.open('GET',`https://api.github.com/users/${userName}`)
      xhr.onload = display;
      xhr.send();
      input.value='';
      gitfetchFollowers.innerHTML = '';
    }
  });
  
}

function fetchfollower(){
  gitFollowers.addEventListener('click',event => {
    xhr2.open('GET',JSON.parse(xhr.response).followers_url)
      xhr2.onload = display2;
      xhr2.send();
  })
}

function display(){
  img.src = JSON.parse(xhr.response).avatar_url
  gitname.textContent = JSON.parse(xhr.response).name;
  gitrepo.textContent = JSON.parse(xhr.response).public_repos;
  gitloc.textContent = JSON.parse(xhr.response).location;
  gitFollowers.textContent = JSON.parse(xhr.response).followers
  gitFollowing.textContent = JSON.parse(xhr.response).following
  
}

function display2(){
  gitfetchFollowers.innerHTML = '';
  ([...JSON.parse(xhr2.response)].forEach(e =>{
const li = document.createElement('li');
li.textContent = (e.login);
gitfetchFollowers.append(li)

  }))
}

fetch();
fetchfollower();
