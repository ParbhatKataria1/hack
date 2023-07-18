const data_container = document.getElementById('data');
const button = document.getElementById('button');
const loading = document.getElementById('loading');
button.addEventListener('click', async()=>{
    loading.innerHTML = 'Loading...'
    let data = await fetch('http://localhost:4500/');
    data = await data.json();
    console.log(data);
    loading.innerHTML = ''
    createtable(data);
})

function createtable(data){
    let html = `<table style="font-size: large;"  border="1" cellpadding="4" >
    <thead>
        <th>Team Name</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>City</th>
        <th>URL</th>
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