-- CreateTable
CREATE TABLE "Era" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,

    CONSTRAINT "Era_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "family" TEXT NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstrumentType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "instrumentId" TEXT NOT NULL,

    CONSTRAINT "InstrumentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EraGenreStyle" (
    "id" TEXT NOT NULL,
    "eraId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "EraGenreStyle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InstrumentType" ADD CONSTRAINT "InstrumentType_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EraGenreStyle" ADD CONSTRAINT "EraGenreStyle_eraId_fkey" FOREIGN KEY ("eraId") REFERENCES "Era"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EraGenreStyle" ADD CONSTRAINT "EraGenreStyle_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
