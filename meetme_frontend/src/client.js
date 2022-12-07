import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import { REACT_APP_SANITY_PROJECT_ID,REACT_APP_SANITY_TOKEN_ID } from './secrets';
export const client = sanityClient({
    projectId :'muiw849t',
    dataset:'production',
    apiVersion: '2021-11-16',
    useCdn:true,
    token:'skEC9WXB7GS224R1wK2ejqZteXOdiX45tByZaB2zDd4E8EK4ilRnk0xkxGPKqdLFF5fnpZg9Gf2p5Fv6yEK1TyyLm8F3QNNrLvrDr3tZp2VRvkoA01gk4AzBOC6jz0lVnneOk0UEDyn44ZQJ7lTmI93ZTqtJBc6sH4KHkXY42OEXYTmOj6RD'
});

// projectId :REACT_APP_SANITY_PROJECT_ID,
// token:REACT_APP_SANITY_TOKEN_ID,

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);