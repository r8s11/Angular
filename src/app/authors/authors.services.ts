import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsServices {
    getCourse(){
        return ["Author1", "Author2", "Author3"];
    }
}
