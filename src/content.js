import { Project, to_do_ticket } from './index.js'

// main_content = document.getElementById('main-content')
// document.addEventListener('DOMContentLoaded', () => { })

export const projects_array = [
    new Project('A Spy Plane', "This will be the biggest spyplane you ever seen, it'll be beautiful and amazing", '2030/12/31', "High", [ 
        new to_do_ticket("Build the wings", "The wings will need to be really, really big. It'll take lots of people to make them, it'll take x products and a lot of time", '2024/09/23', "High", "Incomplete"),
        new to_do_ticket("Install the surveillance system", "A state-of-the-art surveillance system needs to be installed for optimum performance", '2024/10/10', "Medium", "Incomplete"),
        new to_do_ticket("Test the engines", "Ensure the engines are powerful enough to achieve desired speeds and altitudes", '2025/01/15', "High", "Incomplete"),
    ], 'In Progress', 0),
    
    new Project('A knitted jumper', "This will be a wholesome jumper, it'll be Christmas ugly", '2024/12/31', "Low", [
        new to_do_ticket("Choose yarn colors", "Select appropriate colors to give the jumper a festive look", '2024/08/15', "Low", "Incomplete"),
        new to_do_ticket("Knit the base", "Start knitting the base of the jumper, focusing on basic patterns", '2024/09/05', "Medium", "Incomplete"),
        new to_do_ticket("Add decorative patterns", "Include Christmas-themed patterns like snowflakes and reindeer", '2024/11/01', "Low", "Incomplete"),
    ], 'In Progress', 1),
    
    new Project('A Spy Plane', "This will be the biggest spyplane you ever seen, it'll be beautiful and amazing", '2024/12/31', "High", [
        new to_do_ticket("Design fuselage", "Create the design for the spy plane's fuselage ensuring stealth capabilities", '2024/06/30', "High", "Incomplete"),
        new to_do_ticket("Integrate avionics", "Install advanced avionics for navigation and mission control", '2024/08/20', "High", "Incomplete"),
    ], 'In Progress', 2),
    
    new Project('Smart Home Automation', 'A comprehensive system to automate lighting, temperature, and security', '2024/09/30', 'High', [
        new to_do_ticket("Install smart lights", "Replace traditional lights with smart bulbs that can be controlled remotely", '2024/07/10', "Medium", "Incomplete"),
        new to_do_ticket("Setup thermostat", "Install a smart thermostat to manage home temperature efficiently", '2024/07/20', "High", "Incomplete"),
        new to_do_ticket("Integrate security cameras", "Position security cameras around the house and link them to a monitoring app", '2024/08/05', "High", "Incomplete"),
    ], 'Not Started', 3),
    
    new Project('Personal Website Revamp', 'A modern and responsive redesign of my personal website', '2024/10/15', 'Medium', [
        new to_do_ticket("Design wireframes", "Create wireframes for the new layout to improve usability", '2024/08/01', "Medium", "Incomplete"),
        new to_do_ticket("Update content", "Revise existing content and add new articles and portfolio pieces", '2024/09/01', "Low", "Incomplete"),
        new to_do_ticket("Implement responsive design", "Ensure the website looks good on all devices, including mobiles and tablets", '2024/09/20', "High", "Incomplete"),
    ], 'In Progress', 4),
    
    new Project('Garden Makeover', 'A complete transformation of the backyard, including landscaping and furniture', '2025/03/31', 'Low', [
        new to_do_ticket("Remove old plants", "Clear out existing plants that do not fit the new design", '2024/12/01', "Low", "Incomplete"),
        new to_do_ticket("Install new irrigation system", "Set up an efficient irrigation system to support new landscaping", '2025/01/15', "Medium", "Incomplete"),
        new to_do_ticket("Place garden furniture", "Arrange the garden furniture according to the new layout", '2025/02/10', "Low", "Incomplete"),
    ], 'Not Started', 5),
    
    new Project('Language Learning App', 'A mobile app to learn Spanish, including interactive lessons and quizzes', '2025/02/28', 'High', [
        new to_do_ticket("Design user interface", "Create an intuitive and engaging UI for the app", '2024/11/01', "High", "Incomplete"),
        new to_do_ticket("Develop lesson modules", "Create interactive lessons covering basic to advanced Spanish", '2024/12/15', "High", "Incomplete"),
        new to_do_ticket("Implement quizzes", "Add quizzes to assess learners’ progress and reinforce learning", '2025/01/10', "Medium", "Incomplete"),
    ], 'In Progress', 6)
]





