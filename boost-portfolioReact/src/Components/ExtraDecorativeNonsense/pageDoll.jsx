
const pageDoll = () => {

    return (

<>



{/* <!--
Quick little pagedoll code to go with all my other codes in this bundle! Or whatever other codes you want, not just restricted to mine.
Add this code AFTER your other code



Main: #424b25
Scrollbar: #6d753b & #e1b251 (<- most little icons color)

Gradient:
#1d2515 & #393818


🐑 Sheeps out
--> */}


<!--Code start-->
<div class="fixed-bottom" style="height:250px; width:250px; bottom:1%; right:inherit; left:3%; ">
    
    
    <!--Pagedoll-->
    <img class="hidden-sm-down tooltipster" 
    
    src="https://placehold.co/300.png"
    
    
    alt="pagedoll" data-toggle="tooltip" 
    
    title="Me when I somehow have 2 speechbubbles at the same time how am I talking over myself what" 
    
    style="cursor:grab; filter:drop-shadow(4px 4px 0px #000)">
    <!--end pagedoll-->
    
    
    
    <!--Speech bubble start-->
    <div class="row no-gutters">
        
        
    <!--Speech indicator-->
    <div class="card p-3 hidden-sm-down border-0" style="clip-path: polygon(0 0, 100% 100%, 100% 30%); position: absolute; bottom:50%; left:95%; z-index:20; background:linear-gradient(#1d2515 0%, #393818 100%);"></div>
    <!--end-->
        
        
    <!--Main container-->
    <div class="card p-2 hidden-sm-down" style="position: absolute; left:105%; bottom:20%; width:200px; border-radius:25px; border: 6px ridge #424b25; background:linear-gradient(#1d2515 0%, #393818 100%); box-shadow: 0px 0px 10px #000">
        
        
        <!--The talk-->
        <div style="height:70px; overflow-y:auto; scrollbar-width:thin; scrollbar-color: #e1b251 #6d753b; ">
            <p style="font-family:monochrome;">Hover me to make me talk! I can also talk like this tho I can go on and on and on and on and on</p></div>
        <!--end the talk-->
    
    
    
    <!--Buttons-->
    <div class="row no-gutters mt-1">
        
        
        <!--Button for whatever you want-->
        <a class="col btn btn-sm mr-1" href="link to whatever maybe to sub or a code thread" style="background:#424b25"><i class="fas fa-user" style="color:#e1b251"></i></a>
        <!--end-->
        
        
        <!--Favourite button-->
        <a class="col btn btn-sm tooltipster mr-1" data-toggle="th-favorite" href="#" title="Favourite this character!" style="background:#424b25">
            
            <span class="favorite toggle-favorite"><i class="far fa-star" style="color:#e1b251"></i></span>
            
            <span class="unfavorite toggle-favorite"><i class="fas fa-star" style="color:#e1b251"></i></span>
            
        </a>
        <!--end-->
        
        
        <!--Coding cred DO NOT REMOVE OR EDIT-->
        <a class="col btn btn-sm tooltipster" href="https://toyhou.se/Deathtooksheeps" data-toggle="tooltip" 
        title="Coding credit" style="color:#e1b251; background-color: #424b25"><i class="fas fa-sheep"></i><i class="fas fa-code"></i></a>
        <!--end-->
        
        
    </div>
    <!--end buttons-->
    
    
    </div>
    <!--end main container-->
    
    
    </div>
    <!--end speech bubble-->
    
</div>
<!--end code-->



</>
        
    );

}