/* When we need a single instance of a class */
// In this example, we only need one config manager
class ConfigManager {
    constructor() {
        this.settings = new Map();
    }
    static getInstance() {
        return ConfigManager.instance;
    }
    setConfig(key, value) {
        this.settings.set(key, value);
    }
    getConfig(key) {
        return this.settings.get(key);
    }
}
ConfigManager.instance = new ConfigManager();
const configManager = ConfigManager.getInstance();
configManager.setConfig("configID", 140);
const anotherConfigManager = ConfigManager.getInstance();
console.log(configManager.getConfig("configID"));
console.log(anotherConfigManager.getConfig("configID"));
