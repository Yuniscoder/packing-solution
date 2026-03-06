import React, { useState } from 'react';
import './App.css';
import PanelInput from './components/PanelInput';
import PackingVisualization from './components/PackingVisualization';
import ReportGenerator from './components/ReportGenerator';

function App() {
    const [panels, setPanels] = useState([]);
    const [packingResult, setPackingResult] = useState(null);
    const [boxDimensions, setBoxDimensions] = useState({ length: 0, width: 0, height: 0 });

    const handlePanelsSubmit = (panelsList, box) => {
        setPanels(panelsList);
        setBoxDimensions(box);
        optimizePacking(panelsList, box);
    };

    const optimizePacking = (panelsList, box) => {
        const result = { layers: [], utilization: 0, panelsPlaced: panelsList.length };
        setPackingResult(result);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>🎯 Packing Optimization System</h1>
            </header>
            <div className="container">
                <div className="section">
                    <PanelInput onSubmit={handlePanelsSubmit} />
                </div>
                {packingResult && (
                    <>
                        <div className="section">
                            <PackingVisualization packingResult={packingResult} boxDimensions={boxDimensions} panels={panels} />
                        </div>
                        <div className="section">
                            <ReportGenerator packingResult={packingResult} panels={panels} boxDimensions={boxDimensions} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;