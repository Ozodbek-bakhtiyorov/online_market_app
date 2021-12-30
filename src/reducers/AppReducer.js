export const  reducer =(state,action)=>{
    const {type,payload} = action;
    switch(type){
        case 'TOGGLE_MODAL':{
            payload.stopPropagation();
           setTimeout(()=>{
               document.body.style.overflow=`${!state.isOpenCard ? 'hidden':'auto'}`;
           },400)
            return{
                ...state,
                isOpenCard:!state.isOpenCard
            }
        }
        case 'ADD_TO_CART':{
            console.log(payload);
            const currItemIndex = state.orders.findIndex(el=>el.id === payload.id);
            let newOrderList = [];
            if(currItemIndex < 0){
                newOrderList = [...state.orders,{...payload,qty:1}]
            }
            else{
                newOrderList = state.orders.map((item,index)=>{
                    if(index === currItemIndex){
                        return{
                            ...item,
                            qty:item.qty+1
                        }
                    }
                    else{
                        return item;
                    }
                })
            }
            return{
                ...state,
                orders:newOrderList
            }
        }
        case 'INCR':
        return {
           ...state,
           orders:state.orders.map(el=>{
               if(el.id === payload){
                   return{
                       ...el,
                       qty:el.qty+1
                   }
               }
               else return el;
           })
        }
        case 'DECR':
            return {
                ...state,
                orders:state.orders.map(el=>{
                    if(el.id === payload){
                        return{
                            ...el,
                            qty:el.qty <= 1 ? 1:el.qty-1
                        }
                    }
                    else return el;
                })
            }
        case 'DEL':
            return{
                ...state,
                orders:state.orders.filter(el=>el.id !== payload)
            }
        default:
            return state;
    }
}
