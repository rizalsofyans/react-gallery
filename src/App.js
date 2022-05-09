import { useState } from 'react';

import './App.css';

import carbage from './assets/image1.jpeg';
import mango from './assets/image2.jpeg';
import fig from './assets/image3.jpeg';
import gaze from './assets/image4.jpeg';
import peach from './assets/image5.jpeg';
import avocado from './assets/image6.jpeg';

const images = [carbage, mango, fig, gaze, peach, avocado];

const Loading = ({ calculateWidth }) => (
    <aside>
        <div className='loading-bar'>
            <label htmlFor='images-loaded'>
                Loading all your favorite images...
            </label>
            <progress
                id='images-loaded'
                max='100'
                value={calculateWidth}
            ></progress>
        </div>
    </aside>
);

const App = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [numLoaded, setNumLoaded] = useState(0);

    const handleClick = () => {
        setCurrentImage((currentImage) => {
            return currentImage < images.length - 1 ? currentImage + 1 : 0;
        });
    };

    const handleImageLoad = () => {
        setNumLoaded((numLoaded) => numLoaded + 1);
    };

    return (
        <section className='App'>
            <header className='title'>
                <h1>Zesty</h1>
                <h2>
                    A photography project <br /> by Ella Fieldiling.
                </h2>
            </header>
            <figure className='image-container'>
                {numLoaded < images.length && (
                    <Loading
                        calculateWidth={(numLoaded / images.length) * 100}
                    />
                )}
                <figcaption>
                    {currentImage} / {images.length}
                </figcaption>
                {images.map((imageURL, index) => (
                    <img
                        key={imageURL}
                        src={imageURL}
                        onClick={handleClick}
                        onLoad={handleImageLoad}
                        className={currentImage === index ? 'display' : 'hide'}
                        alt=''
                    />
                ))}
            </figure>
        </section>
    );
};

export default App;
