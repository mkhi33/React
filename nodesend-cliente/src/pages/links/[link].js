import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import axiosClient from '@/config/axios'
import Link from 'next/link';


export async function getServerSideProps({params}) {
    const { link } = params;

    const response = await axiosClient.get(`/links/${link}`);
    
    return {
        props: {
            link: response?.data || null
        }
    }
}

export async function getServerSidePaths() {
        const response = await axiosClient.get('/links');
        console.log(response.data.links)
        return {
            paths: response.data.links.map( link => ( {
                params: { link : link.url }
            })),
            fallback: false
        }
}



const LinkPage = ({link}) => {

  return (
    <Layout>
        <h1 className='text-4xl text-center text-gray-700'>Descarga tu archivo:</h1>
        <div className='flex items-center justify-center mt-10'>
        <Link className="bg-red-500 text-center px-10  py-3 rounded uppercase font-bold text-white cursor-pointer" href={`${process.env.NEXT_PUBLIC_API_URL}/files/${link.file}`}>Aquí</Link>
        </div>
    </Layout>
  )
}

export default LinkPage
