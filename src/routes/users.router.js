const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', (req, res) => {
    const users = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' }
    ];
    res.json(users);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:id', (req, res) => {
    const users = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' }
    ];
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) return res.status(404).send('Usuario no encontrado');
    
    res.json(user);
});

module.exports = router;
