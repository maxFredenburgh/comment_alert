//comment_alert

//list cookies
function listCookies(){
    var x = getCookie("Drupal.visitor.notify_node");
    document.getElementById('cookieList').innerHTML=x;
    x=x.split('%3B')
    document.getElementById('cookieList').innerHTML="";
    for (var i=0;i<x.length;i++){
        document.getElementById('cookieList').innerHTML+=x[i]+"<br>";
    }
}
//unfollow page
function deleteCookie(nid,comment_count){
    var x = getCookie("Drupal.visitor.notify_node");
    var res;
    if(x.includes("%3B"+nid+"%3A"+comment_count+"%3B")){
        res = x.replace("%3B"+nid+"%3A"+comment_count+"%3B","%3B");

    }else if(x.includes(nid+"%3A"+comment_count+"%3B")){
        res = x.replace(nid+"%3A"+comment_count+"%3B","");

    }else if(x.includes("%3B"+nid+"%3A"+comment_count)){
        res = x.replace("%3B"+nid+"%3A"+comment_count,"");

    }else{
        //document.cookie="Drupal.visitor.notify_node=";
        res="; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    res="Drupal.visitor.notify_node="+res+"; path=/";
    document.cookie=res;
    //document.cookie = "Drupal.visitor.notify_node=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    //document.cookie = "Drupal.visitor.notify_node=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    //document.getElementById('cookieList').innerHTML=document.cookie
    //document.cookie="Drupal.visitor.notify_node="+nid+"%3A"+comment_count+"; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    //document.getElementById('cookieList').innerHTML="Unsubscribed from this thread";
    window.location.reload(true);
}

function dismissAlert(nid,alert_cc,new_cc){
    var divId="alert"+nid;
    var x=getCookie("Drupal.visitor.notify_node");
    var res;

    if(x.includes(nid+"%3A"+alert_cc)){
        res=x.replace(nid+"%3A"+alert_cc,nid+"%3A"+new_cc);
    }
    document.cookie="Drupal.visitor.notify_node="+res+"; path=/";
    document.getElementById(divId).innerHTML="";

}

function removeCookies(){
    document.cookie="Drupal.visitor.notify_node=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = document.cookie;
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}