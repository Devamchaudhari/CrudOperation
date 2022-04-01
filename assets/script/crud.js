// document.querySelector("#myFileInput").addEventListener("change", function () {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         localStorage.setItem("recent-image", reader.result);
//     });
//     reader.readAsDataURL(this.files[0]);
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const recentImageDataUrl = localStorage.getItem("recent-image");
//     if (recentImageDataUrl) {
//         document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
//     }
// });

var url = window.location.href;

var url2 = new URL(url);
var c = url2.searchParams.get("id");


if (c != null) {
    let editdata = JSON.parse(localStorage.getItem('crud'));
    let rowdata = editdata[c];

    document.getElementById('name').value = rowdata['fname'];
    document.getElementById('cname').value = rowdata['comp'];
    document.getElementById('dname').value = rowdata['desig'];
    document.getElementById('salary').value = rowdata['salval'];
    document.getElementById('city').value = rowdata['cityname'];
} else {
    let id = 'no';
}

let id = 'no';

//localStorage.clear();
selectedData();

function manageData(event) {

    document.getElementById('msg').innerHTML = "";
    let name = document.getElementById('name').value.trim();
    let cname = document.getElementById('cname').value.trim();
    let dname = document.getElementById('dname').value.trim();
    let salary = document.getElementById('salary').value.trim();
    let city = document.getElementById('city').value.trim();

    if (name.length == 0 && cname.length == 0 && dname == 0 && salary == 0 && city == 0) {
        event.preventDefault()
        document.getElementById('msg').innerHTML = '*Please enter your name';
        document.getElementById('cmsg').innerHTML = '*Please enter your company name';
        document.getElementById('dmsg').innerHTML = '*Please enter your designation';
        document.getElementById('smsg').innerHTML = '*Please enter your salary';
        document.getElementById('cimsg').innerHTML = '*Please enter your city name';
    } else {
        if (c != null) {
            const temp = JSON.parse(localStorage.getItem('crud'));
            // var data = temp[c];
            temp[c]['fname'] = name;
            temp[c]['comp'] = cname;
            temp[c]['desig'] = dname;
            temp[c]['salval'] = salary;
            temp[c]['cityname'] = city;
            localStorage.setItem('crud', JSON.stringify(temp));
            console.log(data);
            debugger
            // localStorage.setItem('crud', JSON.stringify(data));
            console.log(c);
            debugger

        }
        if (id == 'no') {
            const formdata = {
                fname: name,
                comp: cname,
                desig: dname,
                salval: salary,
                cityname: city
            }

            // if data is already there then this condition will execute
            if (localStorage.getItem('crud')) {
                const temp = JSON.parse(localStorage.getItem('crud'));
                temp.push(formdata);
                localStorage.setItem('crud', JSON.stringify(temp));
            }
            // if data is already there then this condition will execute
            else {
                const temp = [formdata]
                localStorage.setItem('crud', JSON.stringify(temp));
            }
            alert("data added");
        }
        selectedData();
    }

}

function selectedData() {

    const temp = JSON.parse(localStorage.getItem('crud'));

    if (temp != null) {
        let html = ' ';
        for (let k in temp) {
            // html = html + `<tr><td>${temp[k].fname}</td><td>${temp[k].comp}</td><td>${temp[k].desig}</td><td>${temp[k].salval}</td><td>${temp[k].cityname}</td> <td> <a href="javascript:void(1)" onclick="deleteData(${k})">Delete</a> &nbsp; <a href="../html/crud.html?id=${k}"  onclick="editData(${k})" >Edit</a></td></tr>`;
            html = html + `<tr><td>${temp[k].fname}</td><td>${temp[k].comp}</td><td>${temp[k].desig}</td><td>${temp[k].salval}</td><td>${temp[k].cityname}</td> <td> <a href="javascript:void(1)" onclick="deleteData(${k})"><i class="fa fa-trash"></i></a> &nbsp; <a href="../html/crud.html?id=${k}"><i class="fa fa-edit"></i></a></td></tr>`;
        }
        document.getElementById('root').innerHTML = html;

    }

}

function deleteData(rid) {
    let remdata = JSON.parse(localStorage.getItem('crud'));
    remdata.splice(rid, 1);
    localStorage.setItem('crud', JSON.stringify(remdata));
    selectedData();
}

function validation() {

    console.log("validation");
    debugger
    let name = document.getElementById('name').value.trim();
    let cname = document.getElementById('cname').value.trim();
    let dname = document.getElementById('dname').value.trim();
    let salary = document.getElementById('salary').value.trim();
    let city = document.getElementById('city').value.trim();

    if (name.length == 0 && cname.length == 0 && dname == 0 && salary == 0 && city == 0) {

        document.getElementById('msg').innerHTML = '*Please enter your name';
        document.getElementById('cmsg').innerHTML = '*Please enter your company name';
        document.getElementById('dmsg').innerHTML = '*Please enter your designation';
        document.getElementById('smsg').innerHTML = '*Please enter your salary';
        document.getElementById('cimsg').innerHTML = '*Please enter your city name';
    }
    return true;
}