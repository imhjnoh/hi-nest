import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

// this means 'movies' will be the entry point for the lines below...
@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This will return all movies'
    }

    @Get("search")
    // get query parameters by keys
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    // get path parameters by ':'
    // WARNING: if you use @Get({keyword}) under this block, it will route with id whether you want it or not...
    @Get(":id")
    // in Nest, If you want something, you have to ask for...
    getOne(@Param("id") movieId: string){
        return `This will return one movie with the id: ${movieId}`
    }

    @Post()
    // get requset body
    create(@Body() movieData){
        console.log(movieData);
        return movieData
    }

    @Delete(":id")
    remove(@Param("id") movieId: string) {
        return `This will delete a movie with the id: ${movieId}`
    }

    @Put(':id')
    patch(@Param("id") movieId: string) {
        return `This will patch a movie with the id: ${movieId}`
    }
}
