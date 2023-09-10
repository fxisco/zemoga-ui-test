import rules from './data.json'

export default {
  provide () {
    return {
      rules: rules.data
    }
  }
}
