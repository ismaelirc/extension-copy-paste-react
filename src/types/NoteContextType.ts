import type { Note } from "./Note.interface";

export interface NoteContextType {
  notes: Note[];
  setNote: React.Dispatch<React.SetStateAction<string>>;
  handleAddNote: (e: React.FormEvent<HTMLFormElement>) => void;
}