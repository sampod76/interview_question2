const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");
const git = simpleGit();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.POST || 5050;
let totalCompleted = 0;
const pushCount = 40;

const run = async () => {
  try {
    const filePath = path.join(__dirname, "./question/mongodb.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    const mongodbData = JSON.parse(jsonData);
    // Read and parse the JSON file

    // Function to get the next available file name
    function getNextFileName() {
      const pathName = "./mongodb/";
      const files = fs.readdirSync(pathName);
      const filePattern = /^question-(\d*)\.md$/;

      let maxNumber = 0;
      files.forEach((file) => {
        const match = file.match(filePattern);
        if (match) {
          const number = match[1] ? parseInt(match[1], 10) : 0;
          if (number >= maxNumber) {
            maxNumber = number + 1;
          }
        }
      });

      return {
        fileName: `${pathName}question-${maxNumber}.md`,
        maxNumber,
      };
    }

    // Function to create and commit a new file
    const createFileAndCommit = async () => {
      const nextFileName = getNextFileName();

      // Content to write to the file
      const content = `
## question no: ${mongodbData[nextFileName.maxNumber]?.id}

## question : ${mongodbData[nextFileName.maxNumber]?.question}

## answer: ${mongodbData[nextFileName.maxNumber]?.ans}
      `;
      console.log(
        "🚀 ~ run ~ maxNumber:",
        mongodbData[nextFileName.maxNumber]?.id
      );

      // Write the content to the new file
      fs.writeFile(nextFileName.fileName, content, async (err) => {
        if (err) {
          return console.error("Error writing to file:", err);
        }
        console.log(
          `${nextFileName.fileName} has been created and content has been written.`
        );

        // Start running the Git commands with the dynamic content
        await runGitCommands(mongodbData[nextFileName.maxNumber]);
      });
    };

    // Set an interval to create a new file every 3 minutes (180,000 milliseconds)
    setInterval(async () => {
      totalCompleted++;
      if (totalCompleted >= pushCount) {
        process.exit();
      }
      await createFileAndCommit();
    }, 5 * 60 * 1000); // 5 minutes
  } catch (error) {
    console.log(error);
  }
};

// Function to run Git commands at random intervals
const runGitCommands = async (data) => {
  try {
    const pushTimeArray = [
      5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 23, 24,
      25, 26, 27, 28, 29, 30,
    ];
    // const mergeTimeArray = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const getRandomTime = (timeArray) => {
      return timeArray[Math.floor(Math.random() * timeArray.length)] * 1000;
    };

    // let totalCompleted = 0;
    // const maxMerges = 25;

    const schedulePush = () => {
      setTimeout(async () => {
        await git.checkout("devsampod");
        const status = await git.status();
        if (!status.isClean()) {
          await git.add(".");
          const commitMessage = `create question: ${data?.question}`;
          await git.commit(commitMessage);
          await git.push("origin", "devsampod");
          console.log("Changes pushed to GitHub with commit:", commitMessage);
        } else {
          console.log("No changes detected. Skipping push.");
          schedulePush(); // Schedule the next push
        }
      }, getRandomTime(pushTimeArray));
    };

    // const schedulePull = () => {
    //   setTimeout(async () => {
    //     await git.checkout("dev");
    //     await git.pull("origin", "devsampod");
    //     console.log("Changes pulled from GitHub.");
    //     schedulePull(); // Schedule the next pull
    //   }, getRandomTime(pullTimeArray));
    // };

    // const scheduleMerge = () => {
    //   setTimeout(async () => {
    //     try {
    //       const status = await git.status();

    //       await git.checkout("main");

    //       // Pull the latest changes from the remote before merging
    //       await git.pull("origin", "devsampod");

    //       try {
    //         await git.merge(["devsampod"]);
    //       } catch (mergeError) {
    //         console.error("Merge conflict detected:", mergeError);

    //         // Resolve conflicts by keeping "theirs" (changes from 'devsampod')
    //         await git.raw(["merge", "--strategy-option=theirs", "devsampod"]);

    //         console.log(
    //           "Conflicts resolved by keeping changes from 'devsampod'"
    //         );
    //       }

    //       await git.add(".");
    //       await git.commit(`merge success ${data?.id}`);
    //       await git.push("origin", "main");
    //       console.log(
    //         `Merged changes from GitHub. Merge count: ${totalCompleted}`
    //       );
    //       await git.checkout("devsampod");
    //     } catch (err) {
    //       console.error("Error during merge operation:", err);
    //     }
    //   }, getRandomTime(mergeTimeArray));
    // };

    // Start the first push, pull, and merge
    schedulePush();
    // schedulePull();
    // scheduleMerge();
  } catch (err) {
    console.error("Error executing Git commands:", err);
  }
};

run();

app.get("/", (req, res) => {
  res.send("This server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
