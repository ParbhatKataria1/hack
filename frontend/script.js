const data_container = document.getElementById('data');
const button = document.getElementById('button');
const loading = document.getElementById('loading');
button.addEventListener('click', async()=>{
    loading.innerHTML = 'Loading...'
    let data = await fetch('https://hack1.onrender.com');
    data = await data.json();
    console.log(data);
    loading.innerHTML = ''
    createtable(data);
})

function createtable(data){
    let html = `<table class="table"  cellpadding="8" >
    <thead style="width: 90%;">
        <th>Team Name</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Number</th>
        <th >City</th>
        <th >URL</th>
    </thead>
    <tbody >
        ${data.map((el)=>{
            return `<tr>
            <td>${el.team_name}</td>
            <td>${el.full_name}</td>
            <td>${el.email}</td>
            <td>${el.number}</td>
            <td>${el.url}</td>
            <th>${el.url}</th>
            
        </tr>`
        }).join("")}
    </tbody>
    
</table>`
data_container.innerHTML = html;
}