declare type ValidateRule = {
  message: string
  regExp?: RegExp
  validator?: (checkValue) => boolean
}

declare interface RulesMap {
  [propName: string]: ValidateRule[]
}
