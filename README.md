Parte 1: Infraestrutura (Terraform)
Implemente os seguintes recursos utilizando Terraform:
VPC com ao menos 2 subnets públicas e 2 privadas
NAT Gateway para as subnets privadas
ECS Cluster (Fargate)
Task Definition e Service
Application Load Balancer escutando em porta 80 ou 443
Repositório ECR para imagens Docker
IAM Roles e Policies com privilégio mínimo
Security Groups restritivos
(Opcional) Auto Scaling para ECS Tasks




Parte 2: Aplicação
Utilize uma aplicação simples (Node.js, Python, etc.).
Crie um Dockerfile que exponha a porta 8080.
Implemente um endpoint /health para verificação de saúde.

Parte 3: Pipeline de CI/CD
Configure um pipeline com uma das ferramentas abaixo: - GitHub Actions - GitLab CI/CD - CircleCI
O pipeline deve realizar: 1. Checkout do repositório 2. Build da imagem Docker 3. Push para o ECR 4.
Execução do Terraform ( init , plan , apply )# desafio
