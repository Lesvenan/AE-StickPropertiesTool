{
    function myScript(thisObj){
       function myScript_buildUI(thisObj){
          var palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: true});
 

// PALETTE
// =======
    palette.text = "Stick Properties"; 
    palette.orientation = "column"; 
    palette.alignChildren = ["left","top"]; 
    palette.spacing = 10; 
    palette.margins = 16; 


// IMAGES
// ======

var image1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%005IDAT%18%C2%95c%C3%AC%C3%AA%C3%AA%C3%BA%C3%8F%40%00%C2%94%C2%95%C2%9512%C3%A1W%C2%82%00%2CHlF%0CY%24%C2%80n%C3%A2%7F(%C3%86%00dY%C2%8D%C3%97z%C2%A2M%C2%A4%C2%BEB%C3%A2%00%03%03%03%00%5B%C3%A1%06%16%C2%A2%C2%B7%13h%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image2_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%007IDAT%18%C2%95cd%60%60%60%C3%A8%C3%AA%C3%AA%C3%BA%C3%8F%C2%80%07%C2%94%C2%95%C2%9512%C3%A1%C2%96F%05%60%C2%85%C2%A5%C2%A5%C2%A5%20%C2%93%C3%B1a%06%14%13KKKA%C3%94%7F(%C3%864qd%01%06%06%06%00x%60%08%C3%8E%3B%2FIL%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image3_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%009IDAT%18%C2%95cd%60%60%60%C3%A8%C3%AA%C3%AA%C3%BA%C3%8F%40%000%C3%A1%C2%97F%00%16(%C2%8B%11C%06%01%C3%80%C2%B6%C3%A12%C3%B1%3FL%01%0C%C2%90l5%3A%C3%80p%0A%C3%91%26R_!q%C2%80%C2%81%C2%81%01%00%60l%05%C2%B2s%C3%8C%60%C3%A6%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image4_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00FIDAT%18%C2%95c%20%160vuu%C3%BD%C2%87%C2%AAe%C2%84%C3%A9)%2B%2B%C3%83%C3%90%C3%8E%C2%84!%C2%82%03%C2%90%C2%AD%10%C3%A4%0C%C2%98S%C2%A8%60uii)%23%08cS%C3%88%C2%82%C3%8C%C3%A9%C3%AE%C3%AE%C3%86i%22%5Caii)%5C%10%5B%C3%B0%10%07%18%18%18%00s2%0D4%1C%C3%B2%C2%91%C2%9E%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image5_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00%1CIDAT%18%C2%95c%18%C2%8A%C2%A0%C2%AB%C2%AB%C3%AB%3F%08%C2%A3%3B%C2%9DiH%C3%BA%06%1B%60%60%60%00%00%C2%9C%C2%A8%05%3D%C3%BD%01%60J%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image6_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00%3CIDAT%18%C2%95c%20%160bS%C3%B7%C3%BF%C3%BF%7F8%C2%BB%C2%BB%C2%BB%1B%C3%8Ca%C3%81P%05%C2%91%C3%84%10%C3%83k%22T%03%5E%13av%C3%83%0Db%22%C3%963XM%C3%84%C3%A6%24%C2%A2M%24Z!q%C2%80%C2%81%C2%81%01%00%C2%80%C2%97%0F%C2%92%3Dv)%C3%A7%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image7_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00BIDAT%18%C2%95c%20%160vuu%C3%BD%C2%87%C2%AAe%C3%84%C2%A5%C2%A7%C2%AC%C2%AC%C2%8C%C2%81%09C%14%07%C2%A0%C2%BDB%C2%90%7B%C3%BF%C2%97%C2%96%C2%96%12T%C2%88%13%C2%B0%C2%A0%C3%89%C2%80%7D%C3%9E%C3%9D%C3%9D%C2%8D%C2%A1%01Y!%2C%C2%98%C2%B0%01F%C3%A2%C2%ACf%60%60%00%00%C3%B3%1C%0A%15%C2%BE%C2%8A%C3%9CM%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image8_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0A%08%06%00%00%00%C2%8D2%C3%8F%C2%BD%00%00%00%3EIDAT%18%C2%95c%18N%C2%80%11%C3%A4%C2%97%C2%AE%C2%AE.d%2F%C3%BD%07%11%C2%A5%C2%A5%C2%A5%C2%8C%C3%9D%C3%9D%C3%9D%20%C2%9A%C2%81%C2%91%C2%91%C2%91%C2%81%C2%89XO%C2%B3%60%11%03%C3%9B%022%0D%C2%9BB%C2%B0u%C3%98%00T%03%23qV300%00%007%C2%B7%0BQ%C2%8B%C3%B7E%C3%AC%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image9_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%0B%08%06%00%00%00Fn%1C%18%00%00%008IDAT%18%C2%95c%188%C3%80%08%C2%B2%C2%B9%C2%AB%C2%AB%0B%C2%9F%03%C3%BE%C2%83%08%26%0Ca%1C%C2%80b%C2%85%20%C3%AB%C3%80V%12R%C2%88%01Xp%C2%88%C2%83%3D%C2%89%0C%60%0AQ%C2%AC!%C3%85%C2%8D%C2%A8%C2%80%C2%81%C2%81%01%00%C3%A8%24%05%C2%AF%C2%AA%C2%BD%C2%86%1B%00%00%00%00IEND%C2%AEB%60%C2%82"; 

var image10_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%0A%08%06%00%00%00%C2%A3w%C3%AE%2F%00%00%00HIDAT8%C2%8Dc%18(%C3%80%C3%98%C3%95%C3%95%C3%B5%1Fj7%23%C3%8C%0D%C2%A5%C2%A5%C2%A5TuNww72%17l%1F%13%C2%86*%3A%C2%81%01%C2%B3%C2%98%05%C2%8D%0F%0E%06%C2%B4%C2%A0%C2%A1%26%C2%80G%C3%A7%C2%A0%C3%B11%C3%98E4N%5C%600%C3%B2%12%C3%97%C3%80%00%06%06%06%00Bo%0CS%09cr%C2%93%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image11_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%C2%ABIDATH%C2%89%C3%AD%C2%97%C3%AB%0A%C2%80%20%0C%C2%85g%C3%B8%C3%8A%C2%BE%C2%84%7Bh%03q%C2%B1%C2%BC%C3%A1%C2%BC%14%C2%94%1F%C3%B4%C3%87%C3%80%C3%93%C3%A6%C3%A9%C2%A8%C3%8A9%07%1CD%C2%BC%0FL%C3%82%18%C2%A3%C3%B8L%C3%87%0A%C2%91%16%C2%92%C2%8Ak%20b%C3%A5%C2%AD%C2%AF*%19%2B1R%C2%B1%0BO%17%C2%9A%C3%964%5E%C2%83U%C2%90%C2%9E%C2%96%C3%8C%C3%8F%5BIm%C2%97%C2%B4%C2%97%C3%B3%C2%9A%C2%B9%C2%B6%C3%B0%C3%B7%C2%85%2FW%C3%B3p%C3%A8uj%C2%89%5C%C3%B0%C3%BC%C2%AF%C3%95%C3%8AZK%C2%B1%C2%A7F%22%C2%B0U%C2%8F4%C3%9E7W%C3%80%C3%A7u%C2%8B%C2%B9%24%19%C2%BF%C3%8D%05%C2%BC%C3%95%C2%B3%C3%BF%5DNnW%C3%9B%C2%9B%C3%84%16%5E%C2%86%C3%A8%C3%8C%C2%95%0B%C2%82%C3%9E%5DM%3Fu%C2%BA%24HOTq%C3%84%C3%90%07%C3%BF%C3%AC%C3%AE%04%00'%0F%C2%B5%3D%3D%C2%A0%1C%C2%92%C2%B4%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image12_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%1E%08%06%00%00%00%15u%C2%8F0%00%00%00NIDAT8%C2%8Dcd%60%60%60%C3%A8%C3%AA%C3%AA%C3%BA%C3%8F%C2%80%07%C2%94%C2%95%C2%9512%C3%A1%C2%96F%05%2CP%1E%23%C2%86%0C%1A%C3%80f%C3%A2%7F(F%01%C3%98%14b%05%C2%A3%0A%C3%B1%C2%82Q%C2%85x%C3%81%C2%A8B%C3%AA(%C2%84%15%00%C3%88%00ka%00S%C2%88%C2%B7%C3%AC%01i%26%C3%8Ej%06%06%06%00S%09%07ByS%C3%85K%00%00%00%00IEND%C2%AEB%60%C2%82"; 

// TOOLTIP :
var ToolTipPos = "Click : change the position accordingly to the anchor point\n"+
"+ Shift : change the position accordingly to its shape & size\n" +
"+ Alt : add an expression to the position, and offsets sliders";
var ToolTipAnch = "Click : change your anchor point position accordingly to the layer's shape\n"+
"+ alt : add an expression to the anchor point"




// GROUP1
// ======
var group1 = palette.add("group", undefined, {name: "group1"}); 
    group1.orientation = "column"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

    // Panel_StickPos
    // ==============
    var Panel_StickPos = group1.add("panel", undefined, undefined, {name: "Panel_StickPos"}); 
        Panel_StickPos.text = "Stick Position"; 
        Panel_StickPos.preferredSize.width = 122; 
        Panel_StickPos.preferredSize.height = 120; 
        Panel_StickPos.orientation = "column"; 
        Panel_StickPos.alignChildren = ["center","center"]; 
        Panel_StickPos.spacing = 15; 
        Panel_StickPos.margins = 10; 

        // StickPos_UpLigne
        // ================
        var StickPos_UpLigne = Panel_StickPos.add("group", undefined, {name: "StickPos_UpLigne"}); 
            StickPos_UpLigne.preferredSize.width = 60; 
            StickPos_UpLigne.preferredSize.height = 17; 
            StickPos_UpLigne.orientation = "row"; 
            StickPos_UpLigne.alignChildren = ["center","center"]; 
            StickPos_UpLigne.spacing = 15; 
            StickPos_UpLigne.margins = 0; 

        var icoPos_Up_Left = StickPos_UpLigne.add("iconbutton", undefined, File.decode(image1_imgString), {name: "image1", style: "toolbutton"}); 
        icoPos_Up_Left.helpTip = ToolTipPos; 
        var icoPos_Up_Center = StickPos_UpLigne.add("iconbutton", undefined, File.decode(image2_imgString), {name: "image2", style: "toolbutton"}); 
        icoPos_Up_Center.helpTip = ToolTipPos; 
        var icoPos_Up_Right = StickPos_UpLigne.add("iconbutton", undefined, File.decode(image3_imgString), {name: "image3", style: "toolbutton"}); 
        icoPos_Up_Right.helpTip = ToolTipPos; 
        // StickPos_CenterLigne
        // ====================
        var StickPos_CenterLigne = Panel_StickPos.add("group", undefined, {name: "StickPos_CenterLigne"}); 
            StickPos_CenterLigne.preferredSize.width = 60; 
            StickPos_CenterLigne.preferredSize.height = 17; 
            StickPos_CenterLigne.orientation = "row"; 
            StickPos_CenterLigne.alignChildren = ["center","top"]; 
            StickPos_CenterLigne.spacing = 14; 
            StickPos_CenterLigne.margins = 0; 

        var icoPos_Center_Left = StickPos_CenterLigne.add("iconbutton", undefined, File.decode(image4_imgString), {name: "image4", style: "toolbutton"}); 
        icoPos_Center_Left.helpTip = ToolTipPos; 
        var icoPos_Center_Center = StickPos_CenterLigne.add("iconbutton", undefined, File.decode(image5_imgString), {name: "image5", style: "toolbutton"}); 
        icoPos_Center_Center.helpTip = ToolTipPos; 
        var icoPos_Center_Right = StickPos_CenterLigne.add("iconbutton", undefined, File.decode(image6_imgString), {name: "image6", style: "toolbutton"}); 
        icoPos_Center_Right.helpTip = ToolTipPos; 

        // StickPos_DownLigne
        // ==================
        var StickPos_DownLigne = Panel_StickPos.add("group", undefined, {name: "StickPos_DownLigne"}); 
            StickPos_DownLigne.preferredSize.width = 60; 
            StickPos_DownLigne.preferredSize.height = 17; 
            StickPos_DownLigne.orientation = "row"; 
            StickPos_DownLigne.alignChildren = ["center","center"]; 
            StickPos_DownLigne.spacing = 14; 
            StickPos_DownLigne.margins = 0; 

        var icoPos_Down_Left = StickPos_DownLigne.add("iconbutton", undefined, File.decode(image7_imgString), {name: "image7", style: "toolbutton"}); 
        icoPos_Down_Left.helpTip = ToolTipPos; 
        var icoPos_Down_Center = StickPos_DownLigne.add("iconbutton", undefined, File.decode(image8_imgString), {name: "image8", style: "toolbutton"}); 
        icoPos_Down_Center.helpTip = ToolTipPos; 
        var icoPos_Down_Right = StickPos_DownLigne.add("iconbutton", undefined, File.decode(image9_imgString), {name: "image9", style: "toolbutton"}); 
        icoPos_Down_Right.helpTip = ToolTipPos; 

    // Panel_StickAnchor
    // =================
    var Panel_StickAnchor = group1.add("panel", undefined, undefined, {name: "Panel_StickPos"}); 
        Panel_StickAnchor.text = "Stick Anchor"; 
        Panel_StickAnchor.preferredSize.width = 122; 
        Panel_StickAnchor.preferredSize.height = 120; 
        Panel_StickAnchor.orientation = "column"; 
        Panel_StickAnchor.alignChildren = ["center","center"]; 
        Panel_StickAnchor.spacing = 15; 
        Panel_StickAnchor.margins = 10; 

        // StickPos_UpLigne
        // ================
        var StickAnchor_UpLigne = Panel_StickAnchor.add("group", undefined, {name: "StickPos_UpLigne"}); 
            StickAnchor_UpLigne.preferredSize.width = 60; 
            StickAnchor_UpLigne.preferredSize.height = 17; 
            StickAnchor_UpLigne.orientation = "row"; 
            StickAnchor_UpLigne.alignChildren = ["center","center"]; 
            StickAnchor_UpLigne.spacing = 15; 
            StickAnchor_UpLigne.margins = 0; 

        var icoAnc_Up_Left = StickAnchor_UpLigne.add("iconbutton", undefined, File.decode(image1_imgString), {name: "image1", style: "toolbutton"}); 
        icoAnc_Up_Left.helpTip =ToolTipAnch;
        var icoAnc_Up_Center = StickAnchor_UpLigne.add("iconbutton", undefined, File.decode(image2_imgString), {name: "image2", style: "toolbutton"}); 
        icoAnc_Up_Center.helpTip =ToolTipAnch;
        var icoAnc_Up_Right = StickAnchor_UpLigne.add("iconbutton", undefined, File.decode(image3_imgString), {name: "image3", style: "toolbutton"}); 
        icoAnc_Up_Right.helpTip =ToolTipAnch;

        // StickAnchor_CenterLigne
        // =======================
        var StickAnchor_CenterLigne = Panel_StickAnchor.add("group", undefined, {name: "StickPos_CenterLigne"}); 
            StickAnchor_CenterLigne.preferredSize.width = 60; 
            StickAnchor_CenterLigne.preferredSize.height = 17; 
            StickAnchor_CenterLigne.orientation = "row"; 
            StickAnchor_CenterLigne.alignChildren = ["center","top"]; 
            StickAnchor_CenterLigne.spacing = 14; 
            StickAnchor_CenterLigne.margins = 0; 

        var icoAnc_Center_Left = StickAnchor_CenterLigne.add("iconbutton", undefined, File.decode(image4_imgString), {name: "image4", style: "toolbutton"}); 
        icoAnc_Center_Left.helpTip =ToolTipAnch;
        var icoAnc_Center_Center = StickAnchor_CenterLigne.add("iconbutton", undefined, File.decode(image5_imgString), {name: "image5", style: "toolbutton"}); 
        icoAnc_Center_Center.helpTip =ToolTipAnch;
        var icoAnc_Center_Right = StickAnchor_CenterLigne.add("iconbutton", undefined, File.decode(image6_imgString), {name: "image6", style: "toolbutton"}); 
        icoAnc_Center_Right.helpTip =ToolTipAnch;

        // StickAnchor_DownLigne
        // =====================
        var StickAnchor_DownLigne = Panel_StickAnchor.add("group", undefined, {name: "StickPos_DownLigne"}); 
            StickAnchor_DownLigne.preferredSize.width = 60; 
            StickAnchor_DownLigne.preferredSize.height = 17; 
            StickAnchor_DownLigne.orientation = "row"; 
            StickAnchor_DownLigne.alignChildren = ["center","center"]; 
            StickAnchor_DownLigne.spacing = 14; 
            StickAnchor_DownLigne.margins = 0; 

        var icoAnc_Down_Left = StickAnchor_DownLigne.add("iconbutton", undefined, File.decode(image7_imgString), {name: "image7", style: "toolbutton"}); 
        icoAnc_Down_Left.helpTip =ToolTipAnch;
        var icoAnc_Down_Center = StickAnchor_DownLigne.add("iconbutton", undefined, File.decode(image8_imgString), {name: "image8", style: "toolbutton"}); 
        icoAnc_Down_Center.helpTip =ToolTipAnch;
        var icoAnc_Down_Right = StickAnchor_DownLigne.add("iconbutton", undefined, File.decode(image9_imgString), {name: "image9", style: "toolbutton"}); 
        icoAnc_Down_Right.helpTip =ToolTipAnch;
   
// GROUP7
// ======
var group7 = palette.add("group", undefined, {name: "group7"}); 
    group7.preferredSize.width = 252; 
    group7.orientation = "column"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

 // Panel_StickScale
    // ================
    var Panel_StickScale = group7.add("panel", undefined, undefined, {name: "Panel_StickScale"}); 
        Panel_StickScale.text = "Stick scale"; 
        Panel_StickScale.preferredSize.width = 122; 
        Panel_StickScale.preferredSize.height = 122; 
        Panel_StickScale.orientation = "column"; 
        Panel_StickScale.alignChildren = ["left","center"]; 
        Panel_StickScale.spacing = 10; 
        Panel_StickScale.margins = 10; 

        // StickScale_UpLigne
        // ==================
        var StickScale_UpLigne = Panel_StickScale.add("group", undefined, {name: "StickScale_UpLigne"}); 
            StickScale_UpLigne.preferredSize.width = 60; 
            StickScale_UpLigne.preferredSize.height = 17; 
            StickScale_UpLigne.orientation = "row"; 
            StickScale_UpLigne.alignChildren = ["left","top"]; 
            StickScale_UpLigne.spacing = 15; 
            StickScale_UpLigne.margins = 0; 

        var icoScale_W = StickScale_UpLigne.add("iconbutton", undefined, File.decode(image10_imgString), {name: "image10", style: "toolbutton"}); 
        icoScale_W.helpTip = "Click : change the scale accordingly to the composition width\n"+
                            "+ Alt : Add an expression, and an offset slider";



        // StickScale_DownLigne
        // ====================
        var StickScale_DownLigne = Panel_StickScale.add("group", undefined, {name: "StickScale_DownLigne"}); 
            StickScale_DownLigne.preferredSize.width = 60; 
            StickScale_DownLigne.preferredSize.height = 17; 
            StickScale_DownLigne.orientation = "row"; 
            StickScale_DownLigne.alignChildren = ["left","top"]; 
            StickScale_DownLigne.spacing = 14; 
            StickScale_DownLigne.margins = 0; 

        var icoScale_WnH = StickScale_DownLigne.add("iconbutton", undefined, File.decode(image11_imgString), {name: "image11", style: "toolbutton"}); 
        icoScale_WnH.helpTip = "Click : change the scale while keep it inside the composition size\n"+
            "+ Shift : change the scale to make it exceed for one side of the composition\n"+
            "+ Alt : Add an expression, and an offset slider";
        var icoScale_H = StickScale_DownLigne.add("iconbutton", undefined, File.decode(image12_imgString), {name: "image12", style: "toolbutton"}); 
        icoScale_H.helpTip = "Click : change the scale accordingly to the composition height\n"+
                            "+ Alt : Add an expression, and an offset slider";

///// What's happen after a click ///
    icoPos_Up_Left.onClick = function () {
    StickPosition("left","top")
    }

    icoPos_Up_Center.onClick = function () {
    StickPosition("center","top")
    }

    icoPos_Up_Right.onClick = function () {
    StickPosition("right","top")
    }

    icoPos_Center_Left.onClick = function () {
    StickPosition("left","center")
    }

    icoPos_Center_Center.onClick = function () {
    StickPosition("center","center")
    }

    icoPos_Center_Right.onClick = function () {
    StickPosition("right","center")
    }

    icoPos_Down_Left.onClick = function () {
    StickPosition("left","bottom")
    }

    icoPos_Down_Center.onClick = function () {
    StickPosition("center","bottom")
    }

    icoPos_Down_Right.onClick = function () {
    StickPosition("right","bottom")
    }

    


    icoAnc_Up_Left.onClick = function () {
    StickAnchor("left","top")
    }

    icoAnc_Up_Center.onClick = function () {
    StickAnchor("center","top")
    }

    icoAnc_Up_Right.onClick = function () {
    StickAnchor("right","top")
    }

    icoAnc_Center_Left.onClick = function () {
    StickAnchor("left","center")
    }

    icoAnc_Center_Center.onClick = function () {
    StickAnchor("center","center")
    }

    icoAnc_Center_Right.onClick = function () {
    StickAnchor("right","center")
    }

    icoAnc_Down_Left.onClick = function () {
    StickAnchor("left","bottom")
    }

    icoAnc_Down_Center.onClick = function () {
    StickAnchor("center","bottom")
    }

    icoAnc_Down_Right.onClick = function () {
    StickAnchor("right","bottom")
    }



    icoScale_W.onClick = function () {
    StickScale("width")
    }

    icoScale_WnH.onClick = function () {
    StickScale("all")
    }

    icoScale_H.onClick = function () {
    StickScale("height")
    }





//============== FUNCTIONS ==========================

var EFFNAME = "ADBE Effect Parade";


function addSlider(layer, name, val){
    var eff = layer(EFFNAME);
    var slider;
    if ( eff(name) == null ) {
        slider = eff.addProperty("ADBE Slider Control");
        slider.name = name;
    } else {
        slider = eff(name);
    }
    slider(1).setValue(val);
}

function StickPosition(chooseJustiHoriz,chooseJustiVerti) {

    app.beginUndoGroup('StickPosition');
    var curComp = app.project.activeItem;
    var CompHeigh;
    var CompWidth;


    if ((curComp != null) || (curComp instanceof CompItem)) {
        var selLayers = curComp.selectedLayers;
        for (var iter = 0; iter < selLayers.length; iter++){
            var layer = selLayers[iter];
            var isShiftPressed = ScriptUI.environment.keyboardState.shiftKey;
            var isAltPressed = ScriptUI.environment.keyboardState.altKey;


            // Variables pour les expresssions
            var settingUp, PositionHoriz, PositionVerti;
            var SettingShape, SettingAVLayer ;
            var shapeLeft, shapeCenterHoriz, shapeRight, shapeTop, shapeCenterVerti, shapeBottom;
            var AVLayerLeft, AVLayerCenterVerti, AVLayerRight, AVLayerTop, AVLayerCenterVerti, AVLayerBottom;

            SettingShape = 
            'var OffX = effect("Position Offset X")("Slider");\n' +
            'var OffY = effect("Position Offset Y")("Slider");\n' +
            'var anchorLayer =transform.anchorPoint;\n' +
            'var scaleLayer= transform.scale;\n' +
            'var Left = sourceRectAtTime().left;\n' +
            'var Top = sourceRectAtTime().top;\n' +
            'var LayerWidth = sourceRectAtTime().width*scaleLayer[0]/100;\n' +
            'var LayerHeigh = sourceRectAtTime().height*scaleLayer[1]/100;\n' +
            'var CompHeigh = thisComp.height;\n' +
            'var CompWidth = thisComp.width;\n';
            SettingAVLayer = 
            'var OffX = effect("Position Offset X")("Slider");\n' +
            'var OffY = effect("Position Offset Y")("Slider");\n' +
            'var thisAnchor = transform.anchorPoint;\n' +
            'var thisScale = transform.scale;\n' +
            'var LayerWidth = sourceRectAtTime().width*thisScale[0]/100;\n' +
            'var LayerHeigh = sourceRectAtTime().height*thisScale[1]/100;\n' +
            'var CompHeigh = thisComp.height;\n' +
            'var CompWidth = thisComp.width;\n';

            if (layer.property("position").numKeys != 0) {
                NumKeyProp = NumKeyProp+1;
                continue

            } else {

                if (isShiftPressed && isAltPressed) {
                    addSlider(layer, "Position Offset X", 0);
                    addSlider(layer, "Position Offset Y", 0);
                    
                    if (layer.matchName == "ADBE Vector Layer" || layer.matchName == "ADBE Text Layer") {
                        settingUp = SettingShape;

                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = '(-Left+(anchorLayer[0]))*scaleLayer[0]/100';
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = '((-Left+(anchorLayer[0]))*scaleLayer[0]/100)+(CompWidth/2)-(LayerWidth/2)';
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = '((-Left+(anchorLayer[0]))*scaleLayer[0]/100)+(CompWidth)-(LayerWidth)';
                        }

                        if (chooseJustiVerti == "top") {
                            PositionVerti ='(-Top+(anchorLayer[1]))*scaleLayer[1]/100';
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti ='(-Top+(anchorLayer[1]))*scaleLayer[1]/100+(CompHeigh/2)-(LayerHeigh/2)';
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti ='(-Top+(anchorLayer[1]))*scaleLayer[1]/100+(CompHeigh)-(LayerHeigh)';
                        }
                      
                    } else {
                        settingUp = SettingAVLayer;

                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = '(thisAnchor[0]*thisScale[0]) / 100';
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = '((thisAnchor[0]*thisScale[0]) / 100)+(CompWidth/2)-(LayerWidth/2)';
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = '((thisAnchor[0]*thisScale[0]) / 100)+(CompWidth)-(LayerWidth)';
                        }

                        if (chooseJustiVerti == "top") {
                        PositionVerti = '(thisAnchor[1]*thisScale[1]) / 100';
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti ='((thisAnchor[1]*thisScale[1]) / 100)+(CompHeigh/2)-(LayerHeigh/2)';
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti ='(thisAnchor[1]*thisScale[1]) / 100+(CompHeigh)-(LayerHeigh)';
                        }
                            
                    }

                layer.property("position").expression =
                    settingUp +
                    'var posX = '+ PositionHoriz + ';\n'+
                    'var posY = '+ PositionVerti + ';\n'+
                    '[(posX+OffX),(posY+OffY)];'

                } else  if (isShiftPressed) {
                    // Change la position sur le cote, en considerant le point dáncrage et la taille
                    var anchorValue = layer.property("Anchor Point").value; 
                    var scaleValue = layer.property("Scale").value; 
                    var Left = layer.sourceRectAtTime(0, false).left;
                    var Top = layer.sourceRectAtTime(0, false).top;
                    var LayerWidth = layer.sourceRectAtTime(0, false).width*scaleValue[0]/100;
                    var LayerHeigh = layer.sourceRectAtTime(0, false).height*scaleValue[1]/100;
                    CompWidth = curComp.width;
                    CompHeigh = curComp.height;

                    if (layer.matchName == "ADBE Vector Layer" || layer.matchName == "ADBE Text Layer") {
                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = (-Left+(anchorValue[0]))*scaleValue[0]/100;
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = (-Left+(anchorValue[0]))*scaleValue[0]/100 +(CompWidth/2)-(LayerWidth/2);
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = (-Left+(anchorValue[0]))*scaleValue[0]/100 +(CompWidth)-(LayerWidth);
                        }

                        if (chooseJustiVerti == "top") {
                            PositionVerti =(-Top+(anchorValue[1]))*scaleValue[1]/100;
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti =(-Top+(anchorValue[1]))*scaleValue[1]/100+(CompHeigh/2)-(LayerHeigh/2);
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti =(-Top+(anchorValue[1]))*scaleValue[1]/100+(CompHeigh)-(LayerHeigh);
                        }
                      
                    } else {
                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = (anchorValue[0]*scaleValue[0]) / 100;
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = (anchorValue[0]*scaleValue[0]) / 100+(CompWidth/2)-(LayerWidth/2);
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = (anchorValue[0]*scaleValue[0]) / 100+(CompWidth)-(LayerWidth);
                        }

                        if (chooseJustiVerti == "top") {
                        PositionVerti = (anchorValue[1]*scaleValue[1]) / 100;
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti = (anchorValue[1]*scaleValue[1]) / 100+(CompHeigh/2)-(LayerHeigh/2);
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti = (anchorValue[1]*scaleValue[1]) / 100 +(CompHeigh)-(LayerHeigh);
                        }
                            
                    }


                    layer.property("position").setValue([PositionHoriz,PositionVerti]); 
                    

                } else if (isAltPressed) {
                    // Change la position sur le cote, le point dáncrage est la reference + expression
                    addSlider(layer, "Position Offset X", 0);
                    addSlider(layer, "Position Offset Y", 0);

                        settingUp = SettingAVLayer;

                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = '0';
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = 'CompWidth/2';
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = 'CompWidth';
                        }

                        if (chooseJustiVerti == "top") {
                        PositionVerti = '0';
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti ='CompHeigh/2';
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti ='CompHeigh';
                        }
                            
                    layer.property("position").expression =
                        settingUp +
                        'var posX = '+ PositionHoriz + ';\n'+
                        'var posY = '+ PositionVerti + ';\n'+
                        '[(posX+OffX),(posY+OffY)];'

                } else {
                    // Change la position sur le cote, le point dáncrage est la reference
                        CompWidth = curComp.width;
                        CompHeigh = curComp.height;

                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = 0;
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = CompWidth/2;
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = CompWidth;
                        }

                        if (chooseJustiVerti == "top") {
                        PositionVerti = 0;
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti =CompHeigh/2;
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti =CompHeigh;
                        }
                        
                        layer.property("position").setValue([PositionHoriz,PositionVerti]);   
                }
                

            }
        }
    } else {
        alert("Please select layers");
    }

    if (NumKeyProp !=0) {
       alert (NumKeyProp + " layers have keframes \n Please transform then manually")
    }

    app.endUndoGroup();

}

function StickAnchor(chooseJustiHoriz,chooseJustiVerti) {

    app.beginUndoGroup('StickAnchorPoint');
    var curComp = app.project.activeItem;

    if ((curComp != null) || (curComp instanceof CompItem)) {
        var selLayers = curComp.selectedLayers;
        for (var iter = 0; iter < selLayers.length; iter++){
            var layer = selLayers[iter];
            var isShiftPressed = ScriptUI.environment.keyboardState.shiftKey;
            var isAltPressed = ScriptUI.environment.keyboardState.altKey;


            // Variables pour les expresssions
            var settingUp, PositionHoriz, PositionVerti;
            var shapeLeft, shapeCenterHoriz, shapeRight, shapeTop, shapeCenterVerti, shapeBottom;
            var AVLayerLeft, AVLayerCenterVerti, AVLayerRight, AVLayerTop, AVLayerCenterVerti, AVLayerBottom;

            settingUp = 
            'var Left = sourceRectAtTime().left;\n' +
            'var Top = sourceRectAtTime().top;\n' +
            'var LayerWidth = sourceRectAtTime().width;\n' +
            'var LayerHeigh = sourceRectAtTime().height;\n';

            if (layer.property("Anchor Point").numKeys != 0) {
                NumKeyProp = NumKeyProp+1;
                continue

            } else {
                // Change l'anchor point sur le cote avec expression
                if (isAltPressed) {

                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = 'Left';
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = 'Left + LayerWidth/2';
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = 'Left + LayerWidth';
                        }

                        if (chooseJustiVerti == "top") {
                        PositionVerti = 'Top';
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti ='Top + LayerHeigh/2';
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti ='Top + LayerHeigh;';
                        }

                    layer.property("Anchor Point").expression =
                        settingUp +
                        'var posX = '+ PositionHoriz + ';\n'+
                        'var posY = '+ PositionVerti + ';\n'+
                        '[(posX),(posY)];'

                } else {

                    // Change l'anchor point sur le cote
                    var Left = layer.sourceRectAtTime(0, false).left;
                    var Top = layer.sourceRectAtTime(0, false).top;
                    var LayerWidth = layer.sourceRectAtTime(0, false).width;
                    var LayerHeigh = layer.sourceRectAtTime(0, false).height;

                        if (chooseJustiHoriz == "left") {
                            PositionHoriz = Left;
                        } else if (chooseJustiHoriz == "center") {
                            PositionHoriz = Left+LayerWidth/2;
                        } else if (chooseJustiHoriz == "right") {
                            PositionHoriz = Left+LayerWidth;
                        }

                        if (chooseJustiVerti == "top") {
                        PositionVerti = Top;
                        } else if (chooseJustiVerti == "center") {
                            PositionVerti =Top+LayerHeigh/2;
                        } else if (chooseJustiVerti == "bottom") {
                            PositionVerti =Top+LayerHeigh;
                        }
                        
                        layer.property("Anchor Point").setValue([PositionHoriz,PositionVerti]);   

                }
                

            }
        }
    } else {
        alert("Please select layers");
    }

    if (NumKeyProp !=0) {
       alert (NumKeyProp + " layers have keframes \n Please transform then manually")
    }

    app.endUndoGroup();

}

function StickScale(chooseJustiHoriz,chooseJustiVerti) {

    app.beginUndoGroup('StickPosition');
    var curComp = app.project.activeItem;
    var CompHeigh;
    var CompWidth;


    if ((curComp != null) || (curComp instanceof CompItem)) {
        var selLayers = curComp.selectedLayers;
        for (var iter = 0; iter < selLayers.length; iter++){
            var layer = selLayers[iter];
            var isShiftPressed = ScriptUI.environment.keyboardState.shiftKey;
            var isAltPressed = ScriptUI.environment.keyboardState.altKey;


            // Variables pour les expresssions
            var settingUp, NewScale;


            settingUp = 
            'var OffX = effect("Scale Offset Width (%)")("Slider");\n' +
            'var OffY = effect("Scale Offset Height (%)")("Slider");\n' +
            'var LayerWidth = thisLayer.sourceRectAtTime(time).width;\n' +
            'var LayerHeight = thisLayer.sourceRectAtTime(time).height;\n' +
            'var CompHeight = thisComp.height;\n' +
            'var CompWidth = thisComp.width;\n';

            if (layer.property("position").numKeys != 0) {
                NumKeyProp = NumKeyProp+1;
                continue

            } else {

                if (isAltPressed) {
                    addSlider(layer, "Scale Offset Width (%)", 0);
                    addSlider(layer, "Scale Offset Height (%)", 0);
        
                    if (chooseJustiHoriz == "width") {
                        NewScale = 'var NewScale = CompWidth / LayerWidth * 100;\n';
                    } else if (chooseJustiHoriz == "all") {
                        if (isShiftPressed) {
                            NewScale = 
                            'var ratioWidth = CompWidth/ LayerWidth;\n' +
                            'var ratioheight = CompHeight/ LayerHeight;\n' +
                            ' \n'+
                            'if (ratioWidth>ratioheight) {\n' +
	                        'NewScale =  CompHeight / LayerHeight * 100;\n' +
                            '} else {\n' +
	                        'NewScale =  CompWidth / LayerWidth * 100;\n' +
                            '};\n' +
                            ' \n'
                        } else {
                            NewScale = 
                            'var ratioWidth = CompWidth/ LayerWidth;\n' +
                            'var ratioheight = CompHeight/ LayerHeight;\n' +
                            ' \n'+
                            'if (ratioWidth<ratioheight) {\n' +
	                        'var NewScale =  CompHeight / LayerHeight * 100;\n' +
                            '} else {\n' +
	                        'var NewScale =  CompWidth / LayerWidth * 100;\n' +
                            '};\n' +
                            ' \n'
                            }
                    } else if (chooseJustiHoriz == "height") {
                            NewScale = 'var NewScale = CompHeight / LayerHeight * 100;\n';
                    }

                layer.property("scale").expression =
                    settingUp +
                    NewScale + 
                    '[(NewScale+OffX),(NewScale+OffY)];'

                } else {
                    // Change la position sur le cote, le point dáncrage est la reference
                        CompWidth = curComp.width;
                        CompHeight = curComp.height;
                        var LayerWidth = layer.sourceRectAtTime(0, false).width;
                        var LayerHeight = layer.sourceRectAtTime(0, false).height;
                        var ratioWidth = CompWidth/ LayerWidth;
                        var ratioheight = CompHeight/ LayerHeight;
                        var AlertTest = 
                        "ratio width = "+ ratioWidth + "\n" + 
                        "ratio height = "+ ratioheight + "\n" + 
                        "Conparatif = " + (ratioWidth>ratioheight) + "\n" + 
                        "CompHeight = "+ CompHeight + "\n" + 
                        "LayerHeight = "+ LayerHeight + "\n" + 
                        "calcul" + (CompHeight / LayerHeight * 100) + "\n" + 
                        "NewScale = " + finalScale


                        if (chooseJustiHoriz == "width") {
                            var finalScale = CompWidth / LayerWidth * 100 ;
                        } else if (chooseJustiHoriz == "all") {
                            if (isShiftPressed) {
                                if (ratioWidth>ratioheight) {
                                    var finalScale = CompHeight / LayerHeight * 100;
                                } else {
                                    var finalScale = CompWidth / LayerWidth * 100;
                                }
                            } else {
                                if (ratioWidth<ratioheight) {
                                    var finalScale = CompHeight / LayerHeight * 100;
	                                
                                } else {
                                    var finalScale = CompWidth / LayerWidth * 100;
                                    
                                }                            
                            }
                        } else if (chooseJustiHoriz == "height") {
                            var finalScale = CompHeight / LayerHeight * 100 ;
                        }
                        
                        layer.property("scale").setValue([finalScale,finalScale]);   
                }
                

            }
        }
    } else {
        alert("Please select layers");
    }

    if (NumKeyProp !=0) {
       alert (NumKeyProp + " layers have keframes \n Please transform then manually")
    }

    app.endUndoGroup();

}

palette.layout.layout(true);
 
return palette;
}


var myScriptPal = myScript_buildUI(thisObj);

if (myScriptPal != null && myScriptPal instanceof Window){
myScriptPal.center();
myScriptPal.show();
}

}
myScript(this);
}