-- CreateTable
CREATE TABLE "Saga" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Saga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planeta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "isDestroyed" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Planeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ki" TEXT,
    "maxKi" TEXT,
    "raca" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "afiliacao" TEXT NOT NULL,
    "sagaId" INTEGER NOT NULL,
    "planetaId" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transformation" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Transformation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_sagaId_fkey" FOREIGN KEY ("sagaId") REFERENCES "Saga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_planetaId_fkey" FOREIGN KEY ("planetaId") REFERENCES "Planeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transformation" ADD CONSTRAINT "Transformation_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
