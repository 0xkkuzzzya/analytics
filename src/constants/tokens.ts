
export enum TokenType {
        qAsset,
        collateral
}

interface TokenInfo {
        Denom: string
        Base: string
        Network: string
        Decimals: number
        Type: TokenType
}

export const TOKEN_INFO_QASSET: TokenInfo[] = [
        {
                Denom: "uusd",
                Base: "USQ",
                Network: "Qube Testnet",
                Decimals: 6,
                Type: TokenType.qAsset
        },
]

export const TOKEN_INFO_COLLATERAL: TokenInfo[] = [
        {
                Denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
                Base: "ATOM",
                Network: "Cosmos Hub",
                Decimals: 6,
                Type: TokenType.collateral
        },
]