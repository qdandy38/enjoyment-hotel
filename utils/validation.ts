/**
 * @function validateForm
 * @description 驗證表單所有欄位，使用 formRules 規則驗證 formData
 * @param {object} formData - 表單資料
 * @param {object} formRules - 表單欄位驗證規則
 * @returns {boolean}
 * */
export const validateForm = (formData: Record<string, any>, formRules: RulesMap): boolean => {
  const formRuleKeys = Object.keys(formRules);
  return formRuleKeys.every(key => {
    if (formData[key] !== undefined) {
      return checkRules(formRules[key], formData[key]);
    }
    return true;
  });
};

/**
 * @function checkValid
 * @description 確認 value 是否符合 rule
 * @param {object<Rule>} rule - 驗證規則
 * @param {string|number} value - 需要驗證的值
 * @returns {boolean}
 */

export const checkValid = (rule: ValidateRule, value: any): boolean => {
  if (rule.validator && typeof rule.validator === 'function') {
    // 驗證器優先
    return rule.validator(value);
  } else if (rule.regExp) {
    // 使用正則
    return rule.regExp.test(value.toString());
  } else {
    throw new Error('Function:"checkValid" has no legal properties');
  }
};

/**
 * @function checkRules
 * @description 確認 value 是否符合全部的 rule
 * @param {Array.<Rule>} rules - 多數驗證規則
 * @param {string|number} value - 需要驗證的值
 * @returns {boolean}
 */
export const checkRules = (rules: ValidateRule[], value: any): boolean => {
  return rules.every(rule => checkValid(rule, value));
};
