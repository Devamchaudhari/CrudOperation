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

var id = ' ';

if (c != null) {
    let editdata = JSON.parse(localStorage.getItem('crud'));
    let rowdata = editdata[c];

    document.getElementById('name').value = rowdata['fname'];
    document.getElementById('cname').value = rowdata['comp'];
    var gen = document.getElementsByName('gender');
    var rate_value;
    for (var i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            rate_value = gen[i].value;
        }
    }
    console.log(rate_value);
    debugger
    var dname = document.getElementsByName('checkbox-inp');
    var d_value;
    for (var i = 0; i < dname.length; i++) {
        if (dname[i].checked) {
            d_value = dname[i].value;
        }
    }

    document.getElementById('salary').value = rowdata['salval'];
    document.getElementById('city').value = rowdata['cityname'];
} else {
    this.id = 'no';
}

// let id = 'no';

//localStorage.clear();
selectedData();

function manageData(event) {
    debugger
    document.getElementById('msg').innerHTML = "";
    let name = document.getElementById('name').value.trim();
    let cname = document.getElementById('cname').value.trim();
    var rates = document.getElementsByName('gender');

    var rate_value;
    for (var i = 0; i < rates.length; i++) {
        if (rates[i].checked) {
            rate_value = rates[i].value;
        }
    }
    let gender = rate_value;

    var dname = document.getElementsByClassName('checkbox-input');
    var d_value = new Array();
    for (var i = 0; i < dname.length; i++) {
        if (dname[i].checked) {
            d_value.push(dname[i].value);
        }
    }
    let designation = d_value.join(",");
    console.log(designation);
    debugger
    let salary = document.getElementById('salary').value.trim();
    let city = document.getElementById('city-name').value;


    if ((name == "" && cname == "" && gender == undefined && designation.length == 0 && salary == "" && city == '-1') || (name == "" || cname == "" || gender == undefined || designation.length == 0 || salary == "" || city == '-1')) {
        event.preventDefault()
        debugger
        document.getElementById('msg').innerHTML = '*Please enter your name';
        document.getElementById('cmsg').innerHTML = '*Please enter your company name';
        document.getElementById('gmsg').innerHTML = '*Please select gender';
        document.getElementById('dmsg').innerHTML = '*Please select your designation';
        document.getElementById('smsg').innerHTML = '*Please enter your salary';
        document.getElementById('cimsg').innerHTML = '*Please enter your city name';

        console.log("No Enter Value");

        debugger;
    } else {
        if (c != null) {
            const temp = JSON.parse(localStorage.getItem('crud'));
            // var data = temp[c];
            temp[c]['fname'] = name;
            temp[c]['comp'] = cname;
            temp[c]['gen'] = gender;
            temp[c]['desig'] = designation;
            temp[c]['salval'] = salary;
            temp[c]['cityname'] = city;
            localStorage.setItem('crud', JSON.stringify(temp));
            console.log(temp);
            debugger
            // localStorage.setItem('crud', JSON.stringify(data));
            console.log(c);
            debugger

        }
        if (id == 'no') {
            const formdata = {
                fname: name,
                comp: cname,
                gen: gender,
                desig: designation,
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
            html = html + `<tr><td>${temp[k].fname}</td><td>${temp[k].gen}</td><td>${temp[k].comp}</td><td>${temp[k].desig}</td><td>${temp[k].salval}</td><td>${temp[k].cityname}</td> <td> <a href="javascript:void(1)" onclick="deleteData(${k})"><i class="fa fa-trash"></i></a> &nbsp; <a href="../html/crud.html?id=${k}"><i class="fa fa-edit"></i></a></td></tr>`;
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

    document.getElementById('msg').innerHTML = "";
    let name = document.getElementById('name').value.trim();
    let cname = document.getElementById('cname').value.trim();
    let genm = document.getElementById('genderm').checked;
    let genf = document.getElementById('genderf').checked;
    console.log(genf, "gender", genm);
    debugger
    var ds = document.getElementsById('desig').checked;
    var frontd = document.getElementsById('fd').checked;
    var backd = document.getElementsById('bd').checked;
    console.log(desig, frontd, backd, "dname");
    debugger
    let salary = document.getElementById('salary').value.trim();
    let city = document.getElementById('city-name').value;
    console.log(city);
    debugger
    if (name == ' ' && cname == ' ' && (genm == ' ' || genf == ' ') && (ds == ' ' || frontd == ' ' || backd == ' ') && salary == 0 && city == -1) {
        console.log('condition');
        document.getElementById('msg').innerHTML = '*Please enter your name';
        document.getElementById('cmsg').innerHTML = '*Please enter your company name';
        document.getElementById('gmsg').innerHTML = '*Please select gender';
        document.getElementById('dmsg').innerHTML = '*Please select your designation';
        document.getElementById('smsg').innerHTML = '*Please enter your salary';
        document.getElementById('cimsg').innerHTML = '*Please enter your city name';
        return false
    }

}