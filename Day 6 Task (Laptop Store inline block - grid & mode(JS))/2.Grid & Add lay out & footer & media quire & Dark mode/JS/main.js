var dark = 0;
function goDark()
{
    if(dark==0)
    {
        document.getElementById("darkBtn").innerHTML="Light Mode";
        document.getElementById("mybody").style.backgroundColor="lightgray";
        dark = 1;
    }
    else if (dark==1)
    {
        document.getElementById("darkBtn").innerHTML="Dark Mode";
        document.getElementById("mybody").style.backgroundColor="white";
        dark = 0;
    }
}
