var rows=[].slice.call(document.getElementsByClassName("Row"));
var Board=['10101010','01010101','10101010','00000000','00000000','02020202','20202020','02020202']
for(x=0;x<rows.length;x++){
    row=rows[x];
    boxes=row.children;
    if((x+1)%2==0){
        for(var y=0;y<boxes.length;y++){
            box=boxes[y];
            if((y+1)%2==0){
                box.style.backgroundColor = "#0E3B43";
            }
            else{
                box.style.backgroundColor = "#A3BBAD";
            }
        }
    }
    else{
        for(y=0;y<boxes.length;y++){
            box=boxes[y]
            if((y+1)%2==0){
                box.style.backgroundColor = "#A3BBAD";
            }
            else{
                box.style.backgroundColor = "#0E3B43";
            }
        }
    }
}
function B8Add(fn,sn){
    first=parseInt(fn,8)
    second=parseInt(sn,8)
    cock=(first+second)
    if(cock.toString(8).length<2){
        return '0'+cock.toString(8)
    }
    return cock.toString(8)
}
function WhiteP(e){
    if(turn%2!=0){
        sp=e.currentTarget
        loc=(sp.getAttribute('Position'))
        clearVS()
        if((0<=((+String(loc)[0])-1))&&(0<=((+String(loc)[1])-1))){
            if(!rows[(+String(loc)[0])-1].children[(+String(loc)[1])-1].hasChildNodes()){
                makeVS(B8Add(loc,-11))
            }
            else if((0<=((+String(loc)[0])-2))&&(0<=((+String(loc)[1])-2))&&(rows[(+String(loc)[0])-1].children[(+String(loc)[1])-1].children[0].className=='BlackP')){
                if(!rows[(+String(loc)[0])-2].children[(+String(loc)[1])-2].hasChildNodes()){
                    makeTS(B8Add(loc,-22),B8Add(loc,-11))
                }
            }
        }
        if((0<=((+String(loc)[0])-1))&&(((+String(loc)[1])+1)<=7)){
            if(!rows[(+String(loc)[0])-1].children[(+String(loc)[1])+1].hasChildNodes()){
                makeVS(B8Add(loc,-7))
            }
            else if((0<=((+String(loc)[0])-2))&&(((+String(loc)[1])+2)<=7)&&(rows[(+String(loc)[0])-1].children[(+String(loc)[1])+1].children[0].className=='BlackP')){
                if(!rows[(+String(loc)[0])-2].children[(+String(loc)[1])+2].hasChildNodes()){
                    makeTS(B8Add(loc,-16),B8Add(loc,-7))
                }
            }
        }
    }
}

function BlackP(e){
    if(turn%2==0){
        sp=e.currentTarget
        loc=(sp.getAttribute('Position'))
        clearVS()
        if((7>=((+String(loc)[0])+1))&&(0<=((+String(loc)[1])-1))){
            if(!rows[(+String(loc)[0])+1].children[(+String(loc)[1])-1].hasChildNodes()){
                makeVS(B8Add(loc,7))
            }
            else if((0<=((+String(loc)[0])+2))&&(0<=((+String(loc)[1])-2))&&(rows[(+String(loc)[0])+1].children[(+String(loc)[1])-1].children[0].className=='WhiteP')){
                if(!rows[(+String(loc)[0])+2].children[(+String(loc)[1])-2].hasChildNodes()){
                    makeTS(B8Add(loc,16),B8Add(loc,7))
                }
            }
        }
        if((7>=((+String(loc)[0])+1))&&(((+String(loc)[1])+1)<=7)){
            if(!rows[(+String(loc)[0])+1].children[(+String(loc)[1])+1].hasChildNodes()){
                makeVS(B8Add(loc,11))
            }
            else if((0<=((+String(loc)[0])+2))&&(((+String(loc)[1])+2)<=7)&&(rows[(+String(loc)[0])+1].children[(+String(loc)[1])+1].children[0].className=='WhiteP')){
                if(!rows[(+String(loc)[0])+2].children[(+String(loc)[1])+2].hasChildNodes()){
                    makeTS(B8Add(loc,22),B8Add(loc,11))
                }
            }
        }
    }
}

function PromotedP(e){
    sp=e.currentTarget
    if(((sp.className=='WhiteP')&&(turn%2!=0))||(sp.className=='BlackP')&&(turn%2==0)){
        sp=e.currentTarget
        loc=(sp.getAttribute('Position'))
        clearVS()
        console.log('hello')
        if((0<=((+String(loc)[0])-1))&&(0<=((+String(loc)[1])-1))){
            if(!rows[(+String(loc)[0])-1].children[(+String(loc)[1])-1].hasChildNodes()){
                makeVS(B8Add(loc,-11))
            }
            else if((0<=((+String(loc)[0])-2))&&(0<=((+String(loc)[1])-2))&&(rows[(+String(loc)[0])-1].children[(+String(loc)[1])-1].children[0].className!=sp.className)){
                if(!rows[(+String(loc)[0])-2].children[(+String(loc)[1])-2].hasChildNodes()){
                    makeTS(B8Add(loc,-22),B8Add(loc,-11))
                }
            }
        }
        if((0<=((+String(loc)[0])-1))&&(((+String(loc)[1])+1)<=7)){
            if(!rows[(+String(loc)[0])-1].children[(+String(loc)[1])+1].hasChildNodes()){
                makeVS(B8Add(loc,-7))
            }
            else if((0<=((+String(loc)[0])-2))&&(((+String(loc)[1])+2)<=7)&&(rows[(+String(loc)[0])-1].children[(+String(loc)[1])+1].children[0].className!=sp.className)){
                if(!rows[(+String(loc)[0])-2].children[(+String(loc)[1])+2].hasChildNodes()){
                    makeTS(B8Add(loc,-16),B8Add(loc,-7))
                }
            }
        }
        if((7>=((+String(loc)[0])+1))&&(0<=((+String(loc)[1])-1))){
            if(!rows[(+String(loc)[0])+1].children[(+String(loc)[1])-1].hasChildNodes()){
                makeVS(B8Add(loc,7))
            }
            else if((0<=((+String(loc)[0])+2))&&(0<=((+String(loc)[1])-2))&&(rows[(+String(loc)[0])+1].children[(+String(loc)[1])-1].children[0].className!=sp.className)){
                if(!rows[(+String(loc)[0])+2].children[(+String(loc)[1])-2].hasChildNodes()){
                    makeTS(B8Add(loc,16),B8Add(loc,7))
                }
            }
        }
        if((7>=((+String(loc)[0])+1))&&(((+String(loc)[1])+1)<=7)){
            if(!rows[(+String(loc)[0])+1].children[(+String(loc)[1])+1].hasChildNodes()){
                makeVS(B8Add(loc,11))
            }
            else if((0<=((+String(loc)[0])+2))&&(((+String(loc)[1])+2)<=7)&&(rows[(+String(loc)[0])+1].children[(+String(loc)[1])+1].children[0].className!=sp.className)){
                if(!rows[(+String(loc)[0])+2].children[(+String(loc)[1])+2].hasChildNodes()){
                    makeTS(B8Add(loc,22),B8Add(loc,11))
                }
            }
        }
    }
}

StartPOS=['10101010','01010101','10101010','00000000','00000000','02020202','20202020','02020202']
// shows valid squares and moves piece when square is clicked
function makeVS(loc){
    var ValidS=document.createElement('button')
    circle = document.createElement('div')
    circle.className = 'ValidS'
    ValidS.appendChild(circle)
    ValidS.addEventListener('click',function(e){
        ct=e.currentTarget.parentNode
        ct.removeChild(e.currentTarget)
        ct.appendChild(sp)
        sp.setAttribute('Position',loc)
        clearVS()
        Promote()
        turn+=1
        Turntext=document.getElementsByClassName('Turn')[0]
        Turntext.innerHTML = 'Turn: '+turn
        Movetext=document.getElementsByClassName('Move')[0]
        move = (turn%2)==0 ? 'Black':'White'
        Movetext.innerHTML = 'Move: '+move
        sp='penis'
    })
    rows[String(loc)[0]].children[String(loc)[1]].appendChild(ValidS)
}

function getP(loc){
    return (rows[(+String(loc)[0])].children[(+String(loc)[1])].children[0])
}

function makeTS(loc,takeloc){
    var TakeS=document.createElement('button')
    circle = document.createElement('div')
    circle.className = 'ValidS'
    TakeS.appendChild(circle)
    TakeS.addEventListener('click',function(e){
        ct=e.currentTarget.parentNode
        ct.removeChild(e.currentTarget)
        ct.appendChild(sp)
        rows[String(takeloc)[0]].children[String(takeloc)[1]].removeChild(rows[String(takeloc)[0]].children[String(takeloc)[1]].children[0])
        double=false
        if(B8Add(loc,-takeloc)[0]=='-'){
            if(0<=(+loc[0])-2){
                if(0<=((+loc[1])-2)){
                    if(rows[(B8Add(loc,-11)[0])].children[(B8Add(loc,-11)[1])].hasChildNodes()){
                        if(getP(B8Add(loc,-11)).className!=sp.className){
                            if(!rows[(+B8Add(loc,-22)[0])].children[(+B8Add(loc,-22)[1])].hasChildNodes()){
                                clearVS()
                                double=true
                                sp.setAttribute('Position',loc)
                                makeTS(B8Add(loc,-22),B8Add(loc,-11))
                            }
                        }
                    }
                }
                if(7>=((+loc[1])+2)){
                    if(rows[(B8Add(loc,-7)[0])].children[(B8Add(loc,-7)[1])].hasChildNodes()){
                        if(getP(B8Add(loc,-7)).className!=sp.className){
                            if(!rows[(B8Add(loc,-16)[0])].children[(B8Add(loc,-16)[1])].hasChildNodes()){
                                clearVS()
                                double=true
                                sp.setAttribute('Position',loc)
                                makeTS(B8Add(loc,-16),B8Add(loc,-7))
                            }
                        }
                    }
                }
            }
        }
        else if(B8Add(loc,-takeloc)[0]!='-'){
            if(7>=((+loc[0])+2)){
                if(0<=((+loc[1])+2)){
                    if(rows[(B8Add(loc,11)[0])].children[(B8Add(loc,11)[1])].hasChildNodes())
                        if(getP(B8Add(loc,11)).className!=sp.className){
                            if(!rows[(+String(B8Add(loc,22))[0])].children[(+String(B8Add(loc,22))[1])].hasChildNodes()){
                                clearVS()
                                double=true
                                sp.setAttribute('Position',loc)
                                makeTS(B8Add(loc,22),B8Add(loc,11))
                            }
                        }
                }
                if(7>=((+loc[1])-2)){
                    if(rows[(B8Add(loc,7)[0])].children[(B8Add(loc,7)[1])].hasChildNodes()){
                        if(getP(B8Add(loc,7)).className!=sp.className){
                            if(!rows[(B8Add(loc,16)[0])].children[(B8Add(loc,16)[1])].hasChildNodes()){
                                clearVS()
                                double=true
                                sp.setAttribute('Position',loc)
                                makeTS(B8Add(loc,16),B8Add(loc,7))
                            }
                        }
                    }
                }
            }
        }
        if(!double){
            sp.setAttribute('Position',loc)
            clearVS()
            Promote()
            turn+=1
            Turntext=document.getElementsByClassName('Turn')[0]
            Turntext.innerHTML = 'Turn: '+turn
            Movetext=document.getElementsByClassName('Move')[0]
            move = (turn%2)==0 ? 'Black':'White'
            Movetext.innerHTML = 'Move: '+move
            sp='penis'
        }
    })
    rows[String(loc)[0]].children[String(loc)[1]].appendChild(TakeS)
}

// PROMOTING STUFF
function Promote(){
    if(sp.className=='WhiteP'&&sp.getAttribute('position')[0]==0){
        CW=document.createElement('div')
        CW.className="crown"
        sp.appendChild(CW)
        sp.removeEventListener('click',WhiteP)
        sp.addEventListener('click',PromotedP)
    }
    else if(sp.className=='BlackP'&&sp.getAttribute('position')[0]==7){
        CW=document.createElement('div')
        CW.className="crown"
        sp.appendChild(CW)
        sp.removeEventListener('click',BlackP)
        sp.addEventListener('click',PromotedP)
    }
}

// Clear valid Squares
function clearVS(){
    Vsquares=[].slice.call(document.getElementsByClassName('ValidS'))
    for(x=0;x<Vsquares.length;x+=1){
        vs=Vsquares[x].parentNode
        vs.parentNode.removeChild(vs)
    }
}

// Clear board
function clearB(){
    clear=document.getElementsByClassName('Box')
    for(x=0;x<clear.length;x++){
        for(y=0;y<clear[x].children.length;y++){
            clear[x].removeChild(clear[x].children[y])
        }
    }
}

// Fill board
function fillB(){
    Board=StartPOS
    for(x=0;x<Board.length;x++){
        for(y=0;y<Board[x].length;y++){
            if(Board[x][y]=='1'){
                BP=document.createElement('button')
                BP.className='BlackP'
                BP.setAttribute('Position',String(x)+String(y))
                BP.addEventListener('click',BlackP)
                rows[x].children[y].appendChild(BP)
            }
            else if(Board[x][y]=='2'){
                WP=document.createElement('button')
                WP.className='WhiteP'
                WP.setAttribute('Position',String(x)+String(y))
                WP.addEventListener('click',WhiteP)
                rows[x].children[y].appendChild(WP)
            }
        }
    }
}

// Make new game function
Newbutt=document.getElementsByClassName('Newgame')
Newbutt=Newbutt[0]
Newbutt.addEventListener('click',function(e){
    clearB()
    fillB()
    turn=1
    Turntext=document.getElementsByClassName('Turn')[0]
    Turntext.innerHTML = 'Turn: '+turn
    Movetext=document.getElementsByClassName('Move')[0]
    move = (turn%2)==0 ? 'Black':'White'
    Movetext.innerHTML = 'Move: '+move
})

// Clear Board button
Clearbutt=document.getElementsByClassName('ClearBoard')[0]
Clearbutt.addEventListener('click',function(e){
    clearB()
    turn=1
    Turntext=document.getElementsByClassName('Turn')[0]
    Turntext.innerHTML = 'Turn: '+turn
    Movetext=document.getElementsByClassName('Move')[0]
    move = (turn%2)==0 ? 'Black':'White'
    Movetext.innerHTML = 'Move: '+move
})

// Turn Button
Turnbutt=document.getElementsByClassName('IncTurn')[0]
Turnbutt.addEventListener('click',function(e){
    turn+=1
    Turntext=document.getElementsByClassName('Turn')[0]
    Turntext.innerHTML = 'Turn: '+turn
    Movetext=document.getElementsByClassName('Move')[0]
    move = (turn%2)==0 ? 'Black':'White'
    Movetext.innerHTML = 'Move: '+move
})

// Clear Take Squares
function clearHT(){
    hightakes=[].slice.call(document.getElementsByClassName('TakeS'))
    for(x=0;x<hightakes.length;x++){
        ht=hightakes[x].parentNode
        ht.parentNode.removeChild(ht)
    }
}

var sp = 'penis'

fillB()
turn=1
Turntext=document.getElementsByClassName('Turn')[0]
Turntext.innerHTML = 'Turn: '+turn
Movetext=document.getElementsByClassName('Move')[0]
move = (turn%2)==0 ? 'Black':'White'
Movetext.innerHTML = 'Move: '+move