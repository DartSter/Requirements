


export interface ITheme {
    text: string[]
    codeExample?: string[]
}


export interface IThems {
    theme: string
    needToKnow: ITheme |any
}

export interface IRequirement {
    title: string
    thems:IThems[]
}

