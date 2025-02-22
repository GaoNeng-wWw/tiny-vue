export const api = ['state']

export const renderless = (props, { reactive, provide }, { parent }) => {
  const state = reactive({
    tag: 'div',
    isActive: false,
    eachBlock: [],
    sliderWidth: 0,
    sliderHeight: 0,
    sliderSpace: props.size === 'large' ? 4 : 2,
    sliderWidthData: [],
    sliderHeightData: [],
    eachBlockIndex: [],
    eachBlockData: {},
    currentIndex: 0,
    sliderCount: 0
  })

  parent.$on('handleChange', (value) => {
    state.eachBlockIndex.find((e, index) => {
      if (e.index === value) {
        state.currentIndex = index
      }
    })

    state.sliderSpace = state.eachBlock[state.currentIndex]
    state.sliderWidth = state.sliderWidthData[state.currentIndex]
    state.sliderHeight = state.sliderHeightData[state.currentIndex]

    parent.$emit('change', value)

    state.sliderCount += 1
  })

  parent.$on('labelValue', (value) => {
    state.eachBlockIndex.push({ index: value })
    if (props.modelValue === value) {
      state.isActive = true
    }
  })

  parent.$on('eachBlock', (left, width, height) => {
    state.eachBlock.push(left)
    state.sliderWidthData.push(width)
    state.sliderHeightData.push(height)
    state.sliderWidth = state.sliderWidthData[0]
    state.sliderHeight = state.sliderHeightData[0]
  })

  const api = {}

  Object.assign(api, { state })

  provide('sliderType', props.type)

  provide('sliderSize', props.size)

  return api
}
