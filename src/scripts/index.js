function listaDom(list1, list2){
   
    for(let i = 0; i < list1.length; i++){

        let post = list1[i]

        let frontEnd = document.querySelector('.section__block--frontend')

        let ul = document.createElement('ul')
        ul.classList.add('section__list')
        frontEnd.appendChild(ul)

        let titleBlock = document.createElement('div')
        titleBlock.classList.add('card__block--tittle')
        ul.appendChild(titleBlock)

        let img = document.createElement('img')
        img.alt = 'User Logo'
        img.src = './src/img/logo.svg'
        img.classList.add('card__img')
        titleBlock.appendChild(img)

        let titleBlock2 = document.createElement('div')
        titleBlock2.classList.add('card_block--infos')
        titleBlock.appendChild(titleBlock2)

        let cardTittle = document.createElement('h2')
        cardTittle.classList.add('card__tittle')
        cardTittle.innerText = post.title
        titleBlock2.appendChild(cardTittle)

        let cardCity = document.createElement('p')
        cardCity.classList.add('card__city')
        cardCity.innerText = post.city
        titleBlock2.appendChild(cardCity)

        let cardDescription = document.createElement('p')
        cardDescription.classList.add('card__description')
        cardDescription.innerText = post.description
        ul.appendChild(cardDescription)

        let modalityBlock = document.createElement('div')
        modalityBlock.classList.add('modality__block')
        ul.appendChild(modalityBlock)

        let cardModality = document.createElement('p')
        cardModality.classList.add('card__modality')
        cardModality.innerText = post.modality[0]
        modalityBlock.appendChild(cardModality)

        let cardModality2 = document.createElement('p')
        cardModality2.classList.add('card__modality')
        cardModality2.innerText = post.modality[1]
        modalityBlock.appendChild(cardModality2)
        
    }

    for(let i = 0; i < list2.length; i++){

        let post = list2[i]

        let backend = document.querySelector('.section__block--backend')

        let ul = document.createElement('ul')
        ul.classList.add('section__list')
        backend.appendChild(ul)

        let titleBlock = document.createElement('div')
        titleBlock.classList.add('card__block--tittle')
        ul.appendChild(titleBlock)

        let img = document.createElement('img')
        img.alt = 'User Logo'
        img.src = './src/img/logo.svg'
        img.classList.add('card__img')
        titleBlock.appendChild(img)

        let titleBlock2 = document.createElement('div')
        titleBlock2.classList.add('card_block--infos')
        titleBlock.appendChild(titleBlock2)

        let cardTittle = document.createElement('h2')
        cardTittle.classList.add('card__tittle')
        cardTittle.innerText = post.title
        titleBlock2.appendChild(cardTittle)

        let cardCity = document.createElement('p')
        cardCity.classList.add('card__city')
        cardCity.innerText = post.city
        titleBlock2.appendChild(cardCity)

        let cardDescription = document.createElement('p')
        cardDescription.classList.add('card__description')
        cardDescription.innerText = post.description
        ul.appendChild(cardDescription)

        let modalityBlock = document.createElement('div')
        modalityBlock.classList.add('modality__block')
        ul.appendChild(modalityBlock)

        let cardModality = document.createElement('p')
        cardModality.classList.add('card__modality')
        cardModality.innerText = post.modality[0]
        modalityBlock.appendChild(cardModality)

        let cardModality2 = document.createElement('p')
        cardModality2.classList.add('card__modality')
        cardModality2.innerText = post.modality[1]
        modalityBlock.appendChild(cardModality2)
        
    }

}

listaDom(frontEndJobs, backEndJobs)