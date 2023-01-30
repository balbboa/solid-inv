## SOLID-INV

yarn 
prisma generate
prisma migrate dev
yarn dev

# docker 

docker pull postgres

docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres