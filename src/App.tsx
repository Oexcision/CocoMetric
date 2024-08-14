import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Cocomo from "./pages/Cocomo"
import CocomoTwo from "./pages/CocomoTwo"
import NoPage from "./pages/NoPage"
import FunctionPoint from "./pages/FunctionPoint"
import UseCasePoints from "./pages/UseCasePoints"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Cocomo/>}/>
          <Route path="cocomo" element={<Cocomo/>}/>
          <Route path="cocomo-two" element={<CocomoTwo/>}/>
          <Route path="function-point" element={<FunctionPoint/>}/>
          <Route path="use-case-point" element={<UseCasePoints/>}/>
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
