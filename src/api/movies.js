import instance from "./config.js";

async function getMyMovies() {
  return await instance.get("movies/mine");
}

async function createMovie(formData) {
  return await instance.post("movies/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
}

/**
 * Met à jour les collaborateurs d'un film
 * Endpoint: PUT /movies/:id/collaborators
 */
async function updateMovieCollaborators(id, collaborators) {
  return await instance.put(`movies/${id}/collaborators`, { collaborators });
}

async function deleteMovie(id) {
  return await instance.delete(`movies/${id}`);
}

export { getMyMovies, createMovie, updateMovieCollaborators, deleteMovie };
