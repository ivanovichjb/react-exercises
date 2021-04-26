import React , {useEffect} from 'react';

export const GifGrid = ( {category} ) => {

    const getGifts = async() =>{
        const url = "https://api.giphy.com/v1/gifs/search?api_key=heBvPQrvx7ItmWpUzohNNc3Ac160MD8j&q=Rick&limit=10";
        const resp = await fetch( url );
        const { data } = await resp.json();

        const getGifs = data.map ( img => {
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        });
        return getGifs;
    }

    useEffect(() => {
        getGifts().then( (data)=> {


        }).catch( (e) => {
            console.warn(`Error due to ${ e }`)
        })
    });
    
    return (
        <div>
            { category }
        </div>
    )
}



