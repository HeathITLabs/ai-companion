const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        console.log("Begin the creating!")
        db.category.createMany({
            data: [
                { name: "Famous People" },
                { name: "Movies & TV" },
                { name: "Musicians" },
                { name: "Games" },
                { name: "Animals" },
                { name: "Philosophy" },
                { name: "Scientists" },
            ]
        })
        console.log("Creating ended!")
    } catch (error) {
        console.log("It done broke")
        console.log("Error seeding default categories", error)
    } finally {
        console.log("Begin DB Disconnect")
        await db.$disconnect();
        console.log("End DB Disconnect")
    }
}

main();
