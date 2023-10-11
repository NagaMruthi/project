// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getallusers:builder.query({
      query:()=>`users`
    }),
    getuserid:builder.query({
      query:(id)=>`users/${id}`
    }),
    getuserposts:builder.query({
      query:()=>`posts`
    }),
    getusercomment:builder.query({
      query:()=>`comments`
    }),
    getadduser: builder.mutation({
      query: (newuser)=> {
        return{
      url:`users`,
      method:'POST',
      body:newuser,
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetadduserMutation,useGetallusersQuery,useGetuseridQuery,useGetuserpostsQuery,useGetusercommentQuery} = userApi;