import {initializeApp} from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnyO02R3G9wsIQMWoZmDkKiqcIq9097zQ",
    authDomain: "tori-diary.firebaseapp.com",
    databaseURL: "https://tori-diary-default-rtdb.firebaseio.com",
    projectId: "tori-diary",
    storageBucket: "tori-diary.appspot.com",
    messagingSenderId: "55839847101",
    appId: "1:55839847101:web:523ba3c944d203e0e4bdd4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveDiaryData(selectedImage: string | ArrayBuffer | null, title: string, content: string, weather: string, day: string) {
    const docRef = doc(db, "diary", day);
    try {
        await setDoc(docRef, {
            image: selectedImage,
            title: title,
            content: content,
            weather: weather,
        })
        console.log("data saved")
    } catch (err) {
        console.log("Error", err)
    }
}

export async function loadDiaryData(day: string) {
    const docRef = doc(db, "diary", day);
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No data exist")
            return null;
        }
    } catch (err) {
        console.log("Error", err)
        return null;
    }
}
