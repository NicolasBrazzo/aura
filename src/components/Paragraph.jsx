const styleP = {
    maxWidth: "100%",
    textAlign: "center"
}

export const Paragraph = ({ text }) => {
    return <p style={styleP}> {text} </p>
}