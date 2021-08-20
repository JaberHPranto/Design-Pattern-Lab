/* When we need a single instance of a class */
// In this example, we only need one config manager

class ConfigManager {
  private settings = new Map<string, number>();
  private static instance: ConfigManager = new ConfigManager();

  private constructor() {}

  static getInstance() {
    return ConfigManager.instance;
  }

  setConfig(key: string, value: number) {
    this.settings.set(key, value);
  }
  getConfig(key: string) {
    return this.settings.get(key);
  }
}

const configManager: ConfigManager = ConfigManager.getInstance();
configManager.setConfig("configID", 140);

const anotherConfigManager: ConfigManager = ConfigManager.getInstance();

console.log(configManager.getConfig("configID"));
console.log(anotherConfigManager.getConfig("configID"));
