import Error from "@/components/Error"
import Layout from "@/components/Layout"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import authContext from "@/context/auth/authContext"
import { useContext, useEffect } from "react"
import Alert from "@/components/Alert"
import { useRouter } from "next/router"
const Login = () => {
    const { authUser, message, authenticated, error } = useContext(authContext)
    const router = useRouter()
    useEffect( () => {
        if( authenticated ) {
            router.push('/')
        }
    }, [authenticated])

    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
            password: Yup.string().required('El password no puede ser vacio')
        }),
        onSubmit: values => {
            authUser(values)
        }

    })
    
  return (
    <Layout >
        <div className="md:w-4/5 w-3/5 mx-auto mb-32"></div>
        <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Iniciar Sesión</h2>
        {message && <Alert message={message} error={error} />}
        <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
                <form
                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email de usuario</label>
                        <input 
                            type="email" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <Error message={formik.errors.email} />
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">Password usuario</label>
                        <input 
                            type="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <Error message={formik.errors.password} />
                        )}
                    </div>
                    <input 
                        type="submit" 
                        className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold hover:cursor-pointer"
                        value="Iniciar Sesión"
                    />
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Login