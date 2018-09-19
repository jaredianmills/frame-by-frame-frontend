import { SET_CURRENT_PROJECT } from './types'

export function selectProjectAction(project) {
  return {
    type: SET_CURRENT_PROJECT,
    payload: project
  }
}
