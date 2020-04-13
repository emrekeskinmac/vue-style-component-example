import styled from 'vue-styled-components'

import {
    get,
    layout,
    color,
    space,
    background,
    border,
    grid,
    position,
    shadow,
    typography,
    flexbox,
} from "styled-system";
import {
    layoutProps,
    spaceProps,
    colorProps,
    backgroundProps,
    borderProps,
    positionProps,
    shadowProps,
    typographyProps,
    flexboxProps,
} from "./style-system-props";

const isNumber = n => typeof n === "number" && !isNaN(n);
const getWidth = (n, scale) =>
    get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + "%");


export const config = {
    roundedTop: {
        properties: ["borderTopLeftRadius", "borderTopRightRadius"],
        scale: "radii",
    },
    roundedBottom: {
        properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
        scale: "radii",
    },
    roundedLeft: {
        properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
        scale: "radii",
    },
    roundedRight: {
        properties: ["borderTopRightRadius", "borderBottomRightRadius"],
        scale: "radii",
    },
    roundedTopRight: {
        property: "borderTopRightRadius",
        scale: "radii",
    },
    roundedTopLeft: {
        property: "borderTopLeftRadius",
        scale: "radii",
    },
    roundedBottomRight: {
        property: "borderBottomRightRadius",
        scale: "radii",
    },
    roundedBottomLeft: {
        property: "borderBottomLeftRadius",
        scale: "radii",
    },
    rounded: {
        property: "borderRadius",
        scale: "radii",
    },
    d: {
        property: "display",
    },
    w: {
        property: "width",
        scale: "sizes",
        transform: getWidth,
    },
    minW: {
        property: "minWidth",
        scale: "sizes",
    },
    maxW: {
        property: "maxWidth",
        scale: "sizes",
    },
    h: {
        property: "height",
        scale: "sizes",
    },
    minH: {
        property: "minHeight",
        scale: "sizes",
    },
    maxH: {
        property: "maxHeight",
        scale: "sizes",
    },
    bgImg: {
        property: "backgroundImage",
    },
    bgImage: {
        property: "backgroundImage",
    },
    bgSize: {
        property: "backgroundSize",
    },
    bgPos: {
        property: "backgroundPosition",
    },
    bgRepeat: {
        property: "backgroundRepeat",
    },
    pos: {
        property: "position",
    },
    flexDir: {
        property: "flexDirection",
    },
    shadow: {
        property: "boxShadow",
        scale: "shadows",
    },
    textDecoration: { property: "textDecoration" },
    overflowX: true,
    overflowY: true,
    textTransform: true,
    animation: true,
    appearance: true,
    transform: true,
    transformOrigin: true,
    visibility: true,
    whiteSpace: true,
    userSelect: true,
    pointerEvents: true,
    wordBreak: true,
    overflowWrap: true,
    textOverflow: true,
    boxSizing: true,
    cursor: true,
    resize: true,
    transition: true,
    listStyleType: true,
    listStylePosition: true,
    listStyleImage: true,
    fill: {
        property: "fill",
        scale: "colors",
    },
    stroke: {
        property: "stroke",
        scale: "colors",
    },
    objectFit: true,
    objectPosition: true,
    backgroundAttachment: {
        property: "backgroundAttachment",
    },
    outline: true,
    float: true,
    willChange: true,
};

config.bgAttachment = config.backgroundAttachment;
config.textDecor = config.textDecoration;
config.listStylePos = config.listStylePosition;
config.listStyleImg = config.listStyleImage;

const transformAlias = (prop, propValue) => {
    const configKeys = Object.keys(config);
    let result = {};

    if (configKeys.includes(prop)) {
        const { properties, property } = config[prop];
        if (properties) {
            properties.forEach(_cssProp => (result[_cssProp] = propValue));
        }
        if (property) {
            result[property] = propValue;
        }
        if (config[prop] === true) {
            result[prop] = propValue;
        }
    } else {
        result[prop] = propValue;
    }
    return result;
};


export const tx = props => {
    let result = {};
    for (let prop in props) {
        if (typeof props[prop] === "object" && !Array.isArray(props[prop])) {
            result = { ...result, [prop]: tx(props[prop]) };
        } else {
            result = { ...result, ...transformAlias(prop, props[prop]) };
        }
    }
    return result;
};

export const Box = styled("div", {
    ...layoutProps,
    ...colorProps,
    ...spaceProps,
    ...backgroundProps,
    ...borderProps,
    ...positionProps,
    ...shadowProps,
    ...typographyProps,
    ...flexboxProps
})`
    ${layout}
    ${color}
    ${space}
    ${background}
    ${border}
    ${grid}
    ${position}
    ${shadow}
    ${typography}
    ${flexbox}
`;
