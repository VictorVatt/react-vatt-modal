import ReactDOM from "react-dom/client";
import { Modal } from "./lib/Modal/Modal";

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<Modal />);

// During an update, there is no need to pass the container again
