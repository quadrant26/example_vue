export const filterTime = (time) =>{
    if(time){
        var oDate = new Date();
        oDate.setTime(time);

        var y = oDate.getFullYear();
        var m = oDate.getMonth() + 1;
        var d  = oDate.getHours();

        var h = oDate.getHours();
        var min = oDate.getMinutes();
        var s = oDate.getSeconds();

        return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + s;
    }
}