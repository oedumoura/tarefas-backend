# 🚀 Microsserviço Backend

API Node.js com Express e MongoDB para gerenciamento de tarefas

## 📦 Como Construir
```bash
docker build -t seuusuario/tarefas-backend:1.0.0 .

docker run -d \
  -p 5001:5001 \
  -e DB_URL=mongodb://db:27019/tarefas \
  -e PORT=5001 \
  --name backend \
  seuusuario/tarefas-backend:1.0.0

  