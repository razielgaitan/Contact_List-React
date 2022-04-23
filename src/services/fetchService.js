export const getAllUsers = async () => {
    
    let response = await fetch('https://dummyjson.com/users');
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);

    //devolvemos el contenido en formato json
    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://dummyjson.com/users/${id}`);
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);

    return response.json()
}
