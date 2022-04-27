import { existsSync } from "fs";
import { logger } from "../helpers/logger";
import { ProjectType } from "../types/ProjectType";
import { Detector } from "./detector";

export default class FoundryDetector implements Detector {
  public projectType: ProjectType = "foundry";

  public async matches(path: string): Promise<boolean> {
    logger.debug("Checking if " + path + " is a Foundry project");
    return existsSync(path + "/foundry.toml");
  }
}