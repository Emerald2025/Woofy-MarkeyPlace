/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Marketplace, MarketplaceInterface } from "../Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContractImplementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "_woofyContractAddr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "commission",
        type: "uint256",
      },
    ],
    name: "CommissionReceivedByMarketplace",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "boughtBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NftBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "NftContractCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mintedTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenUri",
        type: "string",
      },
    ],
    name: "NftMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NftOnSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NftSaleCancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "createNftContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllNftCollections",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContractAddr",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "metadataUri",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
            ],
            internalType: "struct Marketplace.Nft[]",
            name: "nftsInCollection",
            type: "tuple[]",
          },
        ],
        internalType: "struct Marketplace.NftCollection[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNftCollectionsWhereTokensOnSale",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContractAddr",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "metadataUri",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
            ],
            internalType: "struct Marketplace.Nft[]",
            name: "nftsInCollection",
            type: "tuple[]",
          },
        ],
        internalType: "struct Marketplace.NftCollection[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNftsCollectionsAuthored",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContractAddr",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "metadataUri",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
            ],
            internalType: "struct Marketplace.Nft[]",
            name: "nftsInCollection",
            type: "tuple[]",
          },
        ],
        internalType: "struct Marketplace.NftCollection[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNftsCollectionsWhereOwnerOwnsTokens",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContractAddr",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "metadataUri",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
            ],
            internalType: "struct Marketplace.Nft[]",
            name: "nftsInCollection",
            type: "tuple[]",
          },
        ],
        internalType: "struct Marketplace.NftCollection[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftContractImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "woofyContractAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516200270b3803806200270b8339810160408190526200002691620000d7565b6001600055620000363362000068565b600480546001600160a01b039384166001600160a01b031991821617909155600580549290931691161790556200010e565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b0381168114620000d257600080fd5b919050565b60008060408385031215620000ea578182fd5b620000f583620000ba565b91506200010560208401620000ba565b90509250929050565b6125ed806200011e6000396000f3fe6080604052600436106100b55760003560e01c80635e210e43116100695780638da5cb5b1161004e5780638da5cb5b146101cd578063f2fde38b146101eb578063fc94a6c31461020b57600080fd5b80635e210e43146101a3578063715018a6146101b857600080fd5b806339c5b9ad1161009a57806339c5b9ad146101415780633e90aafd146101565780635567f88a1461016b57600080fd5b8063127806ea146100f457806338b11f601461011657600080fd5b366100ef576040513481527f3c5dd2811efb49b2e0d2891d798064095c84e036929d2b1b7dcd3079583eebaa9060200160405180910390a1005b600080fd5b34801561010057600080fd5b5061011461010f3660046121bb565b61022b565b005b34801561012257600080fd5b5061012b610385565b6040516101389190612378565b60405180910390f35b34801561014d57600080fd5b5061012b6108d9565b34801561016257600080fd5b5061012b610f6e565b34801561017757600080fd5b5060045461018b906001600160a01b031681565b6040516001600160a01b039091168152602001610138565b3480156101af57600080fd5b5061012b611594565b3480156101c457600080fd5b50610114611bb5565b3480156101d957600080fd5b506001546001600160a01b031661018b565b3480156101f757600080fd5b50610114610206366004612063565b611c1b565b34801561021757600080fd5b5060055461018b906001600160a01b031681565b600260005414156102835760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600090815560045461029f906001600160a01b0316611cfd565b6005546040517fd6d0faee0000000000000000000000000000000000000000000000000000000081529192506001600160a01b038084169263d6d0faee926102fa928c928c928c928c928c928c923092911690600401612459565b600060405180830381600087803b15801561031457600080fd5b505af1158015610328573d6000803e3d6000fd5b50505050610340816002611db890919063ffffffff16565b5060405133906001600160a01b038316907f27bd997932ca47d271a0b4c3fba42e35c3c90bc1e24155b7c11f6bcf3a42b49c90600090a3505060016000555050505050565b606060006103936002611dd6565b905060008167ffffffffffffffff8111156103be57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561043a57816020015b6104276040518060c0016040528060608152602001606081526020016060815260200160006001600160a01b0316815260200160006001600160a01b03168152602001606081525090565b8152602001906001900390816103dc5790505b50905060005b828110156108d2576000610455600283611de0565b90506000819050600080600080846001600160a01b031663732e8d736040518163ffffffff1660e01b815260040160006040518083038186803b15801561049b57600080fd5b505afa1580156104af573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104d791908101906120a2565b93509350935093506000845167ffffffffffffffff81111561050957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561056e57816020015b61055b6040518060800160405280600081526020016060815260200160006001600160a01b03168152602001600081525090565b8152602001906001900390816105275790505b50905060005b85518110156106815760405180608001604052808783815181106105a857634e487b7160e01b600052603260045260246000fd5b602002602001015181526020018683815181106105d557634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200185838151811061060257634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316815260200184838151811061063857634e487b7160e01b600052603260045260246000fd5b602002602001015181525082828151811061066357634e487b7160e01b600052603260045260246000fd5b602002602001018190525080806106799061255b565b915050610574565b506040518060c00160405280876001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156106c657600080fd5b505afa1580156106da573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107029190810190612251565b8152602001876001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561074057600080fd5b505afa158015610754573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261077c9190810190612251565b8152602001876001600160a01b0316637284e4166040518163ffffffff1660e01b815260040160006040518083038186803b1580156107ba57600080fd5b505afa1580156107ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107f69190810190612251565b8152602001876001600160a01b0316638cc402f66040518163ffffffff1660e01b815260040160206040518083038186803b15801561083457600080fd5b505afa158015610848573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086c9190612086565b6001600160a01b03168152602001886001600160a01b03168152602001828152508989815181106108ad57634e487b7160e01b600052603260045260246000fd5b60200260200101819052505050505050505080806108ca9061255b565b915050610440565b5092915050565b606060006108e76002611dd6565b90506000805b8281101561099b576000610902600283611de0565b6001600160a01b0316635da82b246040518163ffffffff1660e01b815260040160206040518083038186803b15801561093a57600080fd5b505afa15801561094e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109729190612284565b9050801561098857610985600184612513565b92505b50806109938161255b565b9150506108ed565b5060008167ffffffffffffffff8111156109c557634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a4157816020015b610a2e6040518060c0016040528060608152602001606081526020016060815260200160006001600160a01b0316815260200160006001600160a01b03168152602001606081525090565b8152602001906001900390816109e35790505b5090506000805b84811015610f64576000610a5d600283611de0565b905060008190506000816001600160a01b0316635da82b246040518163ffffffff1660e01b815260040160206040518083038186803b158015610a9f57600080fd5b505afa158015610ab3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad79190612284565b90508015610f4e57600080600080856001600160a01b03166375d1f1406040518163ffffffff1660e01b815260040160006040518083038186803b158015610b1e57600080fd5b505afa158015610b32573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b5a91908101906120a2565b93509350935093506000845167ffffffffffffffff811115610b8c57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610bf157816020015b610bde6040518060800160405280600081526020016060815260200160006001600160a01b03168152602001600081525090565b815260200190600190039081610baa5790505b50905060005b8551811015610d04576040518060800160405280878381518110610c2b57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001868381518110610c5857634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001858381518110610c8557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03168152602001848381518110610cbb57634e487b7160e01b600052603260045260246000fd5b6020026020010151815250828281518110610ce657634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610cfc9061255b565b915050610bf7565b506040518060c00160405280886001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015610d4957600080fd5b505afa158015610d5d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d859190810190612251565b8152602001886001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610dc357600080fd5b505afa158015610dd7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610dff9190810190612251565b8152602001886001600160a01b0316637284e4166040518163ffffffff1660e01b815260040160006040518083038186803b158015610e3d57600080fd5b505afa158015610e51573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e799190810190612251565b8152602001886001600160a01b0316638cc402f66040518163ffffffff1660e01b815260040160206040518083038186803b158015610eb757600080fd5b505afa158015610ecb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eef9190612086565b6001600160a01b03168152602001896001600160a01b03168152602001828152508b8b81518110610f3057634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610f4660018b612513565b995050505050505b5050508080610f5c9061255b565b915050610a48565b5090949350505050565b60606000610f7c6002611dd6565b90506000805b828110156110355733610f96600283611de0565b6001600160a01b0316638cc402f66040518163ffffffff1660e01b815260040160206040518083038186803b158015610fce57600080fd5b505afa158015610fe2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110069190612086565b6001600160a01b0316141561102357611020600183612513565b91505b8061102d8161255b565b915050610f82565b5060008167ffffffffffffffff81111561105f57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156110db57816020015b6110c86040518060c0016040528060608152602001606081526020016060815260200160006001600160a01b0316815260200160006001600160a01b03168152602001606081525090565b81526020019060019003908161107d5790505b5090506000805b84811015610f645760006110f7600283611de0565b90506000819050336001600160a01b0316816001600160a01b0316638cc402f66040518163ffffffff1660e01b815260040160206040518083038186803b15801561114157600080fd5b505afa158015611155573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111799190612086565b6001600160a01b0316141561157f57600080600080846001600160a01b031663732e8d736040518163ffffffff1660e01b815260040160006040518083038186803b1580156111c757600080fd5b505afa1580156111db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261120391908101906120a2565b93509350935093506000845167ffffffffffffffff81111561123557634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561129a57816020015b6112876040518060800160405280600081526020016060815260200160006001600160a01b03168152602001600081525090565b8152602001906001900390816112535790505b50905060005b85518110156113ad5760405180608001604052808783815181106112d457634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200186838151811061130157634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200185838151811061132e57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316815260200184838151811061136457634e487b7160e01b600052603260045260246000fd5b602002602001015181525082828151811061138f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525080806113a59061255b565b9150506112a0565b506040518060c00160405280876001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156113f257600080fd5b505afa158015611406573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261142e9190810190612251565b8152602001876001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561146c57600080fd5b505afa158015611480573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114a89190810190612251565b8152602001876001600160a01b0316637284e4166040518163ffffffff1660e01b815260040160006040518083038186803b1580156114e657600080fd5b505afa1580156114fa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115229190810190612251565b81523360208201526001600160a01b03891660408201526060018290528a518b908b90811061156157634e487b7160e01b600052603260045260246000fd5b602090810291909101015261157760018a612513565b985050505050505b5050808061158c9061255b565b9150506110e2565b606060006115a26002611dd6565b90506000805b8281101561165f5760006115bd600283611de0565b6040516370a0823160e01b81523360048201526001600160a01b0391909116906370a082319060240160206040518083038186803b1580156115fe57600080fd5b505afa158015611612573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116369190612284565b9050801561164c57611649600184612513565b92505b50806116578161255b565b9150506115a8565b5060008167ffffffffffffffff81111561168957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561170557816020015b6116f26040518060c0016040528060608152602001606081526020016060815260200160006001600160a01b0316815260200160006001600160a01b03168152602001606081525090565b8152602001906001900390816116a75790505b5090506000805b84811015610f64576000611721600283611de0565b6040516370a0823160e01b815233600482015290915081906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561176857600080fd5b505afa15801561177c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a09190612284565b90508015611b9f57600080600080856001600160a01b031663360a03746040518163ffffffff1660e01b815260040160006040518083038186803b1580156117e757600080fd5b505afa1580156117fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261182391908101906120a2565b93509350935093506000845167ffffffffffffffff81111561185557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156118ba57816020015b6118a76040518060800160405280600081526020016060815260200160006001600160a01b03168152602001600081525090565b8152602001906001900390816118735790505b50905060005b85518110156119cd5760405180608001604052808783815181106118f457634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200186838151811061192157634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200185838151811061194e57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316815260200184838151811061198457634e487b7160e01b600052603260045260246000fd5b60200260200101518152508282815181106119af57634e487b7160e01b600052603260045260246000fd5b602002602001018190525080806119c59061255b565b9150506118c0565b506040518060c00160405280886001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015611a1257600080fd5b505afa158015611a26573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611a4e9190810190612251565b8152602001886001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015611a8c57600080fd5b505afa158015611aa0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611ac89190810190612251565b8152602001886001600160a01b0316637284e4166040518163ffffffff1660e01b815260040160006040518083038186803b158015611b0657600080fd5b505afa158015611b1a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b429190810190612251565b81523360208201526001600160a01b038a1660408201526060018290528b518c908c908110611b8157634e487b7160e01b600052603260045260246000fd5b6020908102919091010152611b9760018b612513565b995050505050505b5050508080611bad9061255b565b91505061170c565b6001546001600160a01b03163314611c0f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161027a565b611c196000611dec565b565b6001546001600160a01b03163314611c755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161027a565b6001600160a01b038116611cf15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161027a565b611cfa81611dec565b50565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150506001600160a01b038116611db35760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640161027a565b919050565b6000611dcd836001600160a01b038416611e56565b90505b92915050565b6000611dd0825490565b6000611dcd8383611ea5565b600180546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000818152600183016020526040812054611e9d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155611dd0565b506000611dd0565b6000826000018281548110611eca57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b600082601f830112611eed578081fd5b81516020611f02611efd836124ef565b6124be565b80838252828201915082860187848660051b8901011115611f21578586fd5b855b85811015611f48578151611f36816125a2565b84529284019290840190600101611f23565b5090979650505050505050565b600082601f830112611f65578081fd5b81516020611f75611efd836124ef565b80838252828201915082860187848660051b8901011115611f94578586fd5b855b85811015611f4857815184529284019290840190600101611f96565b60008083601f840112611fc3578182fd5b50813567ffffffffffffffff811115611fda578182fd5b602083019150836020828501011115611ff257600080fd5b9250929050565b600082601f830112612009578081fd5b815167ffffffffffffffff8111156120235761202361258c565b612036601f8201601f19166020016124be565b81815284602083860101111561204a578283fd5b61205b82602083016020870161252b565b949350505050565b600060208284031215612074578081fd5b813561207f816125a2565b9392505050565b600060208284031215612097578081fd5b815161207f816125a2565b600080600080608085870312156120b7578283fd5b845167ffffffffffffffff808211156120ce578485fd5b6120da88838901611f55565b95506020915081870151818111156120f0578586fd5b8701601f81018913612100578586fd5b805161210e611efd826124ef565b8082825285820191508584018c878560051b870101111561212d57898afd5b895b8481101561216657815187811115612145578b8cfd5b6121538f8a838a0101611ff9565b855250928701929087019060010161212f565b505060408b0151909850945050505080821115612181578384fd5b61218d88838901611edd565b935060608701519150808211156121a2578283fd5b506121af87828801611f55565b91505092959194509250565b600080600080600080606087890312156121d3578182fd5b863567ffffffffffffffff808211156121ea578384fd5b6121f68a838b01611fb2565b9098509650602089013591508082111561220e578384fd5b61221a8a838b01611fb2565b90965094506040890135915080821115612232578384fd5b5061223f89828a01611fb2565b979a9699509497509295939492505050565b600060208284031215612262578081fd5b815167ffffffffffffffff811115612278578182fd5b61205b84828501611ff9565b600060208284031215612295578081fd5b5051919050565b600081518084526020808501808196508360051b81019150828601855b8581101561231657828403895281516080815186528682015181888801526122e38288018261234c565b6040848101516001600160a01b0316908901526060938401519390970192909252505097840197908401906001016122b9565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000815180845261236481602086016020860161252b565b601f01601f19169290920160200192915050565b60006020808301818452808551808352604092508286019150828160051b870101848801865b8381101561244b57603f19898403018552815160c081518186526123c48287018261234c565b915050888201518582038a8701526123dc828261234c565b91505087820151858203898701526123f4828261234c565b9150506060808301516001600160a01b0380821683890152608092508083860151168389015250505060a08083015192508582038187015250612437818361229c565b96890196945050509086019060010161239e565b509098975050505050505050565b60a08152600061246d60a083018a8c612323565b828103602084015261248081898b612323565b90508281036040840152612495818789612323565b9150506001600160a01b0380851660608401528084166080840152509998505050505050505050565b604051601f8201601f1916810167ffffffffffffffff811182821017156124e7576124e761258c565b604052919050565b600067ffffffffffffffff8211156125095761250961258c565b5060051b60200190565b6000821982111561252657612526612576565b500190565b60005b8381101561254657818101518382015260200161252e565b83811115612555576000848401525b50505050565b600060001982141561256f5761256f612576565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611cfa57600080fdfea26469706673582212209d9f6bab99ce98a929f5e44f5017e2eb2288eace3cf651abe09eba43f453677364736f6c63430008040033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Marketplace";
  }

  deploy(
    _nftContractImplementation: string,
    _woofyContractAddr: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Marketplace> {
    return super.deploy(
      _nftContractImplementation,
      _woofyContractAddr,
      overrides || {}
    ) as Promise<Marketplace>;
  }
  getDeployTransaction(
    _nftContractImplementation: string,
    _woofyContractAddr: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nftContractImplementation,
      _woofyContractAddr,
      overrides || {}
    );
  }
  attach(address: string): Marketplace {
    return super.attach(address) as Marketplace;
  }
  connect(signer: Signer): Marketplace__factory {
    return super.connect(signer) as Marketplace__factory;
  }
  static readonly contractName: "Marketplace";
  public readonly contractName: "Marketplace";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new utils.Interface(_abi) as MarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Marketplace {
    return new Contract(address, _abi, signerOrProvider) as Marketplace;
  }
}