import { configureChains, createClient, type Chain } from '@wagmi/core'
import { publicProvider } from '@wagmi/core/providers/public'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import {
  L1_CHAIN_ID,
  L1_CHAIN_NAME,
  L1_RPC,
  L1_EXPLORER_URL,
  L2_CHAIN_ID,
  L2_CHAIN_NAME,
  L2_RPC,
  L2_EXPLORER_URL,
} from '$env/static/public'

const chainIdToRpcUrl = {
  [L1_CHAIN_ID]: L1_RPC,
  [L2_CHAIN_ID]: L2_RPC,
}
const mainnetRpcUrls = { http: [L1_RPC] }
const taikoRpcUrls = { http: [L2_RPC] }

const mainnet: Chain = {
  id: L1_CHAIN_ID,
  name: L1_CHAIN_NAME,
  network: 'Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: mainnetRpcUrls,
    public: mainnetRpcUrls,
  },
  blockExplorers: {
    default: {
      name: 'Main',
      url: L1_EXPLORER_URL,
    },
  },
}

const taiko: Chain = {
  id: L2_CHAIN_ID,
  name: L2_CHAIN_NAME,
  network: 'Taiko',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: taikoRpcUrls,
    public: taikoRpcUrls,
  },
  blockExplorers: {
    default: {
      name: 'Taiko',
      url: L2_EXPLORER_URL,
    },
  },
}

const { chains, provider } = configureChains(
  [mainnet, taiko],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => ({ http: chainIdToRpcUrl[chain.id] }),
    }),
  ],
)

const client = createClient({
  provider,
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: 'Taiko Bridge',
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: 'Unknown',
    //   },
    // }),
  ],
})

export default client
