import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    providers: [ GithubService ],
})
export class ProfileComponent {

    user: any;
    repos: any[];
    username: string;

    constructor(private gitHubService: GithubService) {}

    getUser() {

        this.gitHubService
            .getUser(this.username)
            .subscribe(user => this.user = user)
    }

    getRepos() {

        this.gitHubService
            .getRepos(this.username)
            .subscribe(repos => this.repos = repos)
    }

    searchUser() {

        this.getUser();
        this.getRepos();
    }
    
}