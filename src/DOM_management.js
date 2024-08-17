import { projects_array } from './content.js'
import moment from 'moment';

console.log('printed njnj')
const contentDiv = document.getElementById('main-content');

document.addEventListener('DOMContentLoaded', () => { 
    
    // const newParagraph = document.createElement('p');
    // newParagraph.textContent = 'Test work i3rnvbi3rbvn3irncvb3i';
    // contentDiv.appendChild(newParagraph);

    print_project_cards();

    
});

function print_project_cards(){ 
    projects_array.forEach(project => {
        const projectCard = document.createElement('div')
        projectCard.classList.add('project-card');

        const topRow = document.createElement('div')
        topRow.classList.add('card-top-row')
        projectCard.appendChild(topRow)

        const topRowLeft = document.createElement('div')
        topRowLeft.classList.add('top-left')
        topRow.appendChild(topRowLeft)

        const topRowRight = document.createElement('div')
        topRowRight.classList.add('top-right')
        topRow.appendChild(topRowRight)

        const title = document.createElement('h1')
        title.textContent = project.title
        topRowLeft.appendChild(title);

        const due_date = document.createElement('div')
        due_date.textContent = moment(project.dueDate).format('DD/MM/YYYY');
        due_date.classList.add('top-right-item')
        topRowRight.appendChild(due_date)

        const priority_level = document.createElement('div')
        priority_level.textContent = project.priority
        priority_level.classList.add('top-right-item')
        topRowRight.appendChild(priority_level)

        contentDiv.appendChild(projectCard);
    });
}