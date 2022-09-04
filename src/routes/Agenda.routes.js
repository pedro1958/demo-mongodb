import express from "express";
const router = express.Router();

// Controllers
import {
	getAll,
	viewAdd,
	createContact,
	viewEdit,
	updateContact,
	deleteContact,
} from "../controllers/AgendaController.js";

// Buscar todos los contactos
router.get("/", getAll);
// Agregar nuevo contacto
router.get("/add", viewAdd);
router.post("/add", createContact);

// Actualizar un contacto por su id
router.get("/edit/:id", viewEdit);
router.post("/edit/:id", updateContact);

// Eliminar un contacto por su id
router.get("/delete/:id", deleteContact);

export default router;
