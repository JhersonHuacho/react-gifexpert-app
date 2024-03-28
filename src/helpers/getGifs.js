export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5r7MRKD79yT3zqVjdv6egHkpvfO7f9Km&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    // console.log(response);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    // console.log(gifs);
    return gifs;
}