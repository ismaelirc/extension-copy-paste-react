import { createContext, useContext, useState, type ReactNode } from "react";
import type { NoteContextType } from "../types/NoteContextType";
import type { Note } from "../types/Note.interface";

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [note, setNote] = useState("");

  const addNote = (note: Note) => {
    setNotes((notes) => [note, ...notes]);
  };

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (note != "") {
      const n = {
        id: crypto.randomUUID(),
        text: note,
      };
      addNote(n);
      setNote("");
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNote,
        handleAddNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NoteContext);

  if (context === undefined) {
    throw new Error("NoteContext was used outside of the Note provider");
  }

  return context;
}
