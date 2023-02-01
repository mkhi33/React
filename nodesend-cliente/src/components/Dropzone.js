import { useDropzone } from 'react-dropzone';
import { useContext, useCallback } from 'react'
import appContext from '@/context/app/appContext';
import authContext from '@/context/auth/authContext';
import Form from './Form';

const Dropzone = () => {

    const AppContext = useContext(appContext);
    const AuthContext = useContext(authContext);

    const { showAlert , uploadFile, loading, createLink} = AppContext;
    const { user, authenticated } = AuthContext;

    const onDropAccepted = useCallback( async (acceptedFiles) => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);

        console.log(acceptedFiles)

        uploadFile(formData, acceptedFiles[0].path);

    }, [])

    const onDropRejected = () => {
        showAlert('No se pudo subir el archivo, el límite es de 1MB, obtén una cuenta gratis para subir archivos más grandes');
    }

    const handleChange = e => {
        console.log(e.target.files[0])
    }
    
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({onDropAccepted, onDropRejected, maxSize:1000000})
    const files = acceptedFiles.map( file => (
        <li key={file.lastModified} className='bg-white flex-1 p-3 mb-4 shadow-lg rounded'>
            <p className='font-bold text-xl'>{file.path}</p>
            <p className='text-sm text-gray-500'>{ (file.size / Math.pow(1024, 2)).toFixed(3)} MB</p>
        </li>
    ));



  return (
    <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
        {acceptedFiles.length > 0 ? (
            <div className='mt-10 w-full'>
                <h4 className='text-2xl font-bold text-center mb-4'>Archivos</h4>
                <ul>
                    {files}
                </ul>

                { authenticated ? (
                    <Form />
                ): (null)}

                { loading ? <p className='my-10 text-center text-gray-600'>Subiendo archivo...</p> : (
                    <button onClick={ () => createLink() } type="button" className='bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800'>Compartir archivos</button>
                )}
            </div>
        ) : (
            <div {...getRootProps({ className: 'dropzone w-full py-32' })}>
                <input className="h-100" {...getInputProps()} />
                { isDragActive ? <p className="text-2xl text-center text-gray-600">Suelta el archivo</p> : (
                    <div className='text-center'>
                        <p className="text-2xl text-center text-gray-600">Selecciona un archivo y arrastralo aquí</p>
                        <button type="button" className='bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800'>Selecciona archivos para subir</button>
                    </div>
                )}

            </div>
        )}

        
    </div>
  )
}

export default Dropzone