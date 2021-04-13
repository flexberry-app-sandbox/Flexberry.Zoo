docker build --no-cache -f SQL\Dockerfile.PostgreSql -t zoo/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t zoo/app ../..
