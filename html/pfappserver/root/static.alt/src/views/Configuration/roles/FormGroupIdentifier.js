import { BaseFormGroupInput, BaseFormGroupInputProps, mergeProps } from '@/components/new/'
import i18n from '@/utils/locale'

// @vue/component
export default {
  name: 'form-group-identifier',
  extends: BaseFormGroupInput,
  inheritAttrs: false,
  props: mergeProps(
    BaseFormGroupInputProps,
    {
      columnLabel: i18n.t('Name')
    }
  )
}
