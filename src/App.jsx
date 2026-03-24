import { useState, useRef, useCallback } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import CardPreview from './components/CardPreview';
import CustomizeForm from './components/CustomizeForm';
import { presets } from './presets';
import './App.css';

function App() {
  const [config, setConfig] = useState(presets.spotify);
  const [size, setSize] = useState('instagram');
  const cardRef = useRef(null);

  const handleDownload = useCallback(
    async (format) => {
      if (!cardRef.current) return;
      try {
        const fn = format === 'png' ? toPng : toJpeg;
        const dataUrl = await fn(cardRef.current, {
          quality: 0.95,
          pixelRatio: 1,
        });
        const link = document.createElement('a');
        link.download = `${config.title.replace(/\s+/g, '-').toLowerCase()}-${size}.${format}`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Export failed:', err);
      }
    },
    [config.title, size]
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Card Generator</h1>
        <p>Create subscription plan cards for social media</p>
      </header>

      <div className="app-layout">
        <aside className="app-sidebar">
          <CustomizeForm
            config={config}
            setConfig={setConfig}
            size={size}
            setSize={setSize}
          />
          <div className="export-buttons">
            <button className="export-btn png" onClick={() => handleDownload('png')}>
              Download PNG
            </button>
            <button className="export-btn jpg" onClick={() => handleDownload('jpeg')}>
              Download JPG
            </button>
          </div>
        </aside>

        <main className="app-preview">
          <div className="preview-scroll">
            <CardPreview ref={cardRef} config={config} size={size} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
