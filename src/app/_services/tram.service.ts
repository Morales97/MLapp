import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class TramService {

    constructor(private http : HttpClient){}

    getTram(url, num){
        return this.http.get(url + '/' + num.toString(), {})
    }

    getOwnTram(url){
        return this.http.get(url)
    }

    openTram(url, num_id){
        return this.http.post(url + '/' + num_id.toString(), {})
    }

    pasEscombra(url, num_id){
        return this.http.post(url + '/' + num_id.toString(), {})
    }

    closeTram(url, num_id){
        return this.http.post(url + '/' + num_id.toString(), {})
    }

    getEvents(url){
        return this.http.get(url)
    }

    changeAvituallament(url, tram_num, avituallament_rebut){
        return this.http.post(url, {tram_num, avituallament_rebut})
    }

    changeMaterial(url, tram_num, material_rebut){
        return this.http.post(url, {tram_num, material_rebut})
    }

    changePicnic(url, tram_num, picnic_rebut){
        return this.http.post(url, {tram_num, picnic_rebut})
    }
}
