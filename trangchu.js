var arr_hinh = [
    "/Đồ án 2/img/slide.jpg",
    "/Đồ án 2/img/slide2.jpg",
    "/Đồ án 2/img/slide3.jpg",
    "/Đồ án 2/img/slide4.jpg",
    
    
]
var index = 0;
function next() {
    
    index++;
    if (index >= arr_hinh.length) index = 0;
    var hinh = document.getElementById("hinh1");
    hinh.src = arr_hinh[index];
    // document.getElementById("dem").innerHTML = index + "/" + 3;
}

function prev() {
    index--;
    if (index < 0) index = arr_hinh.length - 1;
    var hinh = document.getElementById("hinh1");

    document.getElementById("hinh1").src = arr_hinh[index];
    // document.getElementById("dem").innerHTML = index + "/" + 3;
}

function xoa(){
    alert("Bạn chắc chắn muốn xóa không");
}


function changeImage1(id){
   let imagePath= document.getElementById(id).getAttribute('src');
   document.getElementById('hinh1').setAttribute('src',imagePath)
   
}
function changeImage(id){
    let imagePath= document.getElementById(id).getAttribute('src');
    document.getElementById('hinh').setAttribute('src',imagePath)
    
 }
function openCity(evt, cityName) {
    
    var i, tabcontent, tablinks;

    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

   
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

   
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addToCart(item) {
    // debugger;
    item.quantity = 1;
    console.log(item.quantity);
    var list;
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                x.quantity += 1;
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã thêm giỏ hàng thành công!");
}
var list = JSON.parse(localStorage.getItem('cart'));

