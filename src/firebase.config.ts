import * as firebase from 'firebase-admin'

export function initializeFirebase(){
    // Service account
    let serviceAccount = JSON.parse(process.env.Firebase)

    // Iniciando app
    firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount)
    })
}