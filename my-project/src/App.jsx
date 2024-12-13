import { Button } from "./components/ui/button"
import { CarouselDemo } from "./components/Demo/CarouselDemo"
// import { ShimmerButtonDemo } from "./components/Demo/ShimmerButtonDemo"
function App() {
 

  return (
    <>
      <Button>Click me</Button>
     <div className = "px-20"> <CarouselDemo/>
     </div>
     {/* <ShimmerButtonDemo/> */}
    </>
  )
}

export default App
