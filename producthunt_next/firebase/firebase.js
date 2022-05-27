import { initializeApp } from "firebase/app";
import firebaseConfig from './config'
import { createUserWithEmailAndPassword, getAuth, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, getDocs, query, orderBy, limit, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


class Firebase {

    constructor()  {
        const app = initializeApp(firebaseConfig)
        this.auth = getAuth(app)
        this.db = getFirestore(app);
        this.storage = getStorage(app);

    }

    // Registra un usuario
    async registrar( nombre, email, password ) {


        const nuevoUsuario = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        )
        return await updateProfile(this.auth.currentUser,{
            displayName: nombre
        })

    }

    // Inicia sesión del usuario
    async iniciarSesion ( email, password ) {
        return await signInWithEmailAndPassword(this.auth, email, password)

    }

    // Cerrar Sesión
    async cerrarSesion( ) {
        await this.auth.signOut();
    }

    async subirImagen(storageRef, file) {
        await uploadBytes(storageRef, file)
    }

    async obtenerImagen(pathName) {

        return await getDownloadURL(ref(this.storage, pathName))

    }

    async obtenerProductosPorVotos() {

        const q = query(collection(this.db, "productos"), orderBy("votos",'desc'), limit(3));
        const querySnapshot = await getDocs(q);
        
        const productos = querySnapshot.docs.map( doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })

        return productos
    }
    async obtenerProductos() {

        const q = query(collection(this.db, "productos"), orderBy("creado",'desc'), limit(3));
        const querySnapshot = await getDocs(q);
        
        const productos = querySnapshot.docs.map( doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })

        return productos
    }
    async obtenerProductosPorId(id) {
        const docRef = doc(this.db, "productos", id);
        const docSnap = await getDoc(docRef);
        return docSnap;

    }

    async nuevoVoto(idProducto, votos, haVotado) {
        const docRef = doc(this.db, "productos", idProducto);
        await updateDoc(docRef, { votos, haVotado });
    }
    async nuevoComentario(idProducto, comentarios) {
        const docRef = doc(this.db, "productos", idProducto);
        await updateDoc(docRef, { comentarios });
    }

    async eliminarProducto(idProducto){
        const docRef = doc(this.db, "productos", idProducto);
        await deleteDoc(docRef)
    }


}

const firebase = new Firebase()
export default firebase;