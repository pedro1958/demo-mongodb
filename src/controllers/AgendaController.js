// Models
import Agenda from "../models/AgendaModel.js";

export const getAll = async (req, res) => {
	try {
		const contacts = await Agenda.find({}).lean();
		res.render("pages/index", { contacts });
	} catch (error) {
		console.log(error);
	}
};

export const viewAdd = (req, res) => {
	res.render("pages/add");
};

export const createContact = async (req, res) => {
	try {
		await Agenda.create(req.body);
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
};

export const viewEdit = async (req, res) => {
	const { id } = req.params; // id via parametro em la url
	try {
		const contact = await Agenda.findById(id).lean();
		res.render("pages/edit", {
			contact,
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateContact = async (req, res) => {
	const { id } = req.params; // id via parametro em la url
	try {
		const contact = await Agenda.findById(id);

		const contactUdated = {
			nombres: req.body.nombres ?? contact.nombres,
			ap_paterno: req.body.ap_paterno ?? contact.ap_paterno,
			ap_materno: req.body.ap_materno ?? contact.ap_materno,
			t_fijo: req.body.t_fijo ?? contact.t_fijo,
			t_movil: req.body.t_movil ?? contact.t_movil,
			email: req.body.email ?? contact.email,
		};

		await Agenda.findByIdAndUpdate(id, contactUdated, { new: true });
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
};

export const deleteContact = async (req, res) => {
	const { id } = req.params; // id via parametro em la url
	try {
		await Agenda.findByIdAndRemove(id);
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
};
