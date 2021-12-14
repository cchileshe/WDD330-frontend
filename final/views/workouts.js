import * as workouts from '../model/workouts';

function viewTasks(){
    const taskView = document.getElementById('taskView');

    categoryList.forEach(category =>{
        let singleTask = document.createElement('div');
        singleTask.classList.add(category.color, 'categoryList');

        let header = document.createElement('h2');
        
        let hr =  document.createElement('hr');
        hr.className = 'hr';
        
        let ulElment = document.createElement('ul');
        let items = taskList.filter(task => task.category == category.id);
        if(items.length < 1) {
            return;
        }

        items.forEach(item => {
            let liElement = document.createElement('li');
            liElement.className = 'checkbox';
            //create check box
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = category.color+'-checkmark';


            let title = document.createElement('span');
            title.innerHTML = item.title;   

            liElement.appendChild(checkbox);
            liElement.appendChild(title)
            liElement.appendChild(taskActions);
            ulElment.appendChild(liElement);
        });

       

        header.innerHTML = category.name;
        singleTask.appendChild(header);
        singleTask.appendChild(hr);
        singleTask.appendChild(ulElment);
        taskView.appendChild(singleTask);
    });

   
}

