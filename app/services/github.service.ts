import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private client_id: string = 'f53f476f256424ad782c';
    private client_secret: string = 'c13035c9acd0103265b4257d9866423b722a638a';

    constructor(private http: Http) {}

    getUser(username: string) {

        return this.http
            .get(`http://api.github.com/users/${ username }?client_id=${ this.client_id }&client_secret=${ this.client_secret }`)
            .map(response => response.json())
    }

    getRepos(username: string) {

        return this.http
            .get(`http://api.github.com/users/${ username }/repos?client_id=${ this.client_id }&client_secret=${ this.client_secret }`)
            .map(response => response.json())
    }
}