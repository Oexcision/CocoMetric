import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Cocomo from "./pages/Cocomo"
import CocomoMiddle from "./pages/CocomoMiddle"
import CocomoTwo from "./pages/CocomoTwo"
import NoPage from "./pages/NoPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="cocomo" element={<Cocomo/>}/>
          <Route path="cocomo-middle" element={<CocomoMiddle/>}/>
          <Route path="cocomo-two" element={<CocomoTwo/>}/>
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
