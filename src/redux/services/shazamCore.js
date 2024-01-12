import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam', 
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee');

            return headers; 
        },
    }),
endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/top_tracks_country'}),    
}) ,
});
    
export const {
    useGetTopChartsQuery,   
} = shazamCoreApi; 




// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee',
//       'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-api6.p.rapidapi.com/shazam/top_tracks_country', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));  