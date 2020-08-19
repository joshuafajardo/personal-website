import React from 'react';
import Gallery from "react-photo-gallery";
import { Layout } from './Components/Layout.js';
import { photos } from './Components/photos.js';

export const Photography = () => (
    <Layout>
        <Gallery photos={photos}/>
    </Layout>
)