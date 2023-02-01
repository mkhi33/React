import Layout from '@/components/Layout'
import { useState, useContext } from 'react'
import axiosClient from '@/config/axios'
import Link from 'next/link';
import appContext from '@/context/app/appContext';
import Alert from '@/components/Alert';


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
        return {
            paths: response.data.links.map( link => ( {
                params: { link : link.url }
            })),
            fallback: false
        }
}



const LinkPage = ({link}) => {

    const AppContext = useContext(appContext);
    const { message_file, showAlert } = AppContext;

    const [ havePassword, setHavePassword ] = useState(link.password);
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(false);

    const verifyPassword = async e => {
        e.preventDefault();
        const data = {
            password
        }
        try {
            const response = await axiosClient.post(`/links/${link.link}`, data);
            setHavePassword(response.data.password);
        } catch (error) {
            setError(true);
            showAlert(error.response.data.msg);
        }
            
    }
  return (
    <Layout>
        {havePassword ? (
            <>
                <p className='text-center'>Este enlace está protegido por contraseña</p>
                {message_file && <Alert message={message_file} error={error} />}
                <div className='flex justify-center mt-5'>

                    <div className="w-full max-w-lg">
                        <form
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={ e => verifyPassword(e) }
                        >
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="password">contraseña</label>
                                <input 
                                    type="password" 
                                    name='password'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="password"
                                    value={password}
                                    onChange={ e => setPassword(e.target.value) }
                                />

                            </div>
                            <input 
                                type="submit" 
                                className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold hover:cursor-pointer"
                                value="Validar password"
                            />

                        </form>
                    </div>

                </div>
            </>
        ) : (
            <>
                <h1 className='text-4xl text-center text-gray-700'>Descarga tu archivo:</h1>
                <div className='flex items-center justify-center mt-10'>
                <Link className="bg-red-500 text-center px-10  py-3 rounded uppercase font-bold text-white cursor-pointer" href={`${process.env.NEXT_PUBLIC_API_URL}/files/${link.file}`}>Aquí</Link>
                </div>
            </>
        )}
    </Layout>
  )
}

export default LinkPage
