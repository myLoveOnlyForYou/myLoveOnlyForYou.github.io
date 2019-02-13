// я ж сказал, что умным тут не рады
$("#button").click(function(){
    var flag = document.querySelector("input").value;
    var true_flag_tgl = "200817";
    var true_flag_kate = "ЛюблюКатю";
    if (flag === true_flag_tgl)
        success();
    else if (flag === true_flag_kate)
        kate();
    else
        error();
})

function error(){
    try{
        $("#error").remove();
        $("#last-part").remove();
        $(".a").remove();
    } catch(e){
        console.log(e);
    }
    setTimeout(function(){ $("#wrapper").append("<div id='error'>wrong flag</div>") }, 500);
}

function kate(){
    try{
        $("#error").remove();
        $("#last-part").remove();
        $(".a").remove();
    } catch(e){
        console.log(e);
    }
    setTimeout(function(){$("#wrapper").append(
        '<div id="last-part"><div class="success silly">silly</div><div class="success girls">girls</div><div class="success how">how</div><div class="success i">i</div><div class="success fucking">fucking</div><div class="success love">love</div><div class="success you">you</div></div><div class="a">Ты супер! А теперь отправь эту ссылку своей лучшей подруге. Ей она очень пригодится, чтобы получить подарок) А заодно заскринь это сообщение, пришли его мне и набор стикеров, который бы ты хотела получить</div>'
    )}, 500);
}

function success(){
    try{
        $("#error").remove();
        $("#last-part").remove();
        $(".a").remove();
    } catch(e){
        console.log(e);
    }
    setTimeout(function(){$("#wrapper").append(
        '<div id="last-part"><div class="success silly">silly</div><div class="success girls">girls</div><div class="success how">how</div><div class="success i">i</div><div class="success fucking">fucking</div><div class="success love">love</div><div class="success you">you</div></div><div class="a">Супер! А теперь заскриньте это сообщение, скиньте мне и выберите один стикер-пак, который я подарю одной из вас)</div>'
    )}, 500);

}