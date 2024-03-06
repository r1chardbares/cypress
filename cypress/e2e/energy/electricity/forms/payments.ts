import {Providers} from "../../../../enums/providers";
import {PaymentType, RefundType} from "../../../../enums/paymentType";
import {isEmpty} from "rxjs";

export const testAndFillPaymentsStep = (forms) => {
    cy.contains("Platby a vyúčtování");
    cy.getElementByName("monthlyDepositAmount").clear();
    cy.getElementByName("monthlyDepositAmount").fill(forms.monthlyDepositAmount);
    cy.contains("Jakým způsobem chcete platit?");
    cy.setRadioButton("monthlyDepositPaymentType",
        forms.monthlyDepositPaymentType);
    if(forms.provider === Providers.MND) {
        if (forms.monthlyDepositPaymentType === PaymentType.SIPO) {
            cy.getElementByName("sipoNumber").fill(forms.sipoNumber);
        }
        if (forms.bankAccountPrefix) {
            cy.getElementByName("bankAccountPrefix").fill(forms.bankAccountPrefix);
        }
        cy.getElementByName("bankAccountNumber").fill(forms.bankAccountNumber);
        cy.get(`[data-testid="select-bank"]`).eq(0)
            .click().type(`${forms.bankCode}{enter}`);
    }
    else {
        cy.contains("Kam chcete posílat případné přeplatky?");
        switch (forms.monthlyDepositPaymentType) {
            case PaymentType.SIPO:
            case PaymentType.PAYMENT_ORDER:
                if(forms.monthlyDepositPaymentType === PaymentType.SIPO) {
                    cy.getElementByName("sipoNumber").fill(forms.sipoNumber);
                }
                if(forms.monthlyDepositRefundType === RefundType.BANK_TRANSFER) {
                    cy.setRadioButton("monthlyDepositRefundType",
                        forms.monthlyDepositRefundType);
                    if (forms.bankAccountPrefix) {
                        cy.getElementByName("bankAccountPrefix").fill(forms.bankAccountPrefix);
                    }
                    cy.getElementByName("bankAccountNumber").fill(forms.bankAccountNumber);
                    cy.get(`[data-testid="select-bank"]`).eq(1)
                        .click().type(`${forms.bankCode}{enter}`);
                }
                else if((forms.monthlyDepositRefundType === RefundType.DEPOSIT_TRANSFER) ||
                    (forms.monthlyDepositRefundType === RefundType.SLIP)) {
                    cy.setRadioButton("monthlyDepositRefundType", forms.monthlyDepositRefundType);
                }
            break;
            case PaymentType.DIRECT_DEBIT:
                if (forms.bankAccountPrefix) {
                    cy.getElementByName("bankAccountPrefix").fill(forms.bankAccountPrefix);
                }
                cy.getElementByName("bankAccountNumber").fill(forms.bankAccountNumber);
                cy.get(`[data-testid="select-bank"]`).eq(0)
                    .click().type(`${forms.bankCode}{enter}`);
                cy.setRadioButton("monthlyDepositRefundType", forms.monthlyDepositRefundType);
            break;
        }
        if((forms.provider === Providers.CENTROPOL) || (forms.provider === Providers.INNOGY)) {
            cy.setRadioButton("currentElectricityContractIndefinite",
                forms.currentElectricityContractIndefinite);
            if(forms.currentElectricityContractIndefinite === false) {
                cy.contains("Kdy vám končí stávající smlouva?");
                cy.getElementByName("currentElectricityContractEndDate")
                    .type(forms.currentElectricityContractEndDate);
                cy.get("body").click(0,0); // To hide datePicker
            }
            cy.contains("Budete chtít abychom za vás vypověděli stávajícího dodavatele?");
            cy.setRadioButton(
                "providerTerminatesCurrentContract", forms.providerTerminatesCurrentContract
            );
        }
        cy.contains("Nahrajte nám prosím kompletní poslední vyúčtování od vašeho stávajícího dodavatele (všechny strany a čitelně).");
        cy.contains("Nemáte vyúčtování? Nahrajte prosím svou současnou smlouvu nebo opis smluvních údajů.");
        cy.get("input[type=file]").attachFile(forms.latestElectricityBilling);
    }
    cy.buttonClick("Pokračovat");
};