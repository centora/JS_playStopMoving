(function(){
    var rect = document.getElementById("rect");        
    var _playBtn = document.getElementById("play");
    var _stopBtn = document.getElementById("stop");
    var time;
    var leftPos = 0;

    function move(_elem){
        addClass(_elem, "moved");
        leftPos+=10;
        rect.style.left = leftPos + "px";
        if(leftPos == 500){ 
            stopMove();
            leftPos = 0;
            removeClass(rect, "moved");
        }
    }

    function stopMove(){
        clearInterval(time);
    }


    function addClass(_elem, _class){
        var classes;

        if(_elem.classList){
            classes = _elem.classList.add(_class);
        }else{
            if(!_elem.className.length){
               classes = _elem.className = _class;
            }else{
                if(!hasClass(_elem, _class)){
                   classes = _elem.className +=  " " + _class;
                }
            }
        }

        return classes;
    }

    function hasClass(_elem, _class){
        if(_elem.className.length){
            if(_elem.className.indexOf(_class) > -1){
                return true;
            }else{
                return false;
            }
        } 
                

    }

    function removeClass(_elem, _class){
        if(_elem.classList){
            classes = _elem.classList.remove(_class);
        }else{
            if(_elem.className.length){
                classes = _elem.className = _elem.className.replace(_class, "").replace(/^\s+|\s+$/g, "");
            }
        }
        return classes;
    }

    _playBtn.onclick = function(){
        clearInterval(time);
        time = setInterval(function(){
            move(rect);
        }, 50);
    }
    _stopBtn.onclick = function(){
        stopMove();
    }


})();