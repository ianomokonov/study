function sendRequest(){
    find(teext.value).then(data => {
        console.log(data.items[0]);
        const img = document.createElement('img');
        img.src = data.items[0].avatar_url;
        document.body.append(img);
    })
}