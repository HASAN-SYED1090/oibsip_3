window.addEventListener('load', function() {
    const form = document.querySelector("#new-Chore");
    const input = document.querySelector("#Input");
    const listEl = document.querySelector("#tasks");
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const task = input.value;
  
      const taskEl = document.createElement('div');
      taskEl.classList.add('task');
  
      const taskContentEl = document.createElement('div');
      taskContentEl.classList.add('content');
  
      taskEl.appendChild(taskContentEl);
  
      const taskInputEl = document.createElement('input');
      taskInputEl.classList.add('text');
      taskInputEl.type = 'text';
      taskInputEl.value = task;
      taskInputEl.setAttribute('readonly', 'readonly');
  
      taskContentEl.appendChild(taskInputEl);
  
      const taskActionsEl = document.createElement('div');
      taskActionsEl.classList.add('actions');
  
      const taskEditEl = document.createElement('button');
      taskEditEl.classList.add('edit');
      taskEditEl.innerText = 'Edit';
  
      const taskDeleteEl = document.createElement('button');
      taskDeleteEl.classList.add('delete');
      taskDeleteEl.innerText = 'Delete';
  
      taskActionsEl.appendChild(taskEditEl);
      taskActionsEl.appendChild(taskDeleteEl);
  
      taskEl.appendChild(taskActionsEl);
  
      listEl.appendChild(taskEl);
  
      input.value = '';
  
      taskEditEl.addEventListener('click', function(e) {
        if (taskEditEl.innerText.toLowerCase() == "edit") {
          taskEditEl.innerText = "Save";
          taskInputEl.removeAttribute("readonly");
          taskInputEl.focus();
        } else {
          taskEditEl.innerText = "Edit";
          taskInputEl.setAttribute("readonly", "readonly");
        }
      });
  
      taskDeleteEl.addEventListener('click', function(e) {
        listEl.removeChild(taskEl);
      });
    });
  });
  