import { useNotes } from "../contexts/NoteContext";
import type { Note } from "../types/Note.interface";

export const ListNotes = () => {
  const { notes } = useNotes();
  return (
    <div>
      <ul>
        {notes.map((p: Note) => (
          <li key={p.id}>{p.text}</li>
        ))}
      </ul>
    </div>
  );
};
