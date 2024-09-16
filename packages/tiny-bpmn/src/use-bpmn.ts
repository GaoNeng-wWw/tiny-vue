import type { BaseViewerOptions, EventBus, ImportXMLError } from 'bpmn-js/lib/BaseViewer'
import Modeler from 'bpmn-js/lib/Modeler'
import { of } from './utils'
import type Canvas from 'diagram-js/lib/core/Canvas'

export interface useBPMNOptions extends BaseViewerOptions {
  modeler?: typeof Modeler
  getData?: () => Promise<string>
  xmlContent?: string
  onImportXmlError?: (err: ImportXMLError) => void
  onImportXmlSuccess?: (warnings: string[]) => void
}

export const useBPMN = (options: useBPMNOptions) => {
  const modelerClazz = options.modeler ?? Modeler
  const modeler = of<Modeler, typeof Modeler>(modelerClazz, options)
  const { getData } = options
  const canvas = modeler.get<Canvas>('canvas')
  const importXML = (content: string) => {
    if (!content) {
      return
    }
    modeler
      .importXML(content ?? '')
      .then((res) => {
        options.onImportXmlSuccess?.(res.warnings)
      })
      .catch((e) => {
        const err = e as ImportXMLError
        options.onImportXmlError?.(err)
      })
  }
  if (getData) {
    getData().then((content) => {
      return importXML(content)
    })
  } else {
    importXML(options.xmlContent ?? '')
  }
  const eventBus = modeler.get<EventBus<unknown>>('eventBus')
  const on = (name: string, f: (e: any) => void) => {
    modeler.on(name, f)
  }
  return { modeler, canvas, on, eventBus, importXML }
}
