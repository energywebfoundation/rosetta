import { Injectable } from "@nestjs/common";
import { ethers } from "ethers";

@Injectable()
export class ConstructionService {
  public derive(bytes: string) {
    return ethers.utils.computeAddress(bytes);
  }

  public hash(signedTransaction: string) {
    const transaction = ethers.utils.parseTransaction(signedTransaction);

    return transaction.hash;
  }
}
