import { fetchWithCache } from "@react-mf/api";
import { combineLatest } from "rxjs";

export function getSpacecraft(pageNum = 1) {
  return fetchWithCache(`spacecraft/?page=${pageNum}`);
}

export function getPlanet(id) {
  return fetchWithCache(`planets/${id}/`);
}

export function getFilm(filmId) {
  return fetchWithCache(`films/${filmId}`);
}

export function getFilms() {
  return fetchWithCache(`films`);
}