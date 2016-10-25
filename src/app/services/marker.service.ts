import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()
export class MarkerService extends Init{
    
    constructor(){
        
        super();
        console.log('MarkerService Initialized...');
        this.load();
    }
    
    getMarkers(){
        
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }
    
    addMarker(newMarker){
        
        var markers = JSON.parse(localStorage.getItem('markers'));
        
        markers.push(newMarker);
        
        localStorage.setItem('markers',JSON.stringify(markers));
    }
}