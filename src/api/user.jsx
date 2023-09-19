import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import {fakeMenu} from "../../data/fakeMenu"


export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnapshot =  await getDoc(docRef)
    console.log("docSnapshot : ", docSnapshot);

    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        console.log("userReceived : ", userReceived);
    }
}

export const createUser = (userId) => {

    // CACHETTE
    const docRef = doc(db, "users", userId)

    // NOURRITURE
    const user = {
        username: userId,
        menu: fakeMenu.LARGE
    }

    // ENVOI setDoc(CACHETTE, NOURRITURE)
    setDoc(docRef, user)
}