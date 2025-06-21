import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress}= useProgress();
  return (
   <Html>
    <span className="canvas-load"></span>
    <p 
    style={{
      fontSize: "14px",
      color: "white",
      fontWeight: 800,
      marginTop: "40px",
      textAlign: "center"
    }}>
      {progress.toFixed(2)}% 
    </p>
   
   </Html>
  )
}

export default Loader