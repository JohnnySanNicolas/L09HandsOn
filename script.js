let getNameInfo = new XMLHttpRequest();
getNameInfo.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let nameInfo = JSON.parse(this.responseText);
        document.getElementById("fullName").innerHTML = nameInfo.name;
        document.getElementById("dayOfBirth").innerHTML = nameInfo.birthday;
    }
};
getNameInfo.open("GET", "einstein.json", true);
getNameInfo.send();

function getBioInfo(){
    const requestBioInfo = new XMLHttpRequest();
    requestBioInfo.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let bioInfo = JSON.parse(this.responseText);
            document.getElementById("bioInfoArea").innerHTML = bioInfo.bio;
        }
    };
    requestBioInfo.open("GET", "einstein.json", true);
    requestBioInfo.send();
};