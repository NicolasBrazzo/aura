const mapText = {
    primary: "h1",
    secondary: "h2"
}

const styleTitle = {
    maxWidth: "100%",
    textAlign: "center"
}

export const Title = ({ text, type }) => {
    const Tag = mapText[type] || "span";
    return <Tag style={styleTitle}> {text} </Tag>
}