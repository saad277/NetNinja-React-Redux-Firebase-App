


const iState={

        authError:"null",


}



const authReducer=(state=iState,action)=>{


    switch(action.type){

        case "LOGIN_ERROR":
            console.log("login error")
            return {

                    ...state,
                    authError:"LOGIN_FAILED"
            }

        case "LOGIN_SUCCESS":
            console.log("Login success");
            return {

                    ...state,
                    authError:"null"
            }

        case "SIGN_OUT_SUCCESS":
            console.log("signout success");
            return{

                        ...state,
            }

        case "SIGN_UP_SUCCESS":
            console.log("Sign up success");
            return {


                ...state,
                authError:null
            }

        case "SIGN_UP_ERROR":
            console.log("Sign up error");

            return {
                    ...state,
                    authError:action.error

            }

        default:
            return state;

    }


   
}

export default authReducer;