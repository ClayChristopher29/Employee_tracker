const createTask = taskObject => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObject)
    });
  };
  
  const getAllInfo = () => {
    return fetch("http://localhost:8088/employees").then(tasks => tasks.json());
  };