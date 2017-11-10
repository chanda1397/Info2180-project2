 var eSpaceX = '300px';
 var eSpaceY = '300px';
 
/* The extra feature chosen is change background image */

window.onload = function(){
    var puzzleArea = document.getElementById('puzzlearea');
	var shuffleButton = document.getElementById('shufflebutton');
    tiles = puzzleArea.getElementsByTagName('div');    
	

    for (var i=0; i<tiles.length; i++)                              
    {
        tiles[i].style.backgroundImage="url('goku3.jpg')";  
		
        tiles[i].className = 'puzzlepiece';                         
        tiles[i].style.left = (i%4*100)+'px';
        tiles[i].style.top = (parseInt(i/4)*100) + 'px';
        tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
		
        tiles[i].onmouseover = function()
        {
            if (canMove(parseInt(this.innerHTML)))
				
            {
		var colour = getRandomColor();
                this.style.border = "4px solid red";
                this.style.color = colour;
            }
        };
        tiles[i].onmouseout = function()
        {
            this.style.border = "2px solid black";
            this.style.color = "#000000";
        };

        tiles[i].onclick = function()
        {
            if (canMove(parseInt(this.innerHTML)))
            {
                swap(this.innerHTML-1);
                
                
            }
        };
    }

    
	shuffleButton.onclick = function(){
		
		shufflePieces();
	};
	
	changeButton();
     
    
};
 

function shufflePieces(){
		
        for (var i=0; i<250; i++)
        {
            var rand = parseInt(Math.random()* 100) %4;
            if (rand == 0)
            {
                var tmp = calcUp(eSpaceX, eSpaceY);
                if ( tmp != -1)
                {
                    swap(tmp);
                }
            }
            if (rand == 1)
            {
                var tmp = calcDown(eSpaceX, eSpaceY);
                if ( tmp != -1) 
                {
                    swap(tmp);
                }
            }

            if (rand == 2)
            {
                var tmp = calcLeft(eSpaceX, eSpaceY);
                if ( tmp != -1)
                {
                    swap(tmp);
                }
            }

            if (rand == 3)
            {
                var tmp = calcRight(eSpaceX, eSpaceY);
                if (tmp != -1)
                {
                    swap(tmp);
                }
            }
        }
	};

function canMove(position)
{
    if (calcLeft(eSpaceX, eSpaceY) == (position-1))
    {
        return true;
    }

    if (calcDown(eSpaceX, eSpaceY) == (position-1))
    {
        return true;
    }

    if (calcUp(eSpaceX, eSpaceY) == (position-1))
    {
        return true;
    }

    if (calcRight(eSpaceX, eSpaceY) == (position-1))
    {
        return true;
    }
}





function calcLeft(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);

    if (xx > 0)
    {
        for (var i = 0; i < tiles.length; i++) 
        {
            if (parseInt(tiles[i].style.left) + 100 == xx && parseInt(tiles[i].style.top) == yy)
            {
                return i;
            } 
        }
    }
    else 
    {
        return -1;
    }
}

function calcRight(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);
    if (xx < 300)
    {
        for (var i =0; i<tiles.length; i++){
            if (parseInt(tiles[i].style.left) - 100 == xx && parseInt(tiles[i].style.top) == yy) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
}

function calcUp(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);
    if (yy > 0)
    {
        for (var i=0; i<tiles.length; i++)
        {
            if (parseInt(tiles[i].style.top) + 100 == yy && parseInt(tiles[i].style.left) == xx) 
            {
                return i;
            }
        } 
    }
    else 
    {
        return -1;
    }
}

function calcDown(x, y)
{
    var xx = parseInt(x);
    var yy = parseInt(y);
    if (yy < 300)
    {
        for (var i=0; i<tiles.length; i++)
        {
            if (parseInt(tiles[i].style.top) - 100 == yy && parseInt(tiles[i].style.left) == xx) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
}

function swap(x)
{
    var temp = tiles[x].style.top;
    tiles[x].style.top = eSpaceY;
    eSpaceY = temp;
    temp = tiles[x].style.left;
    tiles[x].style.left = eSpaceX;
    eSpaceX = temp;
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function changeButton(){
	var $input = $('<input type="button" value="Change Image" />');
	$input.click(function(){
		changeImage();
	});
	
	$input.appendTo($("#controls"));
	
}

function changeImage(){
		x = Math.floor(Math.random()*4);
		for (var i=0; i<tiles.length; i++) 
        		
		{
			if(x==0 ){
				tiles[i].style.backgroundImage="url('goku3.jpg')";   
				tiles[i].className = 'puzzlepiece';                         
				tiles[i].style.left = (i%4*100)+'px';
				tiles[i].style.top = (parseInt(i/4)*100) + 'px';
				tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top; 
			}else if(x==1){
				tiles[i].style.backgroundImage="url('vegeta3.jpg')";   
				tiles[i].className = 'puzzlepiece';                         
				tiles[i].style.left = (i%4*100)+'px';
				tiles[i].style.top = (parseInt(i/4)*100) + 'px';
				tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
				
			}else if(x==2){
				tiles[i].style.backgroundImage="url('gohan3.jpg')";   
				tiles[i].className = 'puzzlepiece';                         
				tiles[i].style.left = (i%4*100)+'px';
				tiles[i].style.top = (parseInt(i/4)*100) + 'px';
				tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
				
			}else if(x==3){
				tiles[i].style.backgroundImage="url('broly3.jpg')";   
				tiles[i].className = 'puzzlepiece';                         
				tiles[i].style.left = (i%4*100)+'px';
				tiles[i].style.top = (parseInt(i/4)*100) + 'px';
				tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
				
			}
		}
}


	
	



