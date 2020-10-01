import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer"

test ('collapsed should be false',()=>{
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true)
})
test ('collapsed should be true',()=>{
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false)
})
test ('reducer should throw error',()=>{
    //data
    const state: StateType = {
        collapsed: true
    }
    //action

    //expection
    expect(()=>{
        reducer(state,{type:'FAKETYPE'})
    }).toThrowError()
})