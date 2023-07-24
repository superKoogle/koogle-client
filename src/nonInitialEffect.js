// import { useEffect ,EffectCallback,DependencyList,useRef} from "react";

//  const useNonInitialEffect = (effect,deps)=>{
//     const initialRender = useRef(true);
//     useEffect(()=>{
//         let effectReturns=()=>{};
//         if(initialRender.current){
//             initialRender.current=false;
//         }
//         else{
//             effectReturns=effect();
//         }
//         console.log(typeof effectReturns)
//         if(effectReturns && typeof effectReturns=== "function"){
//             return effectReturns;
//         }
//     },deps)
// }
// export default useNonInitialEffect