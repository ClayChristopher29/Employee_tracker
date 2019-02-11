const printAllInfo = () => {
    document.querySelector("#employeeDropBox").innerHTML = "";
        getAllInfo()
            .then(allinfo => {
                allinfo.forEach(singleInfo => {
                    document.querySelector("#employeeDropBox").innerHTML += buildSingleInfo(singleInfo)
                })
            }
            )
}