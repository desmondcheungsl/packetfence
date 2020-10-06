import { computed, customRef, inject, ref, set, toRefs, unref } from '@vue/composition-api'

export const getFormNamespace = (ns, o) =>
  ns.reduce((xs, x) => (xs && x in xs) ? xs[x] : undefined, o)

export const setFormNamespace = (ns, o, v) => {
  const [ nsf, ...nsr ] = ns
  if (nsr.length) { // recurse
    if (!(nsf && nsf in o))
      set(o, nsf, (+nsr[0] === parseInt(nsr[0]))
        ? [] // o[nsf] = []
        : {} // o[nsf] = {}
      )
    return setFormNamespace(nsr, o[nsf], v)
  }
  else
    set(o, nsf, v) // o[nsf] = v
  return o[nsf]
}

export const useInputValueProps = {
  namespace: {
    type: String
  },
  value: {
    default: null
  }
}

export const useInputValue = (props, { emit }) => {

  const {
    namespace,
    value
  } = toRefs(props) // toRefs maintains reactivity w/ destructuring

  let inputValue = ref(null)
  let onInput
  let onChange

  if (unref(namespace)) {
    // use namespace
    const form = inject('form', ref({}))
    const namespaceArr = computed(() => unref(namespace).split('.'))

    inputValue = customRef((track, trigger) => ({
      get() {
        track()
        return getFormNamespace(unref(namespaceArr), unref(form))
      },
      set(newValue) {
        setFormNamespace(unref(namespaceArr), unref(form), newValue)
        trigger()
      }
    }))
    onInput = value => {
      inputValue.value = value
    }
    onChange = value => {
      inputValue.value = value
    }
  }
  else {
    // use v-model
    inputValue = value
    onInput = value => emit('input', value)
    onChange = value => emit('change', value)
  }

  return {
    // props
    value: inputValue,

    //events
    onInput,
    onChange
  }
}
