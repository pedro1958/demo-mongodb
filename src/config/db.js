import mongoose from "mongoose";
const { connect } = mongoose;
import dotenv from "dotenv";
dotenv.config();

export const conection = async () => {
	try {
		const db = await connect(
			`${process.env.HOST}:${process.env.MONGO_PORT}/${process.env.DBNAME}`
		);
		console.log(`Database: ${db.connection.name}, is connected`);
	} catch (error) {
		console.log(error);
	}
};
