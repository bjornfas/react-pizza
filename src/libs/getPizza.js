
const getPizza = async (url) => {
    
    const request = await fetch(url);

    if (!request.ok) {
        throw new Error(`Could not fetch ${url}, status: ${request.status}`);
    }

    const result = await request.json();

    return await result;
     
}

export default getPizza;