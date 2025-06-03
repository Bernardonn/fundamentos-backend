/*
  Warnings:

  - The values [ELECTRONICS,HOME,OTHER] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `is_stock` on the `products` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('SEX_SHOP', 'FOOD', 'GAMES', 'BIRD', 'NON');
ALTER TABLE "products" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "is_stock",
ADD COLUMN     "stock_available" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "category" SET DEFAULT 'NON',
ALTER COLUMN "updated_at" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Modelo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Modelo_nome_key" ON "Modelo"("nome");
