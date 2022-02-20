import { AbstractIconLib } from '../iconlib.js'

let iconPrefix = 'fas fa-'
const mapping = {
  collapse: 'caret-down',
  expand: 'caret-right',
  delete: 'trash',
  edit: 'pen',
  add: 'plus',
  subtract: 'minus',
  cancel: 'ban',
  save: 'floppy-disk',
  moveup: 'arrow-up',
  moveright: 'arrow-right',
  movedown: 'arrow-down',
  moveleft: 'arrow-left',
  copy: 'copy',
  clear: 'circle-xmark',
  time: 'clock',
  calendar: 'calendar',
  edit_properties: 'list'
}

export class fontawesome6Iconlib extends AbstractIconLib {
  constructor (styles) {
    if (styles) iconPrefix = `${styles} fa-`;
    super(iconPrefix, mapping)
  }
}
