const If = ({children,condition}) => {
     console.log('condition', condition)
     if (condition) return children
    return null
}

export default If