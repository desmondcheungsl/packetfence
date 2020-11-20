<template>
  <base-form
    :form="form"
    :meta="meta"
    :schema="schema"
    :isLoading="isLoading"
  >

    <form-group-identifier namespace="id"
      :column-label="$i18n.t('Name')"
    />

  </base-form>
</template>
<script>
import {
  BaseForm,
} from '@/components/new/'
import {
  FormGroupIdentifier
} from './'
const components = {
  BaseForm,
  FormGroupIdentifier
}

import { useForm, useFormProps as props } from '../_composables/useForm'

export const setup = (props, context) => useForm(props, context)

// @vue/component
export default {
  name: 'the-form',
  inheritAttrs: false,
  components,
  props,
  setup
}
</script>
