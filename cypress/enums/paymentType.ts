export enum PaymentType {
    PAYMENT_ORDER = "PAYMENT_ORDER", //Bankovni ucet
    DIRECT_DEBIT = "DIRECT_DEBIT", //Inkaso
    SIPO = "SIPO", // Sipo
}

export enum RefundType {
    BANK_TRANSFER = "BANK_TRANSFER", //Bankovni ucet
    DEPOSIT_TRANSFER = "DEPOSIT_TRANSFER", //Do nasledujicich zaloh
    SLIP = "SLIP", //Slozenka
}