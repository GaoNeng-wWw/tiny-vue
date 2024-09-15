import type { BaseViewerOptions, ImportXMLError } from 'bpmn-js/lib/BaseViewer'
import Modeler from 'bpmn-js/lib/Modeler'
import { of } from './utils'
import type Canvas from 'diagram-js/lib/core/Canvas'

export interface useBPMNOptions extends BaseViewerOptions {
  modeler?: typeof Modeler
  getData?: () => Promise<string>
  xmlContent?: string
  onImportXmlError?: (err: ImportXMLError) => void
  onImportXmlSuccess?: (warnings: string[]) => void
  onSuccess: ((modeler: Modeler, canvas: Canvas) => void)[]
}

export const useBPMN = (options: useBPMNOptions) => {
  const modelerClazz = options.modeler ?? Modeler
  const modeler = of<Modeler, typeof Modeler>(modelerClazz, options)
  const { getData } = options
  const canvas = modeler.get<Canvas>('canvas')
  let done = false
  if (getData) {
    getData()
      .then((content) => {
        return modeler.importXML(content)
      })
      .then((res) => {
        options.onImportXmlSuccess?.(res.warnings)
        options.onSuccess.forEach((f) => f(modeler, canvas))
      })
      .catch((e) => {
        const err = e as ImportXMLError
        options.onImportXmlError?.(err)
      })
      .finally(() => {
        done = true
      })
  } else {
    modeler
      .importXML(options.xmlContent ?? '')
      .then((res) => {
        options.onImportXmlSuccess?.(res.warnings)
        options.onSuccess.forEach((f) => f(modeler, canvas))
        done = true
      })
      .catch((e) => {
        const err = e as ImportXMLError
        options.onImportXmlError?.(err)
      })
      .finally(() => {
        done = true
      })
  }
  return { modeler, canvas, done }
}
