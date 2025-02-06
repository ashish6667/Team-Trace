
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare monthly report",
        taskDescription: "Compile and analyze monthly sales data.",
        taskDate: "2025-02-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update client database",
        taskDescription: "Ensure all client details are up to date.",
        taskDate: "2025-02-12",
        category: "Data Entry",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 0, failed: 0 }
  },
  {
    id: 2,
    firstName: "Rajesh",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Onboard new employees",
        taskDescription: "Guide new hires through onboarding.",
        taskDate: "2025-02-11",
        category: "HR",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Organize team meeting",
        taskDescription: "Schedule and coordinate the weekly meeting.",
        taskDate: "2025-02-13",
        category: "Administration",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: { active: 1, newTask: 0, completed: 1, failed: 1 }
  },
  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Conduct market research",
        taskDescription: "Analyze competitors and industry trends.",
        taskDate: "2025-02-15",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write blog post",
        taskDescription: "Create content for the company blog.",
        taskDate: "2025-02-18",
        category: "Content Creation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Code review",
        taskDescription: "Review and optimize new code updates.",
        taskDate: "2025-02-17",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Deploy new feature",
        taskDescription: "Push the latest feature update to production.",
        taskDate: "2025-02-20",
        category: "Engineering",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 0, failed: 0 }
  },
  {
    id: 5,
    firstName: "Pankaj",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Customer support",
        taskDescription: "Respond to customer inquiries and resolve issues.",
        taskDate: "2025-02-14",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Prepare training materials",
        taskDescription: "Create guides and resources for training sessions.",
        taskDate: "2025-02-19",
        category: "Training",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 0, failed: 1 }
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees' ,JSON.stringify(employees))
  localStorage.setItem('admin' ,JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}