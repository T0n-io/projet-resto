import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import {fakeMenu} from "../../data/fakeMenu"


export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)

    const docSnapshot =  await getDoc(docRef)
    // console.log("docSnapshot : ", docSnapshot);

    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        return userReceived
        // console.log("userReceived : ", userReceived);
    }
}

export const createUser = (userId) => {

    // CACHETTE
    const docRef = doc(db, "users", userId)

    // NOURRITURE
    const user = {
        username: userId,
        menu: fakeMenu.SMALL
    }

    // ENVOI setDoc(CACHETTE, NOURRITURE)
    setDoc(docRef, user)
}

export const authenticateUser = async (userId) => { 
    // 1. récupérer un existingUser
const existingUser = await getUser(userId)

//2 sinon créer un newUser
if (!existingUser) {
  createUser(userId)
}
 }