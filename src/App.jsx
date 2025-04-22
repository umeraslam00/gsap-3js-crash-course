import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GsapTo from "./pages/GsapTo"
import GsapFrom from "./pages/GsapFrom"
import GsapFromTo from "./pages/GsapFromTo"
import GsapTimeline from "./pages/GsapTimeline"
import GsapStagger from "./pages/GsapStagger"
import GsapScrollTrigger from "./pages/GsapScrollTrigger"
import GsapText from "./pages/GsapText"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
