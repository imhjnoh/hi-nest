import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
    getOne(@Param("id") movieId: number):Movie{
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
    create(@Body() movieData: CreateMovieDto){
        console.log(movieData);
        return this.moviesService.create(movieData)
    }

    @Delete(":id")
    remove(@Param("id") movieId: number) {
        console.log(`This will delete a movie with the id: ${movieId}`)
        return this.moviesService.deleteOne(movieId)
    }

    @Patch(':id')
    patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData)
    }
}
