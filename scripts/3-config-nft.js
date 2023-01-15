import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xACCbC84081115F27Cf0315c9F77fb2251Da20C79", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Break Chains",
        description: "This NFT will give you access to Voice DAO!",
        image: readFileSync("scripts/assets/breakchains.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();