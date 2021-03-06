export default  (para) =>{
    let data = {
        name: para.name
    };
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items/' + para.id;
        fetch(url, {
            method: 'PATCH',
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
           console.log(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}