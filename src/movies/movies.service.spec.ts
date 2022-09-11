import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  // literally, execute before each test...
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // "it", indivisual test 두 가지 의미가 있다!
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', () => {
    expect(2+3).toEqual(5)
  })

  describe("getAll()", () => {
    it("should return an array", () => {
      const result = service.getAll()
      expect(result).toBeInstanceOf(Array)
    })
  })
  describe("getOne()", () => {
    it('should return a movie', () => {
      service.create({
        title: "testMovie",
        genres: ['test'],
        year: 2000
      })
      const movie = service.getOne(1)
      expect(movie).toBeDefined()
      expect(movie.id).toEqual(1)
    })
    it('should throw 404 error', () => {
      try{
        service.getOne(999)
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
        expect(e.message).toEqual('Movie with ID 999 not found.')
      }
    })
  })
  describe("deleteOne()", () => {
    it("deletes a movie", () => {
      service.create({
        title: "test movie",
        genres: ['test'],
        year: 2000
      })
      const beforeDelete = service.getAll().length
      service.deleteOne(1)
      const afterDelete = service.getAll().length
      expect(afterDelete).toBeLessThan(beforeDelete)
    })
    it("should return a 404", () => {
      try{
        service.deleteOne(999)
      }catch(e) {
        expect(e).toBeInstanceOf(NotFoundException)
      }
    })
  })
  describe("create()", () => {
    it("should return a movie", () => {
      const beforeCreate = service.getAll().length
      service.create({
        title: "test movie",
        genres: ['test'],
        year: 2000
      })
      const afterCreate = service.getAll().length
      console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate)
    })
  })
  describe("update()", () => {
    it("should update a movie", () => {
      // 매번 생성하기 귀찮다면 beforeEach 에 넣으면 된다.
      service.create({
        title: "test movie",
        genres: ['test'],
        year: 2000
      })
      service.update(1, {title: "updated title"})
      const movie = service.getOne(1)
      expect(movie.title).toEqual('updated title')
    })
    it("should throw a NotFoundException", () => {
      try{
        service.update(999, {})
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
      }
    })
  })
});
