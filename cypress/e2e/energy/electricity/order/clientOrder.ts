import { testOffersForm } from "../forms/offers";
import { testAndFillAdditionalInformationStep } from "../forms/additionalInformation";
import { testAndFillPaymentsStep } from "../forms/payments";
import { testAndFillSignatureStep } from "../forms/signature";
import { cloneDeep } from "lodash";
import { getBodyFromFormData } from "../../../../../helpers/formDataHelper";
import { testWinScreen } from "../forms/winScreen";
import { PaymentType, RefundType } from "../../../../enums/paymentType";
import { testAndFillDemandStep } from "../forms/demand";
import { Providers } from "../../../../enums/providers";
import { testAndFillContractTerminationStep } from "../forms/contractTermination";

export const clientOrderElectricity = (
  wizardInputData,
  orderInputData,
  orderRequestData,
  orderSignatureData,
  orderRequestDataV2?: object
) => {
  testOffersForm(orderInputData);
  testAndFillAdditionalInformationStep(orderInputData);
  cy.wait("@arrangement-data").should((interception) => {
    const dataToCheck = { ...interception.request.body };
    const modifiedData = cloneDeep(dataToCheck);
    delete dataToCheck.data.currentElectricityProvider;
    expect(modifiedData.data).to.haveOwnProperty("currentElectricityProvider")
      .not.null;
    expect(dataToCheck).to.deep.include(orderRequestData);
    expect(interception.response.statusCode).to.eq(200);
  });
  cy.wait("@banks");
  testAndFillPaymentsStep(orderInputData);
  cy.wait("@with-files", { timeout: 10000 }).then((interception) => {
    const parsedData = getBodyFromFormData(interception.request);
    const modifiedData = cloneDeep(parsedData);
    if (
      (orderSignatureData.data.monthlyDepositPaymentType ===
        PaymentType.PAYMENT_ORDER &&
        orderSignatureData.data.monthlyDepositRefundType ===
          RefundType.BANK_TRANSFER) ||
      (orderSignatureData.data.monthlyDepositPaymentType === PaymentType.SIPO &&
        orderSignatureData.data.monthlyDepositRefundType ===
          RefundType.BANK_TRANSFER) ||
      orderSignatureData.data.monthlyDepositPaymentType ===
        PaymentType.DIRECT_DEBIT
    ) {
      delete parsedData.data.bank;
      expect(modifiedData.data).to.haveOwnProperty("bank").not.null;
    }
    delete parsedData.data.currentElectricityProvider;
    expect(modifiedData.data).to.haveOwnProperty("currentElectricityProvider")
      .not.null;
    expect(parsedData).to.deep.include(orderSignatureData);
    expect(interception.response.statusCode).to.eq(200);
  });
  if (orderInputData.provider === Providers.YELLO) {
    testAndFillContractTerminationStep(orderInputData);
    //Need 2times wait, because EP arrangement-data are 3times calls
    cy.wait("@arrangement-data")
      .wait("@arrangement-data")
      .should((interception) => {
        const dataToCheck = { ...interception.request.body };
        const modifiedData = cloneDeep(dataToCheck);
        const latestElectricityBillingCount =
          orderInputData.latestElectricityBilling.length;
        delete dataToCheck.data.bank;
        delete dataToCheck.data.currentElectricityProvider;
        delete dataToCheck.data.latestElectricityBilling;
        expect(modifiedData.data).to.haveOwnProperty("bank").not.null;
        expect(modifiedData.data).to.haveOwnProperty(
          "currentElectricityProvider"
        ).not.null;
        expect(modifiedData.data.latestElectricityBilling.length).to.eq(
          latestElectricityBillingCount
        );
        expect(dataToCheck).to.deep.include(orderRequestDataV2);
        expect(interception.response.statusCode).to.eq(200);
      });
  }
  cy.wait("@documents", { timeout: 15000 });
  testAndFillSignatureStep(orderInputData);
  cy.wait(20000);
  testWinScreen(wizardInputData, orderInputData);
};

export const clientSendDemand = (
  wizardInputData,
  orderInputData,
  orderRequestData
) => {
  testOffersForm(orderInputData);
  testAndFillDemandStep(orderInputData);
  cy.wait("@arrangement-data").should((interception) => {
    const dataToCheck = { ...interception.request.body };
    expect(dataToCheck).to.deep.include(orderRequestData);
    expect(interception.response.statusCode).to.eq(200);
  });
  cy.wait(5000);
  testWinScreen(wizardInputData, orderInputData);
};
