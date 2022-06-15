// import { Children } from "react";
import { Route, Routes} from "react-router-dom";


const SubSpecialPage = () => {

    const Accessible = ()=>{
        return(
            <>
                <h1>Accessible Page jjj</h1>
            </>
        )
    }
    

    const Children = () =>{
        return(
            <>
                <h1>Children Page</h1>
            </>
        )
    }

    const Container = () => {
        return(
            <>
                <h1>Container Page</h1>
            </>
        )
    }

    const Spaces = () => {
        return(
            <>
                <h1>Spaces page</h1>
            </>
        )
    }



    return ( 
        <>
            <h1>SubSpecialPage page</h1>
            <Routes>
                <Route path="accessible" element={<Accessible/>} />
                <Route path="childrenG" element={<Children/>} />
                <Route path="container" element={<Container/>} />
                <Route path="spaces" element={<Spaces/>} />
                
                {/* <Children/> */}
            </Routes>
            
        </>
     );
}
 
export default SubSpecialPage;