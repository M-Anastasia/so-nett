const url = "http://<host>:<port>/api"

export const getConjugations = async () => {
    return await fetch(url + '/conjugations/100', {
        method: 'GET'
    }).then(response => response.json());
}
