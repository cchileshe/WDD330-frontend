import ToDoModel from "../models/models.js";
import ToDoView from "../view/view.js";


export default class controller{
    constructor() {
        let self = this;
        this.model = new ToDoModel(self);
        this.view = new ToDoView(self);
        this.active_filter = "all";

    }

   createNewTodoItem(todo_description) {
        let new_todo_item = {
            description: todo_description,
            is_active: true,
            was_accomplished: false
        }
        

//         //   add task
// function addTask() {
   
//     const task = new Task();
//     task.title = document.getElementById('title').value;
//     task.category = document.getElementById('category').value;
//     task.dueDate = document.getElementById('dueDate').value;
//     task.doDate = document.getElementById('doDate').value;
//     task.description = document.getElementById('description').value;
//     updateTaskList(task);


//     console.log(task);

// }
// console.log(category);
        this.model.addNewTodoItem(new_todo_item);
        this.model.saveDataOnLocal()
        this.renderToDoList();


    } 

    renderToDoList(filter = this.active_filter) {
        this.view.list_container.innerHTML = "";
        let self = this;
        let list_to_render;

        if (filter == "active") {
            list_to_render = this.model.getActiveTask();
        } else if(filter == "complete" ) {
            list_to_render = this.model.getCompleteTasks();
        } else {
            list_to_render = this.model.data;
        }


        list_to_render.forEach(element => {
            self.view.viewSingleTask(element);   
        }); 
        
        list_to_render.forEach((item) => {
            
            if (item.is_active === true) {
                item.html_element.querySelector(".delete_button").addEventListener("click", () => {
                    self.deleteToDoItem(item);
                    self.renderToDoList();
                });

                item.html_element.querySelector(".check_or_not").addEventListener("click", () => {

                    if (item.was_accomplished === true) {
                        item.was_accomplished = false;
                    } else {
                        item.was_accomplished = true;
                    }

                    self.view.markComplete(item);
                    self.model.saveDataOnLocal();
                    this.leftTaskCounter();
                    this.renderToDoList();
                    
                });
            }
            
        });

        this.leftTaskCounter();
        this.addLogicToFilterBar();
  
    }

    deleteToDoItem(item) {
        this.model.deleteObj(item);
        //item.is_active = false;
        item.html_element.remove();
        this.model.saveDataOnLocal();
    }

    leftTaskCounter() {
        let n_left_tasks = this.model.leftTaskCounter();
        this.view.tasksCounter(n_left_tasks);
    }

    addLogicToFilterBar() {
        let self = this;

        document.querySelector(".all_item").addEventListener("click", () => {

            document.querySelector(".all_item").classList.add("filter_item_active");
            // Removing the styles from inactive filters
            document.querySelector(".complete_item").classList.remove("filter_item_active");
            document.querySelector(".active_item").classList.remove("filter_item_active");

            self.active_filter = "all";
            self.renderToDoList();
            

        });

        document.querySelector(".complete_item").addEventListener("click", () => {

            document.querySelector(".complete_item").classList.add("filter_item_active");
            // Removing the styles from inactive filters
            document.querySelector(".all_item").classList.remove("filter_item_active");
            document.querySelector(".active_item").classList.remove("filter_item_active");


            self.active_filter = "complete";

            self.renderToDoList(); 
        });

        document.querySelector(".active_item").addEventListener("click", () => {

            document.querySelector(".active_item").classList.add("filter_item_active");
            // Removing the styles from inactive filters
            document.querySelector(".complete_item").classList.remove("filter_item_active");
            document.querySelector(".all_item").classList.remove("filter_item_active");


            self.active_filter = "active";
            self.renderToDoList();
        });


    }
    
    
}