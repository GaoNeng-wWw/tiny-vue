import type { IColorSelectPanelRef } from '@/types'
import { parseHSV } from './utils/hsv-to-rgb'

export const updateModelValue = (val, emit) => {
  emit('update:modelValue', val)
}

export const toggleVisible = (isShow: IColorSelectPanelRef<boolean>) => {
  return (val) => {
    isShow.value = val
  }
}

export const useEvent = (state, emit, changeVisible) => {
  const onConfirm = (val) => {
    state.hex = val
    if (val.includes('hsv') || val.includes('hsva')) {
      const { r, g, b } = parseHSV(val)
      state.hex = `rgb(${r}, ${g}, ${b})`
    }
    updateModelValue(val, emit)
    emit('confirm', val)
    changeVisible(false)
  }
  const onCancel = () => {
    changeVisible(false)
    emit('cancel')
  }
  return {
    onConfirm,
    onCancel
  }
}
