const catagoriedSongs = document.querySelector('.catagoried-songs');

catagoriedSongs.onmouseover = function() {
    
    const catagoriedPlayIcon = document.querySelector('.catagoried-play-icon');
    catagoriedPlayIcon.style.display='block';

};

catagoriedSongs.onmouseout = function() {

    const catagoriedPlayIcon = document.querySelector('.catagoried-play-icon');
    catagoriedPlayIcon.style.display='none';


}