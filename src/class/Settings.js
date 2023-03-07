class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);

    this.userSettings = new Map([
      ['music', 'rock']
    ]);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings])
  }
}

export default Settings