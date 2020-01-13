const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//      firebase deploy --only functions


const admin=require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification=(notification)=>{


    return admin.firestore().collection("notifications")
    .add(notification)
    .then((doc)=>{
            console.log("Notifications added "+doc)

    })


}


//when project is created
exports.projectCreated=functions.firestore
    .document("projects/{projectId}").onCreate((doc)=>{

            const project=doc.data();
            const notification={

                    content:"Added a new project",
                    user: `${project.authorFirstName} ${project.authorLastname}`,
                    time: admin.firestore.FieldValue.serverTimestamp()

            }

            // calling function //return in compulsory cuz functions expects
            return createNotification(notification)

    })






//when user creates an account
exports.userJoined=functions.auth.user().onCreate((user)=>{

        return admin.firestore().collection("users")
        .doc(user.uid).get().then((doc)=>{

                const newUser=doc.data();
                const notification={

                        content:"Joined the party",
                        user: `${newUser.firstName} ${newUser.Lastname}`,
                        time: admin.firestore.FieldValue.serverTimestamp()

                }

                return createNotification(notification)
        })
})






exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
 });
