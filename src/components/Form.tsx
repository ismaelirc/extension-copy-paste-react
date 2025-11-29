import { useNotes } from "../contexts/NoteContext";

export const Form = () => {
  const { handleAddNote, setNote } = useNotes();

  return (
    <form onSubmit={handleAddNote}>
      <textarea onChange={(e) => setNote(e.target.value)}></textarea>
      <button>Save Note</button>
    </form>
  );
};
