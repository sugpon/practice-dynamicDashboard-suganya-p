let userName = "Suganya";
const greeting = <h1>Hello {userName}</h1>;
const isPremiumMember= false;
const premiumMember = <h2>Thank you for being a premium member!</h2>;
const nonPremiumMember= <h2>Upgrade to premium to enjoy exclusive features!</h2>;
const taskArray= [
    {taskName: "Learn React", completed: true},
    {taskName: "Build a project", completed: false},
    {taskName: "Read documentation", completed: false}
];

const DynamicDashboard = () => {
    const taskList = taskArray.map((task, index) => <li key= {index}>{task.taskName} {task.completed ? "✅":"❌"}</li>);
    const element = <ul>{taskList}</ul>;
    return (
    <div>
        {greeting}
        {isPremiumMember ? premiumMember: nonPremiumMember}
        <h2>Your Task List for Today:</h2>
        {element}
    </div>
    );
}
    
export default DynamicDashboard;

