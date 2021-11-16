import bcrypt from "bcrypt";

const saltRounds = 12;

const correctPassword = "Hunter123";
const incorrectPassword = "hunter123";
const correctHash = "$2b$12$j50TyPCKlxxbYYa0TYqjNeG8Ql4wkq3VyBWe8Juon6UTSFjkxzm/.";

(async () => {
    const hashedPassword = await bcrypt.hash(correctPassword, saltRounds);
    //console.log(hashedPassword);

    const isPasswordCorrect = await bcrypt.compare(incorrectPassword, correctHash);
    console.log(isPasswordCorrect);
})();

export default {};