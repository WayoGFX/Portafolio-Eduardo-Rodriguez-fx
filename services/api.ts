// services/api.ts

const IMAGEBB_API_KEY = import.meta.env.VITE_IMAGEBB_API_KEY;
const JSONBIN_API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;
const JSONBIN_BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;

// Función para subir una imagen a ImageBB
export const uploadImage = async (base64Image: string): Promise<string> => {
  if (!IMAGEBB_API_KEY) {
    throw new Error('Por favor, añade tu VITE_IMAGEBB_API_KEY al fichero .env');
  }

  const formData = new FormData();
  // La API de ImageBB espera la imagen en base64 sin el prefijo "data:image/png;base64,"
  formData.append('image', base64Image.split(',')[1]);

  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMAGEBB_API_KEY}`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      return result.data.url;
    } else {
      throw new Error(`Error al subir la imagen a ImageBB: ${result.error.message}`);
    }
  } catch (error) {
    console.error('Error en la subida a ImageBB:', error);
    throw error;
  }
};

// Interfaz para los datos que guardaremos en JSONBin
export interface DrawingData {
  id: string;
  name: string;
  timestamp: number;
  imageData: string; // Aquí irá la URL de ImageBB
}

// Función para obtener los dibujos de JSONBin
export const getDrawings = async (): Promise<DrawingData[]> => {
    if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    // Si no hay API key o Bin ID, devolvemos un array vacío para que la app no crashee
    // y mostramos un warning en la consola.
    console.warn('API Key o Bin ID de JSONBin no configurados. Se devolverán datos vacíos.');
    return [];
  }
    
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY,
      },
    });

    if (!response.ok) {
        if(response.status === 404) {
            // Si el bin no existe, lo creamos vacío
            console.log("El bin no existe, creando uno nuevo.");
            const newBinContent: DrawingData[] = [];
            await updateDrawings(newBinContent);
            return newBinContent;
        }
      throw new Error(`Error al obtener los dibujos: ${response.statusText}`);
    }

    const result = await response.json();
    return result.record;
  } catch (error) {
    console.error('Error al obtener los dibujos de JSONBin:', error);
    return []; // Devolver un array vacío en caso de error para que la app siga funcionando
  }
};

// Función para guardar/actualizar los dibujos en JSONBin
export const updateDrawings = async (drawings: DrawingData[]): Promise<void> => {
  if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    throw new Error('Por favor, añade tu VITE_JSONBIN_API_KEY y VITE_JSONBIN_BIN_ID al fichero .env');
  }

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY,
      },
      body: JSON.stringify(drawings),
    });

    if (!response.ok) {
      throw new Error(`Error al actualizar los dibujos: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error al actualizar los dibujos en JSONBin:', error);
    throw error;
  }
};