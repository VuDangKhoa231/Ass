export const initState={
    count:100
};

export const Reducer=(state=initState,action)=>{
    switch(action.type){
        case "INCRE":
            return {
                count : state.count + 1
            }
        case "DECRE":
            return {
                count : state.count - 1
            }
        default:
            return state;
    }
};