import type IMovie from "./IMovie";

export default interface IGenreResponse {
    count: number;
    movies: IMovie[];
};
