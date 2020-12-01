import BaseArray from './BaseArray'
import BaseButtonDelete from './BaseButtonDelete'
import BaseButtonSave from './BaseButtonSave'
import BaseButtonService from './BaseButtonService'
import BaseButtonUpload from './BaseButtonUpload'
import BaseContainerLoading from './BaseContainerLoading'
import BaseForm from './BaseForm'
import BaseFormButtonBar from './BaseFormButtonBar'
import BaseFormGroup from './BaseFormGroup'
import BaseFormGroupArray, { props as BaseFormGroupArrayProps } from './BaseFormGroupArray'
import BaseFormGroupArrayDraggable, { props as BaseFormGroupArrayDraggableProps } from './BaseFormGroupArrayDraggable'
import BaseFormGroupChosenCountry from './BaseFormGroupChosenCountry'
import BaseFormGroupChosenMultiple from './BaseFormGroupChosenMultiple'
import BaseFormGroupChosenMultipleSearchable, { props as BaseFormGroupChosenMultipleSearchableProps } from './BaseFormGroupChosenMultipleSearchable'
import BaseFormGroupChosenOne from './BaseFormGroupChosenOne'
import BaseFormGroupChosenOneSearchable, { props as BaseFormGroupChosenOneSearchableProps } from './BaseFormGroupChosenOneSearchable'
import BaseFormGroupInput from './BaseFormGroupInput'
import BaseFormGroupInputMultiplier from './BaseFormGroupInputMultiplier'
import BaseFormGroupInputNumber from './BaseFormGroupInputNumber'
import BaseFormGroupInputPassword from './BaseFormGroupInputPassword'
import BaseFormGroupInputPasswordTest, { props as BaseFormGroupInputPasswordTestProps } from './BaseFormGroupInputPasswordTest'
import BaseFormGroupInputTest, { props as BaseFormGroupInputTestProps } from './BaseFormGroupInputTest'
import BaseFormGroupTextarea from './BaseFormGroupTextarea'
import BaseFormGroupTextareaUpload, { props as BaseFormGroupTextareaUploadProps } from './BaseFormGroupTextareaUpload'
import BaseFormGroupToggle, { props as BaseFormGroupToggleProps } from './BaseFormGroupToggle'
import BaseFormGroupToggleDisabledEnabled from './BaseFormGroupToggleDisabledEnabled'
import BaseFormGroupToggleFalseTrue from './BaseFormGroupToggleFalseTrue'
import BaseFormGroupToggleNoYes from './BaseFormGroupToggleNoYes'
import BaseFormGroupToggleNY from './BaseFormGroupToggleNY'
import BaseFormGroupToggleOffOn from './BaseFormGroupToggleOffOn'
import BaseFormTab from './BaseFormTab'
import BaseInput from './BaseInput'
import BaseInputArray, { props as BaseInputArrayProps } from './BaseInputArray'
import BaseInputChosenMultiple from './BaseInputChosenMultiple'
import BaseInputChosenOne from './BaseInputChosenOne'
import BaseInputChosenOneSearchable from './BaseInputChosenOneSearchable'
import BaseInputGroup from './BaseInputGroup'
import BaseInputGroupTextarea from './BaseInputGroupTextarea'
import BaseInputGroupTextareaUpload, { props as BaseInputGroupTextareaUploadProps } from './BaseInputGroupTextareaUpload'
import BaseInputGroupMultiplier from './BaseInputGroupMultiplier'
import BaseInputNumber from './BaseInputNumber'
import BaseInputPassword from './BaseInputPassword'
import BaseInputRange from './BaseInputRange'
import BaseInputToggle, { props as BaseInputToggleProps } from './BaseInputToggle'
import BaseInputToggleAdvancedMode from './BaseInputToggleAdvancedMode'
import BaseView from './BaseView'

import { mergeProps, renderHOCWithScopedSlots } from './utils'

export {
  // view
  BaseView,

  // form
  BaseForm,
  BaseFormButtonBar,
  BaseFormTab,

  // form group
  BaseFormGroup,
  BaseFormGroupArray, BaseFormGroupArrayProps,
  BaseFormGroupArrayDraggable, BaseFormGroupArrayDraggableProps,
  BaseFormGroupChosenCountry,
  BaseFormGroupChosenMultiple,
  BaseFormGroupChosenMultipleSearchable, BaseFormGroupChosenMultipleSearchableProps,
  BaseFormGroupChosenOne,
  BaseFormGroupChosenOneSearchable, BaseFormGroupChosenOneSearchableProps,
  BaseFormGroupInput,
  BaseFormGroupInputMultiplier,
  BaseFormGroupInputNumber,
  BaseFormGroupInputPassword,
  BaseFormGroupInputPasswordTest, BaseFormGroupInputPasswordTestProps,
  BaseFormGroupInputTest, BaseFormGroupInputTestProps,
  BaseFormGroupTextarea,
  BaseFormGroupTextareaUpload, BaseFormGroupTextareaUploadProps,
  BaseFormGroupToggle, BaseFormGroupToggleProps,
  BaseFormGroupToggleDisabledEnabled,
  BaseFormGroupToggleFalseTrue,
  BaseFormGroupToggleNoYes,
  BaseFormGroupToggleNY,
  BaseFormGroupToggleOffOn,

  // form inputs
  BaseInput,
  BaseInputArray, BaseInputArrayProps,
  BaseInputChosenMultiple,
  BaseInputChosenOne,
  BaseInputChosenOneSearchable,
  BaseInputGroup,
  BaseInputNumber,
  BaseInputPassword,
  BaseInputRange,
  BaseInputToggle, BaseInputToggleProps,
  BaseInputToggleAdvancedMode,

  // bootstrap wrappers
  BaseInputGroupMultiplier,
  BaseInputGroupTextarea,
  BaseInputGroupTextareaUpload, BaseInputGroupTextareaUploadProps,

  // array wrapper
  BaseArray,

  // buttons
  BaseButtonDelete,
  BaseButtonSave,
  BaseButtonService,
  BaseButtonUpload,

  // containers
  BaseContainerLoading,

  // utils
  mergeProps,
  renderHOCWithScopedSlots
}
