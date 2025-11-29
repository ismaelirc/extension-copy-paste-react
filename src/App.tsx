import { NoteProvider } from "./contexts/NoteContext";
import "./App.css";
import { Form } from "./components/Form";
import { ListNotes } from "./components/ListNotes";

function App() {
  return (
    <>
      <NoteProvider>
        <Form />
        <ListNotes />
      </NoteProvider>
    </>
  );
}

export default App;
