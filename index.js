document.addEventListener('DOMContentLoaded', () => {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    document.querySelector('#webpacked .rne').addEventListener('click', () => {
        delay(100)
            .then(() => Promise.reject('just a string'))
    })

    document.querySelector('#webpacked .re').addEventListener('click', () => {
        delay(100)
            .then(() => Promise.reject(new Error('error message')))
    })

    document.querySelector('#webpacked .tne').addEventListener('click', () => {
        delay(100)
            .then(() => { throw 'just a string' })
    })

    document.querySelector('#webpacked .te').addEventListener('click', () => {
        delay(100)
            .then(() => { throw new Error('error message') })
    })


    document.querySelector('#webpacked .aarne').addEventListener('click', async () => {
        await delay(100)

        return Promise.reject('just a string')
    })

    document.querySelector('#webpacked .aare').addEventListener('click', async () => {
        await delay(100)

        return Promise.reject(new Error('error message'))
    })

    document.querySelector('#webpacked .aatne').addEventListener('click', async () => {
        await delay(100)

        throw 'just a string'
    })

    document.querySelector('#webpacked .aate').addEventListener('click', async () => {
        await delay(100)

        throw new Error('error message')
    })
})
