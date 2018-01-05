import React from 'react'
import {Provider} from 'react-redux'
import Asynaction from '../container/Asynaction'
import asynStore from '../store/store/asynStore'

const store = asynStore()

const Asyn = () => (

    <Provider store={store}>
        <Asynaction/>
    </Provider>
)

export default Asyn
