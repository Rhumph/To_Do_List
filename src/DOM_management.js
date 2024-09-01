import { projects_array } from './content.js'
import moment from 'moment';
import { to_do_ticket } from './index.js';

console.log('printed njnj')
const contentDiv = document.getElementById('main-content');

document.addEventListener('DOMContentLoaded', () => {
    print_project_cards();
});

document.addEventListener('click', function (event) {
    const projectButton = event.target.closest('.projects-btn-return')
    if (projectButton) {
        clearMainContent()
        print_project_cards()
    }
})

contentDiv.addEventListener('click', function (event) {
    // Use closest to ensure the target is a project-card or its descendant
    const projectCard = event.target.closest('.project-card');
    if (projectCard) {
        const projectIndexElement = projectCard.querySelector('.project-index');
        const projectIndex = projectIndexElement.textContent;
        console.log(projectIndex);
        showProject(projectIndex);

    }
});

contentDiv.addEventListener('click', function (event) {

    const addTicketBtn = event.target.closest('.projects-btn')
    const detailedTile = document.getElementsByClassName('.project-index')

    if (addTicketBtn) {

        // const projectIndexElement = detailedTile.querySelector('.project-index');
        const projectIndex = detailedTile.textContent;
        addTicketForm(projectIndex)
    }
}
)


function print_project_cards() {
    projects_array.forEach(project => {
        const projectCard = document.createElement('div')
        projectCard.classList.add('project-card');
        // projectCard.setAttribute('data-index', projects_array.indexOf);

        const topRow = document.createElement('div')
        topRow.classList.add('card-top-row')
        projectCard.appendChild(topRow)

        const bottomRow = document.createElement('div')
        bottomRow.classList.add('card-bottom-row')
        projectCard.appendChild(bottomRow)

        const bottomRowLeft = document.createElement('div')
        bottomRowLeft.classList.add('bottom-row-left')
        bottomRow.appendChild(bottomRowLeft)

        const bottomRowRight = document.createElement('div')
        bottomRowRight.classList.add('bottom-row-right')
        bottomRow.appendChild(bottomRowRight)

        const description = document.createElement('p')
        description.textContent = project.description
        description.classList.add('description-box')
        bottomRowLeft.appendChild(description)

        const ticketNumberBox = document.createElement('div')
        ticketNumberBox.textContent = "No.of Tickets"
        ticketNumberBox.classList.add('ticket-number-box')
        bottomRowRight.appendChild(ticketNumberBox)

        const completedStatus = document.createElement('div')
        completedStatus.textContent = project.completed_status
        completedStatus.classList.add('completed-status')
        bottomRowRight.appendChild(completedStatus)

        const ticket_numbers = document.createElement('h3')
        ticket_numbers.textContent = project.project_items.length
        ticket_numbers.classList.add('ticket-numbers')
        ticketNumberBox.appendChild(ticket_numbers)


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

        const invisibleIndex = document.createElement('div');
        invisibleIndex.classList.add('project-index');
        invisibleIndex.style.display = 'none';
        invisibleIndex.textContent = project.index;
        projectCard.appendChild(invisibleIndex);

        contentDiv.appendChild(projectCard);
    });
}

function showProject(projectIndex) {
    clearMainContent();

    // console.log(projectIndex + "heyhey")
    const highlightedProject = projects_array[projectIndex];

    const addTicketBtn = document.createElement('button')
    addTicketBtn.textContent = "Add Ticket"
    addTicketBtn.classList.add('projects-btn')
    contentDiv.appendChild(addTicketBtn)

    const returnToProjectsBtn = document.createElement('button');
    returnToProjectsBtn.classList.add('projects-btn-return');
    returnToProjectsBtn.textContent = "Return to All Projects";
    contentDiv.insertBefore(returnToProjectsBtn, contentDiv.firstChild);

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');
    contentDiv.appendChild(projectContent);

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = highlightedProject.title;
    projectContent.appendChild(projectTitle);

    const detailTile = document.createElement('div')
    detailTile.classList.add('detail-tile')
    projectContent.append(detailTile)

    const projectDescription = document.createElement('p');
    projectDescription.textContent = highlightedProject.description;
    projectDescription.classList.add('project-description');
    projectContent.appendChild(projectDescription);

    const projectDueDate = document.createElement('div');
    projectDueDate.textContent = `Due Date: ${moment(highlightedProject.dueDate).format('DD/MM/YYYY')}`;
    projectDueDate.classList.add('project-due-date');
    detailTile.appendChild(projectDueDate);

    const projectPriority = document.createElement('div');
    projectPriority.textContent = `Priority: ${highlightedProject.priority}`;
    projectPriority.classList.add('project-priority');
    detailTile.appendChild(projectPriority);

    const projectStatus = document.createElement('div');
    projectStatus.textContent = `Status: ${highlightedProject.completed_status}`;
    projectStatus.classList.add('project-status');
    detailTile.appendChild(projectStatus);

    const ticketNumbers = document.createElement('div');
    ticketNumbers.textContent = `Number of Tickets: ${highlightedProject.project_items.length}`;
    ticketNumbers.classList.add('ticket-numbers');
    detailTile.appendChild(ticketNumbers);

    const invisibleIndex = document.createElement('div');
    invisibleIndex.classList.add('project-index');
    invisibleIndex.style.display = 'none';
    invisibleIndex.textContent = projectIndex;
    detailTile.appendChild(invisibleIndex);
    console.log(invisibleIndex.textContent)

    const ticketsContainer = document.createElement('div');
    ticketsContainer.classList.add('tickets-container');
    projectContent.appendChild(ticketsContainer);

    highlightedProject.project_items.forEach((ticket, ticketIndex) => {
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket');

        const ticketTitle = document.createElement('h4');
        ticketTitle.textContent = `Ticket ${ticketIndex + 1}: ${ticket.title}`;
        ticketElement.appendChild(ticketTitle);

        const ticketDescription = document.createElement('p');
        ticketDescription.textContent = ticket.description;
        ticketElement.appendChild(ticketDescription);

        const ticketDueDate = document.createElement('p');
        ticketDueDate.textContent = `Due Date: ${ticket.dueDate}`;
        ticketElement.appendChild(ticketDueDate);

        const ticketPriority = document.createElement('p');
        ticketPriority.textContent = `Priority: ${ticket.priority}`;
        ticketElement.appendChild(ticketPriority);

        const ticketStatus = document.createElement('p');
        ticketStatus.textContent = `Status: ${ticket.status}`;
        ticketElement.appendChild(ticketStatus);

        ticketsContainer.appendChild(ticketElement);
    });
}

function clearMainContent() {
    contentDiv.innerHTML = ''
}

function addTicketToProjectArray(projectIndex, title, notes, dateDue, priority, completedstat) {
    const specifiedProject = projects_array[projectIndex];

    const newTicket = new to_do_ticket(title, notes, dateDue, priority, completedstat)

    specifiedProject.projectTicketArray.push(newticket)
}

function addTicketForm(projectIndex) {

    const projectContent = document.getElementsByClassName(".project-content")

    const addForm = document.createElement('form');
    addForm.classList.add('add-form');
    projectContent.appendChild(addForm);

    // Create input for Title
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.placeholder = 'Ticket Title';
    titleInput.required = true;
    addForm.appendChild(titleInput);

    // Create textarea for Notes
    const notesInput = document.createElement('textarea');
    notesInput.name = 'notes';
    notesInput.placeholder = 'Ticket Notes';
    notesInput.required = true;
    addForm.appendChild(notesInput);

    // Create input for Date Due
    const dateDueInput = document.createElement('input');
    dateDueInput.type = 'date';
    dateDueInput.name = 'dateDue';
    dateDueInput.required = true;
    addForm.appendChild(dateDueInput);

    // Create select for Priority
    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';
    prioritySelect.required = true;

    const priorities = ['Low', 'Medium', 'High'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.toLowerCase();
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    addForm.appendChild(prioritySelect);

    // Create select for Completed Status
    const completedStatSelect = document.createElement('select');
    completedStatSelect.name = 'completedstat';
    completedStatSelect.required = true;

    const statuses = ['Incomplete', 'Complete'];
    statuses.forEach(status => {
        const option = document.createElement('option');
        option.value = status.toLowerCase();
        option.textContent = status;
        completedStatSelect.appendChild(option);
    });

    addForm.appendChild(completedStatSelect);

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Ticket';
    addForm.appendChild(submitButton);

    // Add event listener to handle form submission
    addForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const title = titleInput.value;
        const notes = notesInput.value;
        const dateDue = dateDueInput.value;
        const priority = prioritySelect.value;
        const completedstat = completedStatSelect.value;

        // Example project index (you would replace this with actual logic to get the correct index)
        const projectIndex = projectIndex // Change this to the actual project index where the ticket should be added

        // Call the function to add the ticket to the project array
        addTicketToProjectArray(projectIndex, title, notes, dateDue, priority, completedstat);

        // Clear form fields after submission
        addForm.reset();
    });
}

