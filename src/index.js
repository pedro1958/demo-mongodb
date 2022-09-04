import express from "express";
import expHBS from "express-handlebars";
const { engine } = expHBS;
import morgan from "morgan";
// Método para obtener __dirname no establecido en EJS Modules
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database
import { conection } from "./config/db.js";
conection();

// Routes
import AgendaRoutes from "./routes/Agenda.routes.js";

// Initialize App
const app = express();

// Setting
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "/views"));
app.engine(
	".hbs",
	engine({
		defaultLayout: "main",
		layoutsDir: path.join(app.get("views"), "/layouts"),
		partialsDir: path.join(app.get("views"), "/partials"),
		extname: ".hbs",
	})
);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Using routes
app.use("/", AgendaRoutes);

// Statics files
app.use(express.static(path.join(__dirname, "public")));

// Server listening
app.listen(app.get("port"), () =>
	console.log(`Server on http://localhost:${app.get("port")}`)
);
