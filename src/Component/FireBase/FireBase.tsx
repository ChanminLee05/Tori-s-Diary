import {initializeApp} from 'firebase/app';
import {collection, doc, getDoc, getDocs, getFirestore, setDoc} from 'firebase/firestore';

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

export async function saveGalleryData(selectedImage: string | ArrayBuffer | null, day: string, imageId: string) {
    const imageDocRef = doc(db, "gallery", day, "images", imageId);

    try {
        await setDoc(imageDocRef, {
            url: selectedImage,
        });
        console.log("Image saved to gallery!");
    } catch (err) {
        console.error("Error saving image:", err);
    }
}

export async function loadGalleryData(day: string, imageId: string) {
    const imageDocRef = doc(db, "gallery", day, "images", imageId);
    try {
        const docSnap = await getDoc(imageDocRef);
        if (docSnap.exists()) {
            return docSnap.data()?.url || null;
        } else {
            console.log("No image found for this day and imageId.");
            return null;
        }
    } catch (err) {
        console.error("Error loading image:", err);
        return null;
    }
}
