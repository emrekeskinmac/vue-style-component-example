export const marginProps = {
    m: { type: String, default: null },
    margin: { type: String, default: null },
    marginTop: { type: String, default: null },
    mr: { type: String, default: null },
    marginRight: { type: String, default: null },
    mb: { type: String, default: null },
    marginBottom: { type: String, default: null },
    ml: { type: String, default: null },
    marginLeft: { type: String, default: null },
    mx: { type: String, default: null },
    my: { type: String, default: null },
}
export const paddingProps = {
    p: { type: String, default: null },
    padding: { type: String, default: null },
    paddingTop: { type: String, default: null },
    pr: { type: String, default: null },
    paddingRight: { type: String, default: null },
    pb: { type: String, default: null },
    paddingBottom: { type: String, default: null },
    pl: { type: String, default: null },
    paddingLeft: { type: String, default: null },
    px: { type: String, default: null },
    py: { type: String, default: null },
}

export const colorProps = {
    color: { type: String, default: null },
    bg: { type: String, default: null },
    backgroundColor: { type: String, default: null },
    opacity: { type: String, default: null },
}


export const typographyProps = {
    fontFamily: { type: String, default: null },
    fontSize: { type: String, default: null },
    fontWeight: { type: String, default: null },
    lineHeight: { type: String, default: null },
    letterSpacing: { type: String, default: null },
    textAlign: { type: String, default: null },
    fontStyle: { type: String, default: null },
}

export const layoutProps = {

    width: { type: String, default: null },
    height: { type: String, default: null },
    minWidth: { type: String, default: null },
    maxWidth: { type: String, default: null },
    minHeight: { type: String, default: null },
    maxHeight: { type: String, default: null },
    size: { type: String, default: null },
    display: { type: String, default: null },
    verticalAlign: { type: String, default: null },
    overflow: { type: String, default: null },
    overflowX: { type: String, default: null },
    overflowY: { type: String, default: null },
}

export const flexboxProps = {

    alignItems: { type: String, default: null },
    alignContent: { type: String, default: null },
    justifyItems: { type: String, default: null },
    justifyContent: { type: String, default: null },
    flexWrap: { type: String, default: null },
    flexDirection: { type: String, default: null },
    flex: { type: String, default: null },
    flexGrow: { type: String, default: null },
    flexShrink: { type: String, default: null },
    flexBasis: { type: String, default: null },
    justifySelf: { type: String, default: null },
    alignSelf: { type: String, default: null },
    order: { type: String, default: null },
}


export const backgroundProps = {
    background: { type: String, default: null },
    backgroundImage: { type: String, default: null },
    backgroundSize: { type: String, default: null },
    backgroundPosition: { type: String, default: null },
    backgroundRepeat: { type: String, default: null },
}

export const borderProps = {
    border: { type: String, default: null },
    borderWidth: { type: String, default: null },
    borderStyle: { type: String, default: null },
    borderColor: { type: String, default: null },
    borderRadius: { type: String, default: null },
    borderTop: { type: String, default: null },
    borderTopWidth: { type: String, default: null },
    borderTopStyle: { type: String, default: null },
    borderTopColor: { type: String, default: null },
    borderTopLeftRadius: { type: String, default: null },
    borderTopRightRadius: { type: String, default: null },
    borderRight: { type: String, default: null },
    borderRightWidth: { type: String, default: null },
    borderRightStyle: { type: String, default: null },
    borderRightColor: { type: String, default: null },
    borderBottom: { type: String, default: null },
    borderBottomWidth: { type: String, default: null },
    borderBottomStyle: { type: String, default: null },
    borderBottomColor: { type: String, default: null },
    borderBottomLeftRadius: { type: String, default: null },
    borderBottomRightRadius: { type: String, default: null },
    borderLeft: { type: String, default: null },
    borderLeftWidth: { type: String, default: null },
    borderLeftStyle: { type: String, default: null },
    borderLeftColor: { type: String, default: null },
    borderX: { type: String, default: null },
    borderY: { type: String, default: null },
}

export const positionProps = {
    position: { type: String, default: null },
    zIndex: { type: String, default: null },
    top: { type: String, default: null },
    right: { type: String, default: null },
    bottom: { type: String, default: null },
    left: { type: String, default: null },
}

export const shadowProps = {
    textShadow: { type: String, default: null },
    boxShadow: { type: String, default: null },
}


export const spaceProps = { ...marginProps, ...paddingProps } 