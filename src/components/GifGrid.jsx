import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks';
export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h4>{category}</h4>
            { isLoading && (<h3> Loading... </h3>) }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}