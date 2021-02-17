import React,{useReducer} from 'react'
import '../css/App.css'



const App = () => {

  let [{breaks,dinners},setState]= useReducer(reducer, {breaks: [], dinners: []})


function reducer (prevState,state){

  return{...prevState,...state}

    }

      const handleKeyPress=(e)=>{
        if(e.key !== "Enter")return
        if(e.target.name === "breakfast"){
          let list = [...breaks]
          list.unshift(e.target.value)
          setState({breaks: list})
        }else{
          let list = [...dinners]
          list.unshift(e.target.value)
          setState({dinners: list})
        }
      }

      return (
<>


<main className="container">

        <h1 id="title" className=" text-center ">🧁  Mizzrawr's Meal Lists 🧁 </h1>


        <div className="card">

        <h2 className="btn btn-primary btn-lg btn-block">Breakfast: </h2>
        <input
        placeholder="Enter your meal here"
        name="breakfast"
        className="input form-control form-control-lg "
        onKeyPress={handleKeyPress}
        type="text"/>

        <ul>
          {breaks.map((el,i)=>(
            <li
            className="form-control text-primary"
            onClick={()=> setState({breaks: breaks.filter(item=>item!==el)})} key={i}>
                      {el}
            </li>
          ))}
        </ul>
        </div>
        <hr/>
        <hr/>

        {/* Second Part  */}



<div className="card">
        <h2 className="btn btn-primary btn-lg btn-block">Dinner: </h2>
        <input
        placeholder="Enter your meal here"
        name="dinner"
        className="input form-control form-control-lg"
        onKeyPress={handleKeyPress}
        type="text"/>

          <ul>
          {dinners.map((el,i)=>(
            <li
            className="form-control text-primary"
            onClick={()=> setState({dinners: dinners.filter(item=>item!==el)})} key={i}>
                      {el}
            </li>
          ))}
        </ul>
</div>
</main>

        </>
      );
    };

    export default App;