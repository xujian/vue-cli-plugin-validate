<template>
  <div class="validate-error relative-position">
    <span class="help text">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'validate-error',
  props: {
    messages: [String, Object],
    message: String
  },
  computed: {
    computedMesasages () {
      return this.messages || this.message
    },
    firstMessage () {
      return this.errors.first(this.computedField)
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    // 允许多种写法
    let messageBag = this.computedMesasages.constructor.name === 'String' ?
      {required: this.computedMesasages} :
      this.computedMesasages
    let culture = {}
    culture[this.computedField] = messageBag
    let custom = {
      custom: culture
    }
    this.$validator.localize('custom', custom)
    console.info('mounted--------', this.bag, this.errors, this.$validator)
  },
  methods: {
  }
}
</script>
<style lang="stylus">
.validate-error
  position absolute
  display block
  width 100%
  bottom -1.5em
  font-size 12px
  text-align right
  .text
    display none
    color #999
.q-if-error
  .validate-error
    .text
      display block
</style>
