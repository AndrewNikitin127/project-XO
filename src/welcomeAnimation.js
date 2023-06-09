import chalkAnimation from 'chalk-animation';

/* eslint-disable */
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
/* eslint-enable */

async function clearConsole() {
  console.clear();
}

async function welcome() {
  const gameTitleAnimation = chalkAnimation.karaoke(`

  #   # ####  #####  #### ##### #   # #   # #   #      
  #  #  #   # #     #       #   #  ## #  #  #  ##      
  ###   ####  ####  #       #   # # # ###   # # #      
  #  #  #     #     #       #   ##  # #  #  ##  #      
  #   # #     #####  ####   #   #   # #   # #   #      


        #   #  ###   #### #   # #   # #   #            
        #   # #   #  #  # #  ## #  #  #  ##            
        ##### #   #  #  # # # # ###   # # #            
        #   # #   #  #  # ##  # #  #  ##  #            
        #   #  ###  #   # #   # #   # #   #            

`, 1.1);

  await sleep();
  gameTitleAnimation.stop();
}

export default async () => {
  await clearConsole();
  await welcome();
};
