import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'


function HooksCakeContainer(){
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    const dispatchBuyCake = () => dispatch(buyCake())
    return(
        <div>
            <h2>Num of Cakes {numOfCakes}</h2>
            <button onClick={dispatchBuyCake}>Buy Cake</button>
        </div>
    )
}
export default HooksCakeContainer