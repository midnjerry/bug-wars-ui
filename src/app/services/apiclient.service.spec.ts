import { TestBed, inject } from '@angular/core/testing';
import { APIClientService } from './apiclient.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AIScript } from '../models/aiscript';
import { environment } from 'src/environments/environment';
import { AIScriptResponse } from '../models/aiscript.response';
import { Game } from '../models/game';
import { GameResult } from '../models/game-result';
import { MapData } from '../models/map-data';
import { BugInfo } from '../models/bug-info';
import { GameState } from '../models/game-state';
import { GameResultResponse } from '../models/game-result.response';

describe('APIClientService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiClient: APIClientService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    apiClient = TestBed.inject(APIClientService);
  });

  it('should be created', () => {
    expect(apiClient).toBeTruthy();
  });

  describe('getAllAIScripts()', () => {
    it('should call endpoint from environment file and retrieve records', () => {
      const script1: AIScript = new AIScript(1, 'Meg', 'jump jump');
      const script2: AIScript = new AIScript(2, 'Kellsey', 'move');
      const script3: AIScript = new AIScript(3, 'Lolita', 'turn move');
      const response: AIScript[] = [script1, script2, script3];
      // this method should return an array of Person objects
      apiClient.getAllAIScripts().subscribe((data) => {
        // we verify objects here
        expect(data[0]).toBe(script1);
        expect(data[1]).toBe(script2);
        expect(data[2]).toBe(script3);
      });
      // we check that the appropriate url with HTTP verb are called
      const req = httpTestingController.expectOne(
        environment.getAllAiScriptUrl
      );

      expect(req.request.method).toEqual('GET');

      // This ensures that the mockHttpServer responds.
      req.flush(response);
    });
  });

  describe('createAIScript()', () => {
    it('should call endpoint from environment file and retrieve records', () => {
      const input: AIScript = new AIScript(null, 'Meg', 'jump jump');
      const save: AIScript = new AIScript(1, 'Meg', 'jump jump');

      const response: AIScriptResponse = new AIScriptResponse(save, null);

      apiClient.createAIScript(input).subscribe((data) => {
        expect(data.body).toEqual(response);
      });

      const req = httpTestingController.expectOne(
        environment.getAllAiScriptUrl
      );

      expect(req.request.method).toEqual('POST');
      req.flush(response);
    });
  });

  describe('updateAIScript()', () => {
    it('should call endpoint from environment file and return output', () => {
      const input: AIScript = new AIScript(1, 'Meg', 'jump jump');


      const response: AIScriptResponse = new AIScriptResponse(input, null);

      apiClient.updateAIScript(input).subscribe((data) => {
        expect(data.body).toEqual(response);
      });

      const req = httpTestingController.expectOne(
        environment.getAllAiScriptUrl + '/1'
      );

      expect(req.request.method).toEqual('PUT');
      req.flush(response);
    });
  });

  describe('playGame()', () => {
    it('should call endpoint from environment file and retrieve gameResult', () => {
      const inputMap: MapData = new MapData();
      const inputBugInfos: BugInfo[] = [new BugInfo(), new BugInfo()];
      const input: Game = new Game(null, inputMap, inputBugInfos, 300, 12345);

      const expectedWinners: number[] = [1, 2, 3]
      const expectedGameStates: GameState[] = [new GameState(), new GameState(), new GameState()]
      const expectedResult: GameResult = new GameResult("DRAW", expectedWinners, expectedGameStates);

      const response: GameResultResponse = new GameResultResponse(expectedResult, null);

      apiClient.playGame(input).subscribe((data) => {
        expect(data.body).toEqual(response);
      });

      const req = httpTestingController.expectOne(
        environment.gamePlayUrl
      );

      expect(req.request.method).toEqual('POST');
      req.flush(response);
    });
  });

});
