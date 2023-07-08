import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="font-bold text-xs mt-10 text-white-100">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
