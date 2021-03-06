import HikeModel from './model.js';
import HikesView from './views.js';
  

export default class HikesController {
   constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  
  showHikeList() {
    const hikeList = this.hikeModel.getAllHikes();
    this.hikesView.renderHikeList(this.parentElement, hikeList);
    this.addHikeListener();
  }

  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(
      this.parentElement,
      hike
    ).ontouchend = () => {
      this.showHikeList();
    };
  }
  
  addHikeListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
       child.addEventListener('click', e => {
          this.showOneHike(e.currentTarget.dataset.name);
      });
    });
 
  }

}



 
const myHikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
  myHikesController.addHikeListener();
  
});

