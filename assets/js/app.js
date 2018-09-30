function renderEmployeeList () {
    let content = $(".content");
    content.empty();
    for(let i = 0; i < employeeList.length; i++)
    {
        renderEmployeeEntry(employeeList[i]);
    }
}

function renderEmployeeEntry(entry) {
    let content = $(".content");
    content.append(`<div class="element">
    <p>${entry.name}</p>
    <p>${entry.officeNum}</p>
    <p>${entry.phoneNum}</p>
    </div>`);
}

function clearEmployeeList () {
    let content = $(".content");
    content.empty();
}

function getEmployeeEntry (namevalue) {
    for(let i = 0; i < employeeList.length; i++)
    {
        if(namevalue === employeeList[i].name)
        {
            return employeeList[i];
        }
    }

    return false;
}

let addEmployee = function() {
    let name = $("#addname");
    let officeNum = $("#addofficenumber");
    let phoneNum = $("#addphonenumber");

    if(name.val() && officeNum.val() && phoneNum.val()){
        employeeList.push(
            {
                name: name.val(),
                officeNum: officeNum.val(),
                phoneNum: phoneNum.val()
            }
        );
        name.val("");
        officeNum.val("");
        phoneNum.val("");
        renderEmployeeList();
    }
}

$("#Addcomplete").on('click', addEmployee);

let verifyEmployee = function () {
    let name = $("#verifyname");
    let content = $(".content");
    content.empty();
    let namevalue = name.val();
    if(namevalue)
    {
        let entry = getEmployeeEntry(namevalue)
        if(entry)
        {
            content.append(`<h1>Entry with employee name ${namevalue} located.</h1>`);
            renderEmployeeEntry(entry);
        }
        else
        {
            content.append(`<h1>No employee found with name ${namevalue}.</h1>`);
        }
        name.val("");
    }
}

$("#Verifycomplete").on('click', verifyEmployee);

let updateEmployee = function () {
    let oldname = $("#updatenamestart");

    if(!oldname.val())
    {
        return;
    }

    let entry = getEmployeeEntry(oldname.val());
    oldname.val("");

    if(!entry)
    {
        return;
    }

    let content = $(".content");
    content.empty();

    let newname = $("#updatenameend");
    let newoffice = $("#updateofficenumberend");
    let newnumber = $("#updatephonenumberend");

    if(newname.val())
    {
        entry.name = newname.val();
        newname.val("");
    }

    if(newoffice.val())
    {
        entry.officeNum = newoffice.val();
        newoffice.val("");
    }

    if(newnumber.val())
    {
        entry.newnumber = newnumber.val();
        newnumber.val("");
    }

    content.append(`<h1>Updated entry for employee ${oldname.val()}!</h1>`);
    renderEmployeeEntry(entry);
}

$("#Updatecomplete").on('click', updateEmployee);

let deleteEmployee = function () {
    let name = $("#deletename");
    let content = $(".content");
    content.empty();
    let namevalue = name.val();
    if(namevalue)
    {
        for(let i = 0; i < employeeList.length; i++)
        {
            if(namevalue === employeeList[i].name)
            {
                employeeList.splice(i, 1);
                console.log(i);
                content.append(`<h1>Deleted entry with employee name ${namevalue}</h1>`);
                name.val("");
                return;
            }
        }
        content.append(`<h1>No employee found with name ${namevalue}</h1>`);
        name.val("");
    }
}

$("#Deletecomplete").on('click', deleteEmployee);

const resetLayout = function() {
    document.getElementById('addbar').style.display = 'none';
    document.getElementById('verifybar').style.display = 'none';
    document.getElementById('updatebar').style.display = 'none';
    document.getElementById('deletebar').style.display = 'none';
    document.getElementById('navview').style.color = 'white';
    document.getElementById('navadd').style.color = 'white';
    document.getElementById('navverify').style.color = 'white';
    document.getElementById('navupdate').style.color = 'white';
    document.getElementById('navdelete').style.color = 'white';
    renderEmployeeList();
}

const viewLayout = function() {
    resetLayout();
    document.getElementById('navview').style.color = 'yellow';
}

const addLayout = function() {
    resetLayout();
    document.getElementById('addbar').style.display = 'block';
    document.getElementById('navadd').style.color = 'yellow';
}

const verifyLayout = function() {
    resetLayout();
    document.getElementById('verifybar').style.display = 'block';
    document.getElementById('navverify').style.color = 'yellow';
}

const updateLayout = function() {
    resetLayout();
    document.getElementById('updatebar').style.display = 'block';
    document.getElementById('navupdate').style.color = 'yellow';
}

const deleteLayout = function() {
    resetLayout();
    document.getElementById('deletebar').style.display = 'block';
    document.getElementById('navdelete').style.color = 'yellow';
}

$("#navview").on('click', viewLayout);
$("#navadd").on('click', addLayout);
$("#navverify").on('click', verifyLayout);
$("#navupdate").on('click', updateLayout);
$("#navdelete").on('click', deleteLayout);

viewLayout();
renderEmployeeList();