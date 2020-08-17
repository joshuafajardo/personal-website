import React from 'react';
import Gallery from "react-photo-gallery";
import { Layout } from './Components/Layout.js';

const numImages = 3;
var photoUrls = [numImages];
for (let i = 0; i < numImages; i++) {
    photoUrls[i] = {src:'./Assets/gallery-'.concat([i.toString(), '.jpg']),
                    width: 3,
                    height: 3}
}

export const Photography = () => (
    <Layout>
        <Gallery photos={photoUrls}/>
    </Layout>
)