-- CreateTable
CREATE TABLE "modelos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "modelos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fabricantes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "fabricantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modelos_fabricantes" (
    "id" TEXT NOT NULL,
    "id_modelo" TEXT NOT NULL,
    "id_fabricante" TEXT NOT NULL,

    CONSTRAINT "modelos_fabricantes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "modelos_bar_code_key" ON "modelos"("bar_code");

-- AddForeignKey
ALTER TABLE "modelos_fabricantes" ADD CONSTRAINT "modelos_fabricantes_id_modelo_fkey" FOREIGN KEY ("id_modelo") REFERENCES "modelos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modelos_fabricantes" ADD CONSTRAINT "modelos_fabricantes_id_fabricante_fkey" FOREIGN KEY ("id_fabricante") REFERENCES "fabricantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
