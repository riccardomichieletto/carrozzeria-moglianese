// URL del backend Flask (puoi cambiarlo se usi un dominio diverso)
export const API_BASE = import.meta.env.VITE_API_BASE || 'https://pneutrack-cloud.onrender.com'

// Helper semplici per chiamare le API
export async function getJSON(path){
try {
const r = await fetch(API_BASE + path)
return await r.json()
} catch {
return null
}
}

export async function postJSON(path, data){
return fetch(API_BASE + path, {
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(data),
})
}
