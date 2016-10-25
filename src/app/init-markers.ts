export class Init{
    
    
    load(){
        
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined ){
            
            console.log('No Markers found.... creating');
            var markers = [
                
                {
                    name: 'Location One',
                    lat: 17.283027358380657,
                    lng: 101.05634892382818 ,
                    draggable: true
                },
                {
                    name: 'Location Two',
                    lat: 16.21764141317402,
                    lng: 100.32598637304682 ,
                    draggable: true
                },
                {
                    name: 'Location Three',
                    lat: 14.459234871153294,
                    lng: 100.63442356152336 ,
                    draggable: true
                }
                
                
            ];
            
            
            localStorage.setItem('markers',JSON.stringify(markers));
        }else{
            console.log('Loading markers...');
        }
        
    }
    
    
}