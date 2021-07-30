update();
function getupdate() {
    console.log("Added");
    tit = document.getElementById('title').value;
    desc = document.getElementById('txt').value;
    dte = document.getElementById('date').value;
    if(localStorage.getItem('help') == null)
    {
        var arr = [];
        arr.push([tit,desc,dte]);
        localStorage.setItem('help',JSON.stringify(arr));
    }
    else
    {
        prev = localStorage.getItem('help');
        arr = JSON.parse(prev);
        arr.push([tit,desc,dte]);
        localStorage.setItem('help',JSON.stringify(arr));
    }
    update();
    erasearea();
}
function update() {
    if(localStorage.getItem('help') == null)
    {
        var arr = [];
        localStorage.setItem('help',JSON.stringify(arr));
    }
    else
    {
        prev = localStorage.getItem('help');
        arr = JSON.parse(prev);
    }
    TBody = document.getElementById("TableBody");
    let str = "";
    arr.forEach((element,index)=>{
        str += `
            <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td><button class="btn" onclick="deleted(${index})">Remove</button></td>
            </tr>
        `
    });
    TBody.innerHTML = str;
}
function deleted(itemidx)
{
    console.log("Delete");
    prev = localStorage.getItem('help');
    arr = JSON.parse(prev);
    arr.splice(itemidx,1)
    localStorage.setItem('help',JSON.stringify(arr));
    update();
}
function clearall() {
    if(confirm("This will delete all your data")){
        localStorage.clear();
        update();

    }
}
function erasearea()
{
    tit = document.getElementById('title').value = "";
    desc = document.getElementById('txt').value = "";
    dte = document.getElementById('date').value = "";
}
function searching()
{
    //to implement search box
}