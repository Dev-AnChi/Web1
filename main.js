function Nhap(input)
{
    if(input == '0')
        document.getElementById("hienthi_kq").value += '0';
    else if(input == '1')
        document.getElementById("hienthi_kq").value += '1';
    else if(input == '2')
        document.getElementById("hienthi_kq").value += '2';
    else if(input == '3')
        document.getElementById("hienthi_kq").value += '3';
    else if(input == '4')
        document.getElementById("hienthi_kq").value += '4';
    else if(input == '5')
        document.getElementById("hienthi_kq").value += '5';
    else if(input == '6')
        document.getElementById("hienthi_kq").value += '6';
    else if(input == '7')
        document.getElementById("hienthi_kq").value += '7';
    else if(input == '8')
        document.getElementById("hienthi_kq").value += '8';
    else if(input == '9')
        document.getElementById("hienthi_kq").value += '9';
    else if(input == '+')
        document.getElementById("hienthi_kq").value += '+';
    else if(input == '-')
        document.getElementById("hienthi_kq").value += '-';
    else if(input == '*')
        document.getElementById("hienthi_kq").value += '*';
    else if(input == '/')
        document.getElementById("hienthi_kq").value += '/';
}
function Reset()
{
    document.getElementById("hienthi_kq").value = null;
}
function Ketqua()
{
    var s = eval(document.getElementById("hienthi_kq").value);
    document.getElementById("hienthi_kq").value = s;
}