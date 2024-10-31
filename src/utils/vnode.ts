import { type Component, type VNodeChild, render, h } from 'vue'

export interface ICreateVNodeOptions {
  component: Component
  componentProps?: any
  children?: () => VNodeChild
}

export const vNodeToDom = (options: ICreateVNodeOptions) => {
  const { component, componentProps, children } = options
  const container = document.createElement('div')
  const instance = h(component, { ...componentProps }, children)
  render(instance, container)

  return instance.el as HTMLElement
}
