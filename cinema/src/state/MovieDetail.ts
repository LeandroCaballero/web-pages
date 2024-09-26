import { create } from "zustand";
import { Schedule } from "../utils/data";

type MovieDetails = {
  title: string;
  description: string;
  image: string;
  trailerImage: string;
  trailerURL: string;
  genre: string;
  duration: string;
  director: string;
  actors: string;
  schedule: Schedule[];
  hours: string[];
};

interface ModalState {
  showDetails: boolean;
  movieDetails: MovieDetails;
  changeIsOpenShowDetails: (open: boolean) => void;
  setMovieDetails: (movieDetails: MovieDetails) => void;
}

export const movieDetailStore = create<ModalState>()((set) => ({
  showDetails: false,
  movieDetails: {
    title: "",
    description: "",
    image: "",
    trailerImage: "",
    trailerURL: "",
    genre: "",
    duration: "",
    director: "",
    actors: "",
    schedule: [],
    hours: [],
  },
  changeIsOpenShowDetails: (open) => set({ showDetails: open }),
  setMovieDetails: (movieDetails: MovieDetails) => set({ movieDetails }),
}));
