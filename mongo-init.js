db.createUser({
    user: "tarefas_user",
    pwd: "tarefas_pass",
    roles: [
      { role: "readWrite", db: "tarefas" }
    ]
  });