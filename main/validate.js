import VeeValidate from 'vee-validate'
import error from './error'

export default ({ app, router, Vue }) => {
  const config = {
    errorBagName: 'errors', // change if property conflicts
    fieldsBagName: 'fields',
    delay: 0,
    locale: 'en',
    dictionary: null,
    strict: true,
    classes: true,
    classNames: {
      touched: 'touched', // the control has been blurred
      untouched: 'untouched', // the control hasn't been blurred
      valid: 'valid', // model is valid
      invalid: 'invalid', // model is invalid
      pristine: 'pristine', // control has not been interacted with
      dirty: 'dirty' // control has been interacted with
    },
    fastExit: false,
    events: 'input|blur',
    inject: true,
    validity: false,
    aria: true
  }
  Vue.use(VeeValidate, config)
  Vue.component('validate-error', error)

  // 自定义规则
  VeeValidate.Validator.extend('tel', value => /^\+?[0-9-]{7,17}$/.test(value))
  VeeValidate.Validator.extend('mobile', value => /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(value))
  VeeValidate.Validator.extend('verification', value => /^\d{6}$/.test(value))
}
