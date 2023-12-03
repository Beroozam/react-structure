import {BaseQueryFn} from "@reduxjs/toolkit/dist/query/react";
import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {createApi} from "@reduxjs/toolkit/query/react";


type Fn = BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      headers?: AxiosRequestConfig['headers']
      params?: AxiosRequestConfig['params']
      fullResult?: boolean
    }
    >

const baseQuery: Fn = async ({ url, method, data, headers, params, fullResult=false,...moreParams }) => {
  const userPackageId = localStorage.getItem('user')&&JSON.parse(localStorage.getItem('user'))?.package?.id
  if(data&&userPackageId){
    data.package = userPackageId
  }
  try {
    const result = await axios({ url: process.env.REACT_APP_BASE_URL + url, method, data, params,headers,...moreParams })
    return { data: fullResult?result:result.data }
  }
  catch (axiosError) {
    let err = axiosError as AxiosError
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    }
  }
}


export const baseApi = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQuery,
  tagTypes: ['datasets','intents','qas','contexts','package','sitemaps','sitemap_contexts','Validations','Inputs','Forms','FormsHistory','Users','widget','IntentsWithDetails'],
  endpoints: () => ({}),
})
