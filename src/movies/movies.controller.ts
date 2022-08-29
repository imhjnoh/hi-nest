import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// this means 'movies' will be the entry point for the lines below...
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(){
        console.log('This will return all movies');
        return this.moviesService.getAll();
    }

    // get path parameters by ':'
    // WARNING: if you use @Get({keyword}) under this block, it will route with id whether you want it or not...
    @Get(":id")
    // in Nest, If you want something, you have to ask for...
    getOne(@Param("id") movieId: string):Movie{
        console.log(`This will return one movie with the id: ${movieId}`);
        return this.moviesService.getOne(movieId)
    }

    @Get("search")
    // get query parameters by keys
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Post()
    // get requset body
    create(@Body() movieData){
        console.log(movieData);
        return this.moviesService.create(movieData)
    }

    @Delete(":id")
    remove(@Param("id") movieId: string) {
        console.log(`This will delete a movie with the id: ${movieId}`)
        return this.moviesService.deleteOne(movieId)
    }

    @Put(':id')
    patch(@Param("id") movieId: string) {
        return `This will patch a movie with the id: ${movieId}`
    }
}
