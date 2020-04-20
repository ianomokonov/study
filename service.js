function find(value){
    return fetch(`https://api.github.com/search/users?q=${value}`).then(
        response => {
            return response.json()
        }
    );
}