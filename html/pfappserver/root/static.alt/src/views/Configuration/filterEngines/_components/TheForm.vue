<template>
  <base-form
    :form="form"
    :meta="meta"
    :schema="schema"
    :isLoading="isLoading"
  >

    <form-group-identifier namespace="id"
      :column-label="$i18n.t('Name')"
      :text="$i18n.t('Specify a unique name for your filter.')"
    />

    <form-group-description v-if="fields.includes('description')"
      namespace="description"
      :column-label="$i18n.t('Description')"
    />

    <form-group-status v-if="fields.includes('status')"
      namespace="status"
      :column-label="$i18n.t('Enabled')"
    />

    <form-group-condition v-if="fields.includes('condition')"
      namespace="condition"
      :column-label="$i18n.t('Condition')"
      :text="$i18n.t('Specify a condition to match.')"
    />

    <form-group-run-actions v-if="fields.includes('actions')"
      namespace="run_actions"
      :column-label="$i18n.t('Peform Actions')"
      :text="$i18n.t('Enable to perform the following actions. Disable to only apply the role.')"
    />

    <form-group-actions v-if="fields.includes('actions') && form.run_actions === 'enabled'"
      namespace="actions"
      :column-label="$i18n.t('Actions')"
      :text="$i18n.t('Specify actions when condition is met.')"
    />

    <form-group-merge-answer v-if="fields.includes('merge_answer')"
      namespace="merge_answer"
      :column-label="$i18n.t('Merge Answer')"
      :text="$i18n.t('Enable to merge the following answers with the original RADIUS answers.')"
    />

    <form-group-answers v-if="fields.includes('answers')"
      namespace="answers"
      :column-label="$i18n.t('Answers')"
    />

    <form-group-role v-if="fields.includes('role')"
      namespace="role"
      :column-label="$i18n.t('Role')"
    />

    <form-group-scopes v-if="fields.includes('scopes')"
      namespace="scopes"
      :column-label="$i18n.t('Scopes')"
    />

    <form-group-response-code v-if="fields.includes('rcode')"
      namespace="rcode"
      :column-label="$i18n.t('Response Code')"
    />

    <form-group-radius-status v-if="fields.includes('radius_status')"
      namespace="radius_status"
      :column-label="$i18n.t('RADIUS Status')"
    />

  </base-form>
</template>
<script>
import {
  BaseForm,
} from '@/components/new/'
import {
  FormGroupActions,
  FormGroupAnswers,
  FormGroupCondition,
  FormGroupDescription,
  FormGroupIdentifier,
  FormGroupMergeAnswer,
  FormGroupRadiusStatus,
  FormGroupResponseCode,
  FormGroupRole,
  FormGroupRunActions,
  FormGroupScopes,
  FormGroupStatus
} from './'
const components = {
  BaseForm,
  FormGroupActions,
  FormGroupAnswers,
  FormGroupCondition,
  FormGroupDescription,
  FormGroupIdentifier,
  FormGroupMergeAnswer,
  FormGroupRadiusStatus,
  FormGroupResponseCode,
  FormGroupRole,
  FormGroupRunActions,
  FormGroupScopes,
  FormGroupStatus
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
