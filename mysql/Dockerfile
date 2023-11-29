FROM mysql:latest

# Define as variáveis de ambiente para o usuário e senha do MySQL
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=fullcycle@2023

# Copia o arquivo de inicialização personalizado para o diretório de inicialização do MySQL
COPY custom-entrypoint.sh /docker-entrypoint-initdb.d/

# Define as permissões corretas para o arquivo de inicialização personalizado
RUN chmod +x /docker-entrypoint-initdb.d/custom-entrypoint.sh
