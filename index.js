const { Command } = require('@oclif/command')
const dedent = require('dedent')

class BaseCommand extends Command {
  static strict = true
  static flags = {}
  static args = []
  static description = dedent`
  `
  static examples = []

  async init() {
    const { flags, args, argv } = this.parse(this.constructor)
    this.flags = flags
    this.args = args
    this.argv = argv
    try {
      await this._init()
    } catch (e) {
      this.error(e)
    }
  }

  // INFO: to be instanciated by inherited classes
  async _init() {}

  async catch(err) {
    this.error(err)
  }
}

module.exports = BaseCommand
