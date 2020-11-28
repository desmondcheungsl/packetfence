import { ref, watch } from '@vue/composition-api'
import { useDebouncedWatchHandler } from '@/composables/useDebounce'
import useEventJail from '@/composables/useEventJail'

export const useViewCollectionItemFixedProps = {
  id: {
    type: String
  },
}

export const useViewCollectionItemFixed = (collection, props, context) => {

  const {
    useItemTitle = () => {},
    useStore = () => {},
  } = collection

  // template refs
  const rootRef = ref(null)
  useEventJail(rootRef)

  // state
  const form = ref({})
  const title = useItemTitle(props)
  const isModified = ref(false)

  // unhandled custom props
  const customProps = ref(context.attrs)

  const isDeletable = false

  const isValid = useDebouncedWatchHandler(form, () => (!rootRef.value || rootRef.value.querySelectorAll('.is-invalid').length === 0))

  const {
    isLoading,
    getItem,
    updateItem,
  } = useStore(props, context, form)

  const init = () => {
    return new Promise((resolve, reject) => {
      getItem().then(item => {
        form.value = item
        resolve()
      }).catch(() => {
        form.value = {}
        reject()
      })
    })
  }

  const onReset = () => init().then(() => isModified.value = false)

  const onSave = () => {
    isModified.value = true
    updateItem()
  }

  watch(props, () => init(), { deep: true, immediate: true })

  return {
    rootRef,
    form,
    title,
    isModified,
    customProps,
    isDeletable,
    isValid,
    isLoading,
    onReset,
    onSave,

    // to overload
    scopedSlotProps: props,
    titleBadge: undefined
  }
}