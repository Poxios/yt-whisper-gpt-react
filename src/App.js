import axios from 'axios';
import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const onConvertClicked = useCallback(async () => {
    setLoading(true);
    // get text in input component by id
    const youtubeUrl = document.getElementById("youtube_url").value;
    // send get request to server with axios. get target url from env
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/convert`, {
      params: {
        youtubeUrl
      }
    });
    setResult(res.data)
    setLoading(false);
  }, [])
  return (
    <div className="App">
      < header className="App-header" >
        <h3 style={{ marginBottom: "8px" }}>
          Put Youtube URL Here
        </h3>
        <form>
          <input id="youtube_url" />
          <button disabled={loading} onClick={onConvertClicked}>변환 시작</button>
        </form>
        <div style={{ width: 1, height: 50 }} />
        <h3 style={{ marginBottom: "8px" }}>
          Result
        </h3>
        <textarea value={result} disabled />
      </header>
    </div >
  );
}

export default App;
