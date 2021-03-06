export const Errors = {
  TX_REQUIRED: {
    code: 1,
    message: "Transaction is required.",
    retriable: true,
  },
  TX_HASH_REQUIRED: {
    code: 2,
    message: "Transaction hash is required.",
    retriable: true,
  },
  BLOCK_REQUIRED: {
    code: 3,
    message: "Block is required.",
    retriable: true,
  },
  BLOCK_HEIGHT_REQUIRED: {
    code: 4,
    message: "Block height is required.",
    retriable: true,
  },
  BLOCK_HASH_MISMATCH: {
    code: 5,
    message: "Block hash mismatch.",
    retriable: true,
  },
  ACCOUNT_REQUIRED: {
    code: 6,
    message: "Account is required.",
    retriable: true,
  },
  ADDRESS_REQUIRED: {
    code: 7,
    message: "Address is required.",
    retriable: true,
  },
  NETWORK_REQUIRED: {
    code: 8,
    message: "Network is required.",
    retriable: true,
  },
  OPTIONS_REQUIRED: {
    code: 9,
    message: "Options is required.",
    retriable: true,
  },
  INVALID_NETWORK: {
    code: 10,
    message: "Invalid network.",
    retriable: true,
  },
  INVALID_BLOCKCHAIN: {
    code: 11,
    message: "Invalid blockchain.",
    retriable: true,
  },
  INVALID_TX: {
    code: 12,
    message: "Invalid transaction.",
    retriable: true,
  },
  INVALID_SIGNED_TX: {
    code: 13,
    message: "Invalid signed transaction.",
    retriable: true,
  },
  BLOCK_NOT_FOUND: {
    code: 14,
    message: "Block not found.",
    retriable: true,
  },
  TX_NOT_FOUND: {
    code: 15,
    message: "Transaction not found.",
    retriable: true,
  },
  VIEW_NOT_FOUND: {
    code: 16,
    message: "Coin view not found.",
    retriable: true,
  },
  TX_RELAY_ERROR: {
    code: 17,
    message: "Error relaying transaction.",
    retriable: false,
  },
  QUERY_NOT_SUPPORTED: {
    code: 18,
    message: "Query not supported",
    retriable: false,
  },
  CURVE_NOT_SUPPORTED: {
    code: 19,
    message: "Curve not supported",
    retriable: false,
  },
  UNKNOWN_ERROR: {
    code: 32,
    message: "Unknown error.",
    retriable: false,
  },
};
