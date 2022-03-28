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

let id = "";
// localStorage.clear();

function manageData(event) {
    // console.log(event, 'evnt');
    // event.preventDefault();
    console.log("manage data");
    // localStorage.setItem('data', JSON.stringify(data_fullname));
    let fullname = document.getElementById('fullname').value;
    let male = document.getElementById('male').value;
    let female = document.getElementById('female').value;
    let companyname = document.getElementById('companyname').value;
    let designation = document.getElementById('designation').value;
    let salary = document.getElementById('salary').value;
    let city = document.getElementById('city').value;

    localStorage.setItem('data', `[Fullname: ${fullname}, Gender:${male}, Gender:${female}, Company:${companyname}, Designation:${designation}, Salary:${salary}, City:${city}]`);

    console.log(fullname, 'full');
    debugger
    // let male = document.getElementById('male').value;
    // let female = document.getElementById('female').value;
    // let companyname = document.getElementById('companyname').value;
    // let designation = document.getElementById('designation').value;
    // let salary = document.getElementById('salary').value;
    // let city = document.getElementById('city').value;
    // if (fullname == ' ') {
    //     document.getElementById('msg').innerHTML = 'Please enter your name';
    // } else {
    //     if (id == ' ') {
    //         let arr = JSON.parse(localStorage.getItem('data'));
    //         if (arr == null) {
    //             let data_fullname = [fullname];
    //             let data_male = [male];
    //             let data_female = [female];
    //             let data_companyname = [companyname];
    //             let data_designation = [designation];
    //             let data_salary = [salary];
    //             let data_city = [city];
    //             localStorage.setItem('data', JSON.stringify(data_fullname));
    // localStorage.setItem('data', JSON.stringify(data_fullname, data_male, data_female, data_companyname, data_designation, data_salary, data_city));
    // } else {
    //     arr.push(fullname);
    // arr.push(data_fullname, data_male, data_female, data_companyname, data_designation, data_salary, data_city);
    // localStorage.setItem('data', JSON.stringify(arr));
    // }
    // }
    // }
}



// function deleteData() {

// }

// function selectData() {

// }

// function editData() {

// }

// function deleteData() {

// }