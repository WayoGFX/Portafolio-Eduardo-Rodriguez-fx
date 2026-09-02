import React, { useRef, useState, useEffect } from 'react';
import { Drawing } from '../types';
import { motion } from 'framer-motion';

interface CanvasProps {
  onSave: (d: Drawing) => void;
  isSaving: boolean;
}

const PASTEL_COLORS = [
    { hex: '#f34232', name: 'Pastel Red' },
    { hex: '#58a2df', name: 'Pastel Blue' },
    { hex: '#80e669', name: 'Pastel Green' },
    { hex: '#7b5fe0', name: 'Pastel Purple' },
    { hex: '#965429', name: 'Pastel Orange' },
    { hex: '#fafa43', name: 'Pastel Yellow' },
    { hex: '#0e0e0e', name: 'Pastel Brown' },
    { hex: '#f2f2f2', name: 'Pastel Gray' },
];

const BRUSH_SIZES = [4, 8, 12, 20];

const Canvas = ({ onSave, isSaving }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState(PASTEL_COLORS[0].hex);
  const [brushSize, setBrushSize] = useState(8);
  const [drawingName, setDrawingName] = useState('');
  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(600);
  const [isErasing, setIsErasing] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [isFilling, setIsFilling] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true });
    if (!ctx) return;

    const setDimensions = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        const newWidth = parentWidth; // Use full width of container
        const newHeight = (newWidth * 3) / 4; // Maintain aspect ratio
        
        setCanvasWidth(newWidth);
        setCanvasHeight(newHeight);
      }
    };

    setDimensions();
    window.addEventListener('resize', setDimensions);
    return () => window.removeEventListener('resize', setDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true });
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    saveState();
  }, [canvasWidth, canvasHeight]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
  };

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true });
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prevHistory => [...prevHistory, imageData]);
  };

  const handleUndo = () => {
    if (history.length > 1) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true });
      if (!ctx) return;

      const newHistory = history.slice(0, -1);
      const lastState = newHistory[newHistory.length - 1];
      ctx.putImageData(lastState, 0, 0);
      setHistory(newHistory);
    }
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isFilling) {
        const { x, y } = getCoordinates(e);
        floodFill(Math.floor(x), Math.floor(y));
    } else {
        startDrawing(e);
    }
  };

  const handleCanvasTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (isFilling) {
        const { x, y } = getCoordinates(e);
        floodFill(Math.floor(x), Math.floor(y));
    } else {
        startDrawing(e);
    }
  };

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b, a: 255 };
  };

  const floodFill = (startX: number, startY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true });
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const { width, height } = canvas;

    const targetColor = getPixel(startX, startY);
    const fillColor = hexToRgb(color);

    if (
        targetColor.r === fillColor.r &&
        targetColor.g === fillColor.g &&
        targetColor.b === fillColor.b &&
        targetColor.a === fillColor.a
    ) {
        return;
    }

    const pixelStack = [[startX, startY]];

    function getPixel(x: number, y: number) {
        const offset = (y * width + x) * 4;
        return {
            r: data[offset],
            g: data[offset + 1],
            b: data[offset + 2],
            a: data[offset + 3],
        };
    }

    function setPixel(x: number, y: number, color: {r: number, g: number, b: number, a: number}) {
        const offset = (y * width + x) * 4;
        data[offset] = color.r;
        data[offset + 1] = color.g;
        data[offset + 2] = color.b;
        data[offset + 3] = color.a;
    }

    function colorsMatch(p: {r: number, g: number, b: number, a: number}, color: {r: number, g: number, b: number, a: number}) {
        return p.r === color.r && p.g === color.g && p.b === color.b && p.a === color.a;
    }

    while (pixelStack.length > 0) {
        const [x, y] = pixelStack.pop()!;

        if (x < 0 || x >= width || y < 0 || y >= height) {
            continue;
        }

        const currentColor = getPixel(x, y);

        if (colorsMatch(currentColor, targetColor)) {
            setPixel(x, y, fillColor);
            pixelStack.push([x + 1, y]);
            pixelStack.push([x - 1, y]);
            pixelStack.push([x, y + 1]);
            pixelStack.push([x, y - 1]);
        }
    }

    ctx.putImageData(imageData, 0, 0);
    saveState();
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (isFilling) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true });
    if (!ctx) return;

    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = brushSize;
    if (isErasing) {
        ctx.globalCompositeOperation = 'destination-out';
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = color;
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || isFilling) return;
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d', { willReadFrequently: true, alpha: true });
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    if (isDrawing) {
        setIsDrawing(false);
        saveState();
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true });
    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      saveState();
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `doodle-${drawingName || 'miaudoodle'}.webp`;
    link.href = canvas.toDataURL('image/webp');
    link.click();
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const originalCanvas = canvasRef.current;
    if (!originalCanvas) return;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true, alpha: true });
    const maxWidth = 400;
    const scaleFactor = maxWidth / originalCanvas.width;
    const newWidth = maxWidth;
    const newHeight = originalCanvas.height * scaleFactor;
    tempCanvas.width = newWidth;
    tempCanvas.height = newHeight;

    if (tempCtx) {
      tempCtx.drawImage(originalCanvas, 0, 0, newWidth, newHeight);
    }

    const imageData = tempCanvas.toDataURL('image/webp', 0.8);
    
    onSave({
      id: Date.now().toString(),
      imageData: imageData, // Pasamos el base64 directamente
      name: drawingName.trim() || 'doodle misterioso',
      timestamp: Date.now(),
    });
    
    setDrawingName('');
  };

  const selectColor = (selectedColor: string) => {
    setColor(selectedColor);
    setIsErasing(false);
    setIsFilling(false);
};

const selectEraser = () => {
    setIsErasing(true);
    setIsFilling(false);
};

const selectFill = () => {
    setIsFilling(true);
    setIsErasing(false);
}

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full h-full bg-white p-4 rounded-3xl shadow-xl sketchy-border flex flex-col"
    >
      <div className="flex flex-col md:flex-row gap-4 flex-grow">
        {/* Columna de Herramientas Izquierda (Colores) */}
        <div className="flex flex-row md:flex-col gap-2 justify-center">
          {PASTEL_COLORS.map(c => (
            <motion.button
              key={c.hex}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => selectColor(c.hex)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${!isErasing && !isFilling && color === c.hex ? 'border-[#b3cde3] ring-2 ring-blue-200' : 'border-gray-100'}`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={selectEraser}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white ${isErasing ? 'border-[#b3cde3] ring-2 ring-blue-200' : 'border-gray-200'}`}
          >
            <span className="text-xl">🧽</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={selectFill}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white ${isFilling ? 'border-[#b3cde3] ring-2 ring-blue-200' : 'border-gray-200'}`}
          >
            <span className="text-xl">🖌️</span>
          </motion.button>
        </div>

        {/* Area Central del Canvas */}
        <div className="flex-grow flex flex-col gap-4">
          <div 
            ref={containerRef}
            className="relative canvas-container w-full h-full border-4 border-dashed border-blue-200 rounded-2xl overflow-hidden cursor-crosshair shadow-inner bg-white"
          >
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              className="w-full h-full"
              onMouseDown={handleCanvasMouseDown}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={handleCanvasTouchStart}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
            {isSaving && (
              <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-10">
                <div className="text-5xl animate-bounce mb-4">🚀</div>
                <p className="font-bold text-[#2739e5] text-xl animate-pulse">subiendo a la nube de dibujos...</p>
              </div>
            )}
          </div>
          <input 
            type="text"
            placeholder="dale nombre a tu dibujo..."
            value={drawingName}
            onChange={(e) => setDrawingName(e.target.value)}
            disabled={isSaving}
            className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:outline-none font-handwritten text-xl text-[#2d241e] placeholder:text-[#5567B2] bg-blue-50/30"
          />
        </div>

        {/* Columna de Herramientas Derecha (Pinceles y Acciones) */}
        <div className="hidden md:flex md:flex-col gap-4 justify-center">
            <div className="flex md:flex-col items-center gap-2 bg-blue-50 p-2 rounded-3xl border border-blue-100 shadow-sm">
                {BRUSH_SIZES.map(s => (
                    <motion.button
                    key={s}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setBrushSize(s)}
                    className={`rounded-full transition-all flex items-center justify-center ${brushSize === s ? 'bg-blue-200' : 'bg-white'}`}
                    style={{ width: s + 18, height: s + 18 }}
                    >
                    <div
                        className="rounded-full bg-gray-800"
                        style={{ width: s, height: s }}
                    ></div>
                    </motion.button>
                ))}
            </div>
            <div className="flex flex-row md:flex-col gap-2">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleUndo}
                    disabled={history.length <= 1 || isSaving}
                    className="px-4 py-3 rounded-xl bg-yellow-100 text-yellow-700 font-black border border-yellow-200 shadow-sm flex items-center gap-2 disabled:opacity-50"
                >
                    <span className="hidden md:inline">deshacer</span> ↩️
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClear}
                    disabled={isSaving}
                    className="px-4 py-3 rounded-xl bg-gray-100 text-[#2d241e] font-black border border-gray-200 shadow-sm disabled:opacity-50"
                >
                    <span className="hidden md:inline">limpiar</span> 🗑️
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadImage}
                    disabled={isSaving}
                    className="px-4 py-3 rounded-xl bg-blue-100 text-blue-700 font-black border border-blue-200 shadow-sm flex items-center gap-2 disabled:opacity-50"
                >
                    <span className="hidden md:inline">descargar</span> 💾
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    disabled={isSaving || isDrawing}
                    className="px-6 py-3 rounded-xl bg-[#2739e5] text-white font-black shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                    <span className="hidden md:inline">subir</span> 🚀
                </motion.button>
            </div>
        </div>
      </div>

      {/* Barra de Herramientas Móvil */}
      <div className="flex md:hidden flex-col gap-4 mt-4">
        <div className="flex justify-center items-center gap-2 bg-blue-50 p-2 rounded-full border border-blue-100 shadow-sm">
          {BRUSH_SIZES.map(s => (
            <motion.button
              key={s}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setBrushSize(s)}
              className={`rounded-full transition-all flex items-center justify-center ${brushSize === s ? 'bg-blue-200' : 'bg-white'}`}
              style={{ width: s + 18, height: s + 18 }}
            >
              <div
                className="rounded-full bg-gray-800"
                style={{ width: s, height: s }}
              ></div>
            </motion.button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUndo}
              disabled={history.length <= 1 || isSaving}
              className="px-4 py-2 rounded-xl bg-yellow-100 text-yellow-700 font-black border border-yellow-200 shadow-sm flex items-center gap-2 disabled:opacity-50"
            >
               ↩️
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClear}
              disabled={isSaving}
              className="px-4 py-2 rounded-xl bg-gray-100 text-[#2d241e] font-black border border-gray-200 shadow-sm disabled:opacity-50"
            >
              🗑️
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadImage}
              disabled={isSaving}
              className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-black border border-blue-200 shadow-sm flex items-center gap-2 disabled:opacity-50"
            >
              💾
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              disabled={isSaving || isDrawing}
              className="px-4 py-2 rounded-xl bg-[#2739e5] text-white font-black shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              🚀
            </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Canvas;
