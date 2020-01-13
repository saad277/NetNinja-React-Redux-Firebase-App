





const createProject = (project) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection("projects").add({


            ...project,
            authorFirstName: "Net",
            authorLastname: "Ninja",
            authorId: "12345",
            createdAt: new Date()
        }).then(() => {

            dispatch(
                {


                    type: "CREATE_PROJECT",
                    payload: project

                }
            )

        }).catch((error) => {

            dispatch(
                {
                    type: "CREATE_PROJECT_ERROR",
                    error,
                }
            )

        })





    }




}


export default createProject;