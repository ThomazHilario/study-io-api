-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskKanban" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TaskKanban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devTaskKanban" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "devTaskKanban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pauseTaskKanban" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "pauseTaskKanban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "completeTaskKanban" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "completeTaskKanban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kanban" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Kanban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Themes" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "video_url" TEXT NOT NULL,

    CONSTRAINT "Themes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskKanban" ADD CONSTRAINT "TaskKanban_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Kanban"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devTaskKanban" ADD CONSTRAINT "devTaskKanban_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Kanban"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pauseTaskKanban" ADD CONSTRAINT "pauseTaskKanban_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Kanban"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completeTaskKanban" ADD CONSTRAINT "completeTaskKanban_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Kanban"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kanban" ADD CONSTRAINT "Kanban_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
