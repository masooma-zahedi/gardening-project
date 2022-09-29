import react from "react";
import { Link, Route, Routes} from "react-router-dom";

const GeneralPageHouse = ()=>{
    const StopGrowing = ()=>{
        return(
            <>
                <h1>StopGrowing page</h1>
            </>
        )
    }

    const PatchesOfBrown = ()=>{
        return(
            <>
                <h1>PatchesOfBrown Page</h1>
            </>
        )
    }

    const Dieffenbachia = ()=>{
        return(
            <>
                <h1>Dieffenbachia page</h1>
            </>
        )
    }
    const Citronella  = ()=>{
        return(
            <>
                <h1>Citronella page</h1>
            </>
        )
    }
    const Placement = ()=>{
        return(
            <>
                <h1>placement page</h1>
            </>
        )
    }

    return(
        <>
            <h1>this is General page</h1>
            <Routes>
                <Route path="stopGrowing" element={<StopGrowing/>} />
                <Route path="patchesOfBrown" element={<PatchesOfBrown/>} />
                <Route path="dieffenbachia" element={<Dieffenbachia/>} />
                <Route path="citronella" element={<Citronella/>} />
                <Route path="placement" element={<Placement/>} />
            </Routes>
        </>
    )
}
export default GeneralPageHouse;