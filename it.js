import simpleGit from "simple-git";
const git = simpleGit();
const runGitCommands = async () => {
  try {
    const pushTimeArray = [
      200, 254, 285, 269, 299, 300, 305, 308, 309, 350, 341, 345, 347, 351, 356,
      360,
    ];
    const pullTimeArray = [
      400, 454, 485, 469, 499, 500, 505, 508, 509, 550, 541, 545, 547, 551, 556,
      560,
    ];
    const mergeTimeArray = [
      400, 454, 485, 469, 499, 500, 505, 508, 509, 550, 541, 545, 547, 551, 556,
      560,
    ];

    const getRandomTime = (timeArray) => {
      return timeArray[Math.floor(Math.random() * timeArray.length)] * 1000;
    };

    let mergeCounter = 0;
    const maxMerges = 15;

    const schedulePush = () => {
      setTimeout(async () => {
        await git.add(".");
        await git.commit("Auto-commit");
        await git.push("origin", "main"); // Replace 'main' with your branch name
        console.log("Changes pushed to GitHub.");
        schedulePush(); // Schedule the next push
      }, getRandomTime(pushTimeArray));
    };

    const schedulePull = () => {
      setTimeout(async () => {
        await git.pull("origin", "main"); // Replace 'main' with your branch name
        console.log("Changes pulled from GitHub.");
        schedulePull(); // Schedule the next pull
      }, getRandomTime(pullTimeArray));
    };

    const scheduleMerge = () => {
      setTimeout(async () => {
        await git.merge(["main"]); // Replace 'main' with your branch name
        mergeCounter++;
        console.log(`Merged changes from GitHub. Merge count: ${mergeCounter}`);
        if (mergeCounter < maxMerges) {
          scheduleMerge(); // Schedule the next merge if the counter is below the limit
        } else {
          console.log("Merge limit reached. Ending process.");
          process.exit(); // End the process
        }
      }, getRandomTime(mergeTimeArray));
    };

    // Start the first push, pull, and merge
    schedulePush();
    schedulePull();
    scheduleMerge();
  } catch (err) {
    console.error("Error executing Git commands:", err);
  }
};
runGitCommands();
