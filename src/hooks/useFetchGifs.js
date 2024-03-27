import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        // const newImages = getGifs(category);
        // setImages(newImages);

        // getGifs(category)
        //     .then(response => setImages(response));

        getImages();
    }, []);

    return {
        images,
        isLoading
    };
}
