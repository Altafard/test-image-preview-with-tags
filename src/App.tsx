import { useState } from "react";
import './App.css';
import useWindowSize from './hooks/useWindowSize';

export default function App() {
  const {width, height} = useWindowSize();
  const [file, setFile] = useState({
    url: ""
  });

  function handleChange(event: any) {
    setFile({
      url: URL.createObjectURL(event.target.files[0])
    });
  }

  return (
    <div>
      <div id="WindowSize">{width} &bull; {height}</div>
      <div hidden={file.url.length !== 0}>
        <input type="file" onChange={handleChange} />
      </div>
      <div hidden={file.url.length === 0}>
        <img src={file.url} style={{ maxWidth: width, maxHeight: height }} />
      </div>
    </div>
  );
}
