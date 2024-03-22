export type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (...args: any[]) => any;
  onRightClick?:
  onDoubleClick?: (...args: any[]) => any;
  onHover?: (...args: any[]) => any;
  onDrag?: (...args: any[]) => any;
  onMouseEnter
  onMouseLeave
}


onclick	A user clicks on an element
oncontextmenu	A user right-clicks on an element
ondblclick	A user double-clicks on an element
onmousedown	A mouse button is pressed over an element
onmouseenter	The mouse pointer moves into an element
onmouseleave	The mouse pointer moves out of an element
onmousemove	The mouse pointer moves over an element
onmouseout	The mouse pointer moves out of an element
onmouseover	The mouse pointer moves onto an element
onmouseup	A mouse button is released over an element