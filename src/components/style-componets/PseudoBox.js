import styled from 'vue-styled-components'
import css from "@styled-system/css";
import { tx, Box } from "./Box";

const hover = "&:hover";
const active = "&:active, &[data-active=true]";
const focus = "&:focus";
const visited = "&:visited";
const even = "&:nth-of-type(even)";
const odd = "&:nth-of-type(odd)";
const disabled =
    "&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover";
const checked = "&[aria-checked=true]";
const mixed = "&[aria-checked=mixed]";
const selected = "&[aria-selected=true]";
const invalid = "&[aria-invalid=true]";
const pressed = "&[aria-pressed=true]";
const readOnly = "&[aria-readonly=true], &[readonly]";
const first = "&:first-of-type";
const last = "&:last-of-type";
const expanded = "&[aria-expanded=true]";
const grabbed = "&[aria-grabbed=true]";
const notFirst = "&:not(:first-of-type)";
const notLast = "&:not(:last-of-type)";
const groupHover = "[role=group]:hover &";

export const PseudoBox = styled(Box, {
    _after: { type: Object, default: null },
    _focus: { type: Object, default: null },
    _selected: { type: Object, default: null },
    _focusWithin: { type: Object, default: null },
    _hover: { type: Object, default: null },
    _invalid: { type: Object, default: null },
    _active: { type: Object, default: null },
    _disabled: { type: Object, default: null },
    _grabbed: { type: Object, default: null },
    _pressed: { type: Object, default: null },
    _expanded: { type: Object, default: null },
    _visited: { type: Object, default: null },
    _before: { type: Object, default: null },
    _readOnly: { type: Object, default: null },
    _first: { type: Object, default: null },
    _notFirst: { type: Object, default: null },
    _notLast: { type: Object, default: null },
    _last: { type: Object, default: null },
    _placeholder: { type: Object, default: null },
    _checked: { type: Object, default: null },
    _groupHover: { type: Object, default: null },
    _mixed: { type: Object, default: null },
    _odd: { type: Object, default: null },
    _even: { type: Object, default: null },
})`
    ${props => {
        return css({
            [hover]: tx(props._hover),
            [focus]: tx(props._focus),
            [active]: tx(props._active),
            [visited]: tx(props._visited),
            [disabled]: tx(props._disabled),
            [selected]: tx(props._selected),
            [invalid]: tx(props._invalid),
            [expanded]: tx(props._expanded),
            [grabbed]: tx(props._grabbed),
            [readOnly]: tx(props._readOnly),
            [first]: tx(props._first),
            [notFirst]: tx(props._notFirst),
            [notLast]: tx(props._notLast),
            [last]: tx(props._last),
            [odd]: tx(props._odd),
            [even]: tx(props._even),
            [mixed]: tx(props._mixed),
            [checked]: tx(props._checked),
            [pressed]: tx(props._pressed),
            [groupHover]: tx(props._groupHover),
            "&:before": tx(props._before),
            "&:after": tx(props._after),
            "&:focus-within": tx(props._focusWithin),
            "&::placeholder": props._placeholder,
        });
    }}`;