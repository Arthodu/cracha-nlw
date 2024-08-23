const linksSocialMedia = {
  github: 'imirante',
  youtube: 'imirante',
  facebook: 'imirante',
  instagram: 'imirante',
  twitter: 'imirante'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)//
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) //se for colocar mais de uma coisa, colocar {} pra separar o response.json
    .then(data => {
      userName.textContent = data.userName
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
//arrow functions
//function nomedaFuncao(argumentos){
//code

//argumento => {}

