Perfeito! Aqui está um exemplo completo de um `README.md` simples e direto, cobrindo exatamente o que foi solicitado:

---

## 🛠️ Health App – Infraestrutura com Terraform e Deploy com CI/CD

Aplicação Node.js com endpoint `/health` exposta via Load Balancer, empacotada com Docker, provisionada com Terraform e automatizada com GitHub Actions.

---

## 🚀 Como aplicar o Terraform localmente

### Pré-requisitos:

* Terraform instalado (`terraform -v`)
* AWS CLI configurado (`aws configure`)
* Docker instalado (opcional, para testar local)
* Permissões adequadas no IAM

### Passos:

1. Acesse o diretório de infraestrutura:

   ```bash
   cd terraform/
   ```

2. Inicialize o Terraform:

   ```bash
   terraform init
   ```

3. Visualize as mudanças:

   ```bash
   terraform plan
   ```

4. Aplique a infraestrutura:

   ```bash
   terraform apply -auto-approve
   ```

---

## 🌐 Como acessar o serviço via Load Balancer

Após a finalização do `terraform apply`, será exibido o DNS do Load Balancer como output:

```bash
Outputs:

load_balancer_dns_name = "http://<dns-do-load-balancer>"
```

Acesse no navegador:

```
http://<dns-do-load-balancer>/health
```

Você deve ver:

```
OK
```

---

## 📋 Como verificar os logs no CloudWatch

1. Acesse o console da AWS: [https://console.aws.amazon.com/cloudwatch/](https://console.aws.amazon.com/cloudwatch/)

2. Vá até **Logs > Log groups**.

3. Procure por algo como:

   ```
   /ecs/health-app
   ```

4. Clique no grupo de logs e veja os logs das execuções da task ECS Fargate.

---

## 🔄 CI/CD com GitHub Actions

Este repositório possui uma esteira automatizada com os seguintes passos:

* Checkout do código
* Build da imagem Docker
* Push para o Amazon ECR
* Execução do Terraform

A pipeline é executada automaticamente a cada push na branch `main`.

