#Realizar o build da aplicação

- docker build --no-cache -t <dockerhost>/app-techtalk:1.0.0 .
- docker push 86624399/app-techtalk:1.0.0

# kubernetes

- Criar cluster kubernetes para teste local

cat <<EOF | kind create cluster --name training --config=-
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
EOF

kubectl config get-contexts

kubectl config use-context <clusterName>

- criar namespace para a nossa aplicação

kubectl apply -f namespace.yml
kubectl config set-context --current --namespace=NAMESPACE

- criar secret para com que o nosso cluster baixe a imagem da nossa aplicação

kubectl create secret docker-registry registry-secret \
  --docker-server=docker.io \
  --docker-username=username \
  --docker-password=password

- criar deployment

kubectl apply -f deployment.yml

- instalar ingress-nginx

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
kubectl apply -f ingress.yml

- criar service

kubectl apply -f service.yml
