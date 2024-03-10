//write function called make_album() object describing a music al

function make_album(ArtistName : string , albumTitle : string ,): {ArtistName:string , albumTitle:string}{
    const dictionaries = {ArtistName:ArtistName.charAt(0).toUpperCase()+ ArtistName.slice(1),
                        albumTitle:albumTitle.charAt(0).toUpperCase() + albumTitle.slice(1)
                    };

    
        return dictionaries;

}
//create three albums 
 let  album= make_album('Ali Zafar', 'yadein' );
    console.log(album);

 album  = make_album('Atif Aslam' , 'PSL' , );
    console.log(album);

 album = make_album('Sahir Ali' , 'Khayal' , );
     console.log(album);

