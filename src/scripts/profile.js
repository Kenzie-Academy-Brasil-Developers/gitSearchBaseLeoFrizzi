const userInformations = JSON.parse(localStorage.getItem('Repos'))
const userRepos = JSON.parse(localStorage.getItem('searchUsers'))

function createCard(userInfo) {
    const cardSection = document.createElement('section')
    cardSection.classList.add('section')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('div__section')

    const cardDiv2 = document.createElement('div')
    cardDiv2.classList.add('div2__section')

    const cardUserImage = document.createElement('img')
    cardUserImage.src = `${userInfo.avatar_url}`
    cardUserImage.classList.add('user__img')

    const cardUserName = document.createElement(`h2`)
    if (userInfo.name === null) {
        cardUserName.innerText = `${userInfo.login}`
    } else {
        cardUserName.innerText = `${userInfo.name}`
    }

    const cardChangeUserButton = document.createElement(`button`)
    cardChangeUserButton.innerText = `Trocar de usuário`
    cardChangeUserButton.classList.add(`button__div2`)

    cardChangeUserButton.addEventListener(`click`, () => {
        window.location.replace(`../../index.html`)
    })

    cardSection.append(cardDiv2)
    cardDiv2.append(cardDiv, cardChangeUserButton)
    cardDiv.append(cardUserImage, cardUserName)

    return cardSection

}

function createCardReposiorio(userRepositorio) {
    const cardUl = document.createElement('ul')
    cardUl.classList.add('ul')

    const cardLi = document.createElement('li')
    cardLi.classList.add('li__ul')

    const cardRepositorioName = document.createElement('h3')
    cardRepositorioName.innerText = `${userRepositorio.name}`

    const cardUserDescription = document.createElement('p')
    if (userRepositorio.description === null) {
        cardUserDescription.innerText = `Nenhuma descrição.`
    } else {
        cardUserDescription.innerText = `${userRepositorio.description}`
    }
    cardUserDescription.classList.add(`p__repositorio`)

    const cardRepoButton = document.createElement('button')
    cardRepoButton.innerText = `Repositório`
    cardRepoButton.classList.add('button__repositorio')

    cardRepoButton.addEventListener('click', () => {
        window.location = `${userRepositorio.html_url}`
    })

    cardUl.appendChild(cardLi)
    cardLi.append(cardRepositorioName, cardUserDescription, cardRepoButton)

    return cardUl
}

function render(userInfo, userRepositorio) {
    const cardMain = document.querySelector(`.main`)
    const cardSection = document.querySelector(`.section__main`) 

    userInfo.forEach(data => {
        const infos = createCardReposiorio(data);
        cardSection.appendChild(infos)
    })

    const user = createCard(userRepositorio)
    cardMain.appendChild(user)


    return cardMain
}

render(userInformations, userRepos)