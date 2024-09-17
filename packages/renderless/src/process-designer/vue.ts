import type { ISharedRenderlessParamUtils, ISharedRenderlessParamHooks, IProcessDesignerExpose } from '@/types'
import type { IProcessDesignerProps } from '@/types'
import { onImportFail, onImportSuccess } from '.'

export const api = ['render', 'properties']
export const renderless = (
  props: IProcessDesignerProps,
  ctx: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils<null>,
  extend: Record<string, Function>
) => {
  const render = ctx.ref()
  const properties = ctx.ref()
  const expose = ctx.reactive<IProcessDesignerExpose>({
    modeler: null,
    eventBus: null,
    on: null,
    canvas: null
  })
  const api = {
    render,
    properties,
    expose
  }
  ctx.nextTick(() => {
    const { canvas, modeler, eventBus, on, importXML } = extend.useBPMN({
      container: render.value,
      propertiesPanel: {
        parent: '#properties'
      },
      additionalModules: [
        extend.BpmnPropertiesPanelModule,
        extend.BpmnPropertiesProviderModule,
        ...(props.additionalModules ?? [])
      ],
      modeler: props.modeler,
      onImportXmlSuccess: (warnings: string[]) => onImportSuccess(utils.emit, warnings),
      onImportXmlError: (err) => onImportFail(utils.emit, err),
      xmlContent: props.data
    })
    if (props.data) {
      ctx.watch(
        () => props.data,
        () => {
          importXML(props.data)
        }
      )
    }
    if (props.getData) {
      props
        .getData()
        .then((content) => {
          importXML(content)
        })
        .catch(() => {})
    }
    expose.modeler = modeler
    expose.on = on
    expose.eventBus = eventBus
    expose.canvas = canvas
    utils.emit('mounted', expose)
  })
  return api
}
