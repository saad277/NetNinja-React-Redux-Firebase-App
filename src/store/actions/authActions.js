
export const signIn = (credentials) => {

        console.log(credentials)


        return (dispatch, getState, { getFirebase }) => {


                const firebase = getFirebase();

                firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {

                        dispatch({
                                type: "LOGIN_SUCCESS"


                        })

                }).catch((error) => {

                        dispatch({
                                type: "LOGIN_ERROR",
                                error

                        })


                })


        }







}




export const signOut = () => {

        return (dispatch, getState, { getFirebase }) => {

                        const firebase=getFirebase();

                        firebase.auth().signOut().then(()=>{

                                        dispatch({

                                                type:"SIGN_OUT_SUCCESS"
                                        })


                        })



        }






}


export const signUp=(credentials)=>{

return (dispatch,getState,{getFirebase,getFirestore})=>{


        const firebase=getFirebase();
        const firestore=getFirestore();


        firebase.auth().createUserWithEmailAndPassword(

                credentials.email,
                credentials.password

        ).then((response)=>{

                return firestore.collection('users').doc(response.user.uid).set({

                                firstName: credentials.firstName,
                                lastName:credentials.lastName,
                                initials:credentials.firstName[0] + credentials.lastName[0]

                })



        }).then(()=>{

                        dispatch({
                                        type:"SIGN_UP_SUCCESS"

                        })



        }).catch((error)=>{

                        dispatch({

                                        type:"SIGN_UP_ERROR",
                                        error:error
                                
                        })
                        console.log(error)

        })



}








}