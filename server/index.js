const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const empleados = [
    { id: 1, nombre: 'Cesar Augusto Tamayo', cargo: 'Desarrolladora Frontend', departamento: 'Tecnología' },
    { id: 2, nombre: 'Jose Rafael Tamayo', cargo: 'Contador', departamento: 'Finanzas' },
    { id: 3, nombre: 'Johanna Alexandra Tamayo', cargo: 'Gerente de RRHH', departamento: 'Recursos Humanos' }
];

app.get('/api/empleado/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const empleado = empleados.find(e => e.id === id);

    if (empleado) {
        res.status(200).json({ mensaje: 'Éxito', data: empleado });
    } else {
        res.status(404).json({ mensaje: 'No encontrado', data: null });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});