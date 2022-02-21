
export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=bBvv02IvTkVTn3cMuznojDKHU14IoqME&q=`;
    const respo = await fetch( url );
    const { data } = await respo.json();

    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    
    return gifs;
}