async function getUserRepos(userName) {
    const users = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    })
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            if (response.message != 'Not Found') {
                localStorage.setItem('Repos', JSON.stringify(response))
            } else {
                console.log('Erro na requisição, por favor verifique as informações e tente novamente.')
            }
        })
}

async function getUser(userName) {
    const user = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(res => {
            if (res.message != 'Not Found') {
                localStorage.setItem('searchUsers', JSON.stringify(res))
                window.location.replace('./src/pages/profile.html')
            } else {
                window.location.replace('./src/pages/error.html')
            }
        })
    return user
}

const searchButton = document.querySelector('.button__section__direita')

const input = document.querySelector('input')

searchButton.addEventListener(`click`, async (e) => {
    e.preventDefault()

    const receivedRepos = await getUserRepos(input.value)
    const receivedValue = await getUser(input.value)
});