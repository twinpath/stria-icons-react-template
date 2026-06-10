import React, { useState, useRef, useEffect } from 'react';
import {
  GearSolid, GearRegular, GearLight, GearThin, GearDuotone,
  BellSolid, BellRegular, BellLight, BellThin, BellDuotone,
  CameraSolid, CameraRegular, CameraLight, CameraThin, CameraDuotone,
  CheckSolid, CheckRegular, CheckLight, CheckThin, CheckDuotone,
  EnvelopeSolid, EnvelopeRegular, EnvelopeLight, EnvelopeThin, EnvelopeDuotone,
  UserSolid, UserRegular, UserLight, UserThin, UserDuotone,
  CircleSolid, CircleRegular, CircleLight, CircleThin, CircleDuotone,
  ArrowRightSolid, ArrowRightRegular, ArrowRightLight, ArrowRightThin, ArrowRightDuotone
} from '@stria-icons/react';

const ICON_MAP = {
  gear: {
    solid: GearSolid,
    regular: GearRegular,
    light: GearLight,
    thin: GearThin,
    duotone: GearDuotone,
    componentName: 'Gear'
  },
  bell: {
    solid: BellSolid,
    regular: BellRegular,
    light: BellLight,
    thin: BellThin,
    duotone: BellDuotone,
    componentName: 'Bell'
  },
  camera: {
    solid: CameraSolid,
    regular: CameraRegular,
    light: CameraLight,
    thin: CameraThin,
    duotone: CameraDuotone,
    componentName: 'Camera'
  },
  check: {
    solid: CheckSolid,
    regular: CheckRegular,
    light: CheckLight,
    thin: CheckThin,
    duotone: CheckDuotone,
    componentName: 'Check'
  },
  envelope: {
    solid: EnvelopeSolid,
    regular: EnvelopeRegular,
    light: EnvelopeLight,
    thin: EnvelopeThin,
    duotone: EnvelopeDuotone,
    componentName: 'Envelope'
  },
  user: {
    solid: UserSolid,
    regular: UserRegular,
    light: UserLight,
    thin: UserThin,
    duotone: UserDuotone,
    componentName: 'User'
  },
  circle: {
    solid: CircleSolid,
    regular: CircleRegular,
    light: CircleLight,
    thin: CircleThin,
    duotone: CircleDuotone,
    componentName: 'Circle'
  },
  'arrow-right': {
    solid: ArrowRightSolid,
    regular: ArrowRightRegular,
    light: ArrowRightLight,
    thin: ArrowRightThin,
    duotone: ArrowRightDuotone,
    componentName: 'ArrowRight'
  }
};

function App() {
  const [selectedIcon, setSelectedIcon] = useState('gear');
  const [selectedStyle, setSelectedStyle] = useState('solid');
  const [size, setSize] = useState(48);
  const [color, setColor] = useState('#818cf8');
  const [clickCount, setClickCount] = useState(0);
  const [refStatus, setRefStatus] = useState('Not Verified');
  const [classNameStatus, setClassNameStatus] = useState('Not Verified');

  const testIconRef = useRef(null);

  // Get active component
  const ActiveIconComponent = ICON_MAP[selectedIcon][selectedStyle];
  const pascalName = ICON_MAP[selectedIcon].componentName;
  const styleSuffix = selectedStyle.charAt(0).toUpperCase() + selectedStyle.slice(1);
  const importName = `${pascalName}${styleSuffix}`;

  // Verify ref and class rendering
  useEffect(() => {
    if (testIconRef.current) {
      // Ref verified if it is an instance of SVGSVGElement
      if (testIconRef.current instanceof SVGSVGElement) {
        setRefStatus('Passed (Ref points to SVG element)');
      } else {
        setRefStatus('Failed (Ref is not an SVG element)');
      }

      // Check if custom class is present
      if (testIconRef.current.classList.contains('custom-react-test-class')) {
        setClassNameStatus('Passed (custom-react-test-class found)');
      } else {
        setClassNameStatus('Failed (custom class not rendered)');
      }
    }
  }, [selectedIcon, selectedStyle]);

  const copyImportToClipboard = () => {
    const text = `import { ${importName} } from '@stria-icons/react';\n\n<${importName} size={${size}} color="${color}" />`;
    navigator.clipboard.writeText(text);
    alert('Code snippet copied to clipboard!');
  };

  return (
    <div className="container">
      <header>
        <h1>Stria Icons</h1>
        <p>React Starter Kit & Testbed. Interactively test React icon component properties, ref forwarding, and event handler binding.</p>
      </header>

      {/* Grid of Interactive Playground + Verification */}
      <div className="grid">
        {/* Playground Controls */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Prop Controls & Live Rendering</h2>
          </div>
          
          <div className="playground-layout">
            <div className="controls-panel">
              <div className="control-group">
                <label className="control-label">Icon Name</label>
                <select value={selectedIcon} onChange={(e) => setSelectedIcon(e.target.value)}>
                  {Object.keys(ICON_MAP).map(key => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>

              <div className="control-group">
                <label className="control-label">Style</label>
                <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
                  <option value="solid">Solid</option>
                  <option value="regular">Regular</option>
                  <option value="light">Light</option>
                  <option value="thin">Thin</option>
                  <option value="duotone">Duotone</option>
                </select>
              </div>

              <div className="control-group">
                <label className="control-label">Size: {size}px</label>
                <input 
                  type="range" 
                  min="16" 
                  max="128" 
                  value={size} 
                  onChange={(e) => setSize(Number(e.target.value))} 
                />
              </div>

              <div className="control-group">
                <label className="control-label">Color</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                  />
                  <input 
                    type="text" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)}
                    style={{ width: '100px' }}
                  />
                </div>
              </div>
            </div>

            <div className="live-preview-container">
              <div className="live-preview-box" style={{ color: color }}>
                {ActiveIconComponent && (
                  <ActiveIconComponent 
                    ref={testIconRef}
                    size={size}
                    color={color}
                    className="custom-react-test-class"
                    onClick={() => setClickCount(prev => prev + 1)}
                  />
                )}
              </div>
              <span className="live-preview-label">Live Preview Grid</span>
            </div>
          </div>
        </div>

        {/* Verification Status */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Wrapper Verification Tests</h2>
          </div>
          
          <div className="verification-list">
            <div className="verification-item">
              <div className="verification-meta">
                <span className="verification-name">ForwardRef Binding</span>
                <span className="verification-desc">Ensures the standard React ref is successfully forwarded to the underlying SVG element.</span>
              </div>
              <span className={`status-badge ${refStatus.startsWith('Passed') ? 'status-pass' : 'status-fail'}`}>
                {refStatus}
              </span>
            </div>

            <div className="verification-item">
              <div className="verification-meta">
                <span className="verification-name">Class Name Passing</span>
                <span className="verification-desc">Verifies that custom user classnames are appended alongside default svg classes.</span>
              </div>
              <span className={`status-badge ${classNameStatus.startsWith('Passed') ? 'status-pass' : 'status-fail'}`}>
                {classNameStatus}
              </span>
            </div>

            <div className="verification-item">
              <div className="verification-meta">
                <span className="verification-name">Click Handler Propagation</span>
                <span className="verification-desc">Clicking on the preview icon should propagate native events up. Click to increment.</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="status-badge status-pass">
                  Clicks: {clickCount}
                </span>
                <button className="btn-small" onClick={() => setClickCount(0)}>Reset</button>
              </div>
            </div>
          </div>

          <div className="code-block">
            <pre>
              <code>{`import { ${importName} } from '@stria-icons/react';\n\n<${importName}\n  size={${size}}\n  color="${color}"\n  onClick={handleClick}\n/>`}</code>
            </pre>
            <button className="btn" onClick={copyImportToClipboard} style={{ marginTop: '1rem', width: '100%' }}>Copy Snippet</button>
          </div>
        </div>
      </div>

      {/* Grid Showcase */}
      <div className="showcase-section">
        <div className="showcase-header">
          <h2>React Component Matrix</h2>
          <p>A verification grid displaying Stria React components across Solid, Regular, Light, Thin, and Duotone styles.</p>
        </div>
        <div className="matrix-table-container">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>Icon Glyph</th>
                <th>Solid</th>
                <th>Regular</th>
                <th>Light</th>
                <th>Thin</th>
                <th>Duotone</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(ICON_MAP).map(key => {
                const row = ICON_MAP[key];
                return (
                  <tr key={key}>
                    <td className="matrix-icon-name">{key}</td>
                    <td><row.solid size={24} color="#f8fafc" /></td>
                    <td><row.regular size={24} color="#cbd5e1" /></td>
                    <td><row.light size={24} color="#94a3b8" /></td>
                    <td><row.thin size={24} color="#64748b" /></td>
                    <td><row.duotone size={24} color="#818cf8" /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
