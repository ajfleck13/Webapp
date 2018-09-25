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

    oldname.val("");
    let entry = getEmployeeEntry(oldname.val());

    if(!entry)
    {
        return;
    }

    let content = $(".content");
    content.empty();

    let newname = $("#updatenameend").val();
    let newoffice = $("#updateofficenumberend").val();
    let newnumber = $("#updatephonenumberend").val();

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
                employeeList.slice(i, 1);
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

const viewLayout = function() {
    document.getElementById('addbar').style.display = 'none';
    document.getElementById('verifybar').style.display = 'none';
    document.getElementById('updatebar').style.display = 'none';
    document.getElementById('deletebar').style.display = 'none';
    renderEmployeeList();
}

const addLayout = function() {
    document.getElementById('addbar').style.display = 'block';
    document.getElementById('verifybar').style.display = 'none';
    document.getElementById('updatebar').style.display = 'none';
    document.getElementById('deletebar').style.display = 'none';
    renderEmployeeList();
}

const verifyLayout = function() {
    document.getElementById('addbar').style.display = 'none';
    document.getElementById('verifybar').style.display = 'block';
    document.getElementById('updatebar').style.display = 'none';
    document.getElementById('deletebar').style.display = 'none';
    renderEmployeeList();
}

const updateLayout = function() {
    document.getElementById('addbar').style.display = 'none';
    document.getElementById('verifybar').style.display = 'none';
    document.getElementById('updatebar').style.display = 'block';
    document.getElementById('deletebar').style.display = 'none';
    renderEmployeeList();
}

const deleteLayout = function() {
    document.getElementById('addbar').style.display = 'none';
    document.getElementById('verifybar').style.display = 'none';
    document.getElementById('updatebar').style.display = 'none';
    document.getElementById('deletebar').style.display = 'block';
    renderEmployeeList();
}

$("#navview").on('click', viewLayout);
$("#navadd").on('click', addLayout);
$("#navverify").on('click', verifyLayout);
$("#navupdate").on('click', updateLayout);
$("#navdelete").on('click', deleteLayout);

viewLayout();
renderEmployeeList();