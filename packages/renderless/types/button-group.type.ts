import type { ExtractPropTypes } from 'vue'
import { buttonGroupProps } from '@/button-group/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { handleChange, handleClick, moreNodeClick, getItemClass } from '../src/button-group'

export type IButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export interface IButtonGroupItemClass {
  disabled?: boolean
  plain?: boolean
}
export interface IButtonGroupNode {
  text: string
  value: string
  disabled: boolean
  [otherKey: string]: any
}

export interface IButtonGroupState {
  value: IButtonGroupProps['modelValue']
  buttonData: IButtonGroupNode[]
  moreData: IButtonGroupNode[]
  formDisabled: boolean
  disabled: boolean
}

export type IButtonGroupRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IButtonGroupState
  props: IButtonGroupProps
}

export interface IButtonGroupApi {
  state: IButtonGroupState
  handleChange: ReturnType<typeof handleChange>
  handleClick: ReturnType<typeof handleClick>
  moreNodeClick: ReturnType<typeof moreNodeClick>
  getItemClass: ReturnType<typeof getItemClass>
}

export type IButtonGroupRenderlessParamUtils = ISharedRenderlessParamUtils<never>
