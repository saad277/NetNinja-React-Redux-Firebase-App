import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from "redux";
import {Provider} from "react-redux";
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import firebase from './Config/FBconfig'


const store=createStore(rootReducer,
    
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase , {useFirestoreForProfile:true  ,userProfile:'users',  attachAuthIsReady:true  }),
    reduxFirestore(firebase)
    )
    )

    
store.firebaseAuthIsReady.then(()=>{

    ReactDOM.render(<Provider store={store} ><App /></Provider>,   document.getElementById('root'));


    serviceWorker.unregister();

})


