import styled from 'vue-styled-components'
import { Box } from "./Box";
import css from "@styled-system/css";

export const TYButton = styled(Box)`
${props => {
    return css({
        fontFamily: "'Rubik',sans-serif",
        padding: "12px",
        backgroundColor: props.theme.colors["orange"],
        lineHeight: 1.15,
        fontSize: "14px",
        color: props.theme.colors["white"],
        fontWeight: 500,
        borderRadius: "6px",
    })()
}}`