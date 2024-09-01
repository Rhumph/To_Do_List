import './style.css'
import { compareAsc, format } from "date-fns";

// format(new Date(1, 11, 2011), "dd-MM-yyyy");

console.log('printed abcdefg')

// const contentDiv = document.getElementById('main-content');
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'Test work i3rnvbi3rbvn3irncvb3i';
// contentDiv.appendChild(newParagraph);

export class Project { 

    constructor(title, description, dueDate, priority, project_items, completed_status, index){
        this.title = title
        this.description = description
        this.dueDate = new Date (dueDate)
        this.priority = priority
        this.project_items = project_items
        this.completed_status = completed_status
        this.projectTicketArray = []
        this.index = index
    }

    change_priority(new_priority_level){ 
        this.priority = new_priority_level
    }

    change_dateDue(newDueDate){ 
        this.dateDue = newDueDate
    }

    change_completedStatus(newCompletionStatus){ 
        this.completed_status = newCompletionStatus
    }

    amend_Description(amendedDescription){ 
        this.description = amendedDescription        
    }

    add_project_ticket(newTicket){ 
        this.projectTicketArray.push(newTicket)
    }

}

export class to_do_ticket { 

    constructor(title, notes, dateDue, priority, completedStatus){
        this.title = title
        this.notes = notes
        this.dateDue = dateDue
        this.priority = priority
        this.completed_status = completedStatus
    }

    change_priority(){ 

    }

    change_dateDue(){ 

    }

    change_completedStatus(){ 

    }

    amend_notes(){ 

    }
}