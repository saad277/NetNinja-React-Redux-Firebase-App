






const iState={

    projects:[
            
            { id:'1', title:"you will never walk alone", content:"Mersyside place"        },
            { id:'2', title:"Los blancos"              ,content:" Spanish place"          },
            { id:'3', title:" Paris st German "        ,content:" Effil tower  "          }                                                                        
        
        
        
        ]


}



const projectReducer=(state=iState,action)=>{


   switch(action.type){

    case "CREATE_PROJECT":
        console.log(action.payload)
        return state
    case "CREATE_PROJECT_ERROE":
        console.log(action.error)
        return state
    default:
        return state

   }
   return state





}

export default projectReducer;