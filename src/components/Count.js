import { useDispatch, useSelector } from "react-redux";
import { addOne } from "../store"

function Count(){

    const dis = useSelector((state) => {
        return state.counts.fool;
      });
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(addOne())
    };
    console.log(dis)

    return (
    <div>
        <div>
        <h4>
        {dis}
        </h4>
        </div>
        <button onClick={handleClick}>click</button>
    </div>
    )


}
export default Count;