import mongoose from "mongoose";
const { Schema, model } = mongoose;

const agendaSchema = new Schema(
	{
		nombres: {
			type: String,
			required: true,
		},
		ap_paterno: {
			type: String,
			required: true,
		},
		ap_materno: String,
		direccion: String,
		t_fijo: String,
		t_movil: String,
		email: String,
	},
	{
		timestamps: true, // createdAt, updatedAt
		versionKey: false,
	}
);

const Agenda = model("Agenda", agendaSchema);

export default Agenda;
