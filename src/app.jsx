import React, { useEffect, useState } from 'react'
import { getJSON } from './api'

export default function App() {
const [clients, setClients] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
async function loadData() {
try {
const data = await getJSON('/clients')
if (data && Array.isArray(data)) setClients(data)
else setError('Nessun dato ricevuto')
} catch (err) {
setError('Errore nel caricamento')
} finally {
setLoading(false)
}
}
loadData()
}, [])

if (loading) return <p>⏳ Caricamento in corso...</p>
if (error) return <p style={{ color: 'red' }}>❌ {error}</p>

return (
<div style={{ fontFamily: 'Arial', margin: '2rem' }}>
<h1>PneuTrack Cloud – Carrozzeria Moglianese</h1>
{clients.length === 0 ? (
<p>Nessun cliente ancora.</p>
) : (
<table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
<thead>
<tr>
<th>Nome</th>
<th>Telefono</th>
<th>Email</th>
<th>Note</th>
</tr>
</thead>
<tbody>
{clients.map((c) => (
<tr key={c.id}>
<td>{c.name}</td>
<td>{c.phone}</td>
<td>{c.email}</td>
<td>{c.notes}</td>
</tr>
))}
</tbody>
</table>
)}
</div>
)
}
