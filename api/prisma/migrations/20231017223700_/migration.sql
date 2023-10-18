-- CreateTable
CREATE TABLE "surgical_requests" (
    "code" UUID NOT NULL,
    "surgicalRoom" TEXT NOT NULL,
    "medicalProcedure" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "patient" TEXT NOT NULL,
    "hospital" TEXT NOT NULL,
    "surgeryDate" TIMESTAMP(3) NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observations" TEXT NOT NULL,

    CONSTRAINT "surgical_requests_pkey" PRIMARY KEY ("code")
);
