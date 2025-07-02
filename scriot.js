function addTask(){
    let input=document.getElementById('task-input');
    let task=input.value.trim();
    if(task=='') return;
    let li=document.createElement('li');
    let span=document.createElement('span');
    span.textContent=task;
    let deletebtn=document.createElement('button');
    deletebtn.style.marginLeft="10px";
    deletebtn.textContent="❌";
    span.addEventListener('click',function(){
        span.classList.toggle('completed');
    });
    deletebtn.addEventListener('click',function(){
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(deletebtn);
    document.getElementById('task-list').appendChild(li);
    input.value='';

}