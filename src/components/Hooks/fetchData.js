async function fetchData(user) {
    try{
    const response = await fetch(`https://api.github.com/users/${user}`);
    if(!response.ok){
        if(response.status === 404){
            throw new Error(`User doesn't exist`)
        }
        else{
            throw new Error("An Unexpected Error while fetching data")
        }
    }
    const data = await response.json();
    return data;
    }
    catch(e){
        console.log(e.message)
    }
}

export default fetchData;
