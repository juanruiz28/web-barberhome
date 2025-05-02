/*const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const productos = [
    { id: 1, nombre: 'Corte Clásico', precio: 15 },
    { id: 2, nombre: 'Afeitado Premium', precio: 10 },
    { id: 3, nombre: 'Corte + Lavado', precio: 18 },

];

app.get('/api/productos', (req, res) => {
    res.json(productos);
});

app.listen(3000, () => console.log('API corriendo en http://localhost:3000'));*/

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Para leer JSON del body

// Datos simulados (sin base de datos)
let productos = [
    {
        id: 1,
        nombre: 'MAQUINA DE CORTAR',
        /*description: 'Esta maquina de cortar es una herramienta imprescindible para barberos y estilistas que buscan potencia, precisión y un diseño sofisticado. Como parte de la prestigiosa línea 5 Star Series de Wahl, esta máquina de corte combina tecnología de vanguardia con la comodidad de un diseño ergonómico y ligero.',*/
        precio: 600,

    },
    {
        id: 2,
        nombre: 'CREMA DEFINIDORA',
        /*description: 'Esta crema definidora es la elección ideal para quienes buscan un peinado definido, con volumen y sin brillo excesivo. Su fórmula enriquecida con queratina fortalece el cabello mientras proporciona una fijación duradera sin dejar residuos pegajosos.',*/
        precio: 25,

    },
    {
        id: 3,
        nombre: 'CONJUNTO DE NAVAJAS',
        /*description: '. La maquinilla de afeitar está expuesta un 30% más que los porta navajas normales, deslice el soporte de la maquinilla de afeitar o navajera, tornillo de tensión para ajustar el movimiento del mango, y Acero inoxidable.',*/
        precio: 18,

    },
    {
        id: 4,
        nombre: 'SET DE ESCOBILLAS',
        /*description: ' eliminar el exceso de vello alrededor del cuello, las orejas y la cara después del corte de pelo . Además, evita que el vello residual se quede en el cuerpo y te cause molestias. Las cerdas suaves eliminan fácilmente el vello o el polvo de la máquina.',*/
        precio: 22,

    },
    {
        id: 5,
        nombre: 'MAQUINA DEPILADORA',
        /*description: 'Está diseñada para proporcionar cortes precisos y uniformes con sus diferentes peines y cuchilla de acero inoxidable, puedes lograr acabados pulidos y definidos en cualquier textura.',*/
        precio: 18,

    },
    {
        id: 6,
        nombre: 'NAVAJA WODEN',
        /*description: 'Nuestro Portacuchillas Profesional Clásico: Lo antiguo es oro. Tiene un diseño cómodo, ergonómico y profesional para colocar y afeitar la navaja.',*/
        precio: 14,

    },
    {
        id: 7,
        nombre: 'SPRAY',
        /*description: 'Spray profesional con un mejor diseño. El nuevo cuidado hidratante 24h anti-edad mejorado con ácido hialurónico. Tiene una textura no grasa y es de fácil absorción.',*/
        precio: 13,

    },
    {
        id: 8,
        nombre: 'POLVO TEXTURIZADOR',
        /*description: 'El Polvo Texturizador DORSH 20g es la solución perfecta para quienes buscan un acabado profesional en sus peinados. Este innovador producto proporciona volumen, fijación y textura sin apelmazar el cabello, permitiendo una apariencia natural y estilizada.',*/
        precio: 22,

    },
    {
        id: 9,
        nombre: 'TIJERA',
        /*description: 'Esta tijera de corte de cabello tiene un tornillo de tensión y ajuste plateado para apretar y aflojar fácilmente las tijeras, libremente para elegir la tensión que mejor se adapte a ti, muy cómodo de usar.',*/
        precio: 21,
    }
];

// ✅ GET: Obtener todos los productos
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

// ✅ POST: Agregar un nuevo producto
app.post('/api/productos', (req, res) => {
    const { nombre, precio } = req.body;
    const nuevoProducto = {
        id: productos.length ? productos[productos.length - 1].id + 1 : 1,
        nombre,
        precio
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// ✅ PUT: Actualizar un producto por ID
app.put('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, precio } = req.body;
    const producto = productos.find(p => p.id === id);

    if (producto) {
        producto.nombre = nombre;
        producto.precio = precio;
        res.json(producto);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

// ✅ DELETE: Eliminar un producto por ID
app.delete('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index !== -1) {
        const eliminado = productos.splice(index, 1);
        res.json(eliminado[0]);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

