import React from 'react';
import Gallery from './Components/Gallery.js';
import { Layout } from './Components/Layout.js';

const numImages = 3;
var imageUrls = [numImages];
for (let i = 0; i < numImages; i++) {
    imageUrls[i] = ('./Assets/gallery-'.concat(i.toString(), '.jpg'));
}

export const Photography = () => (
    <Layout>
        <Gallery images={imageUrls}/>
    </Layout>
)