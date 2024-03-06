import {LIFE_WIZARD_URL} from "../../../../enums/paths";
import {fillAndTestBasicInformation} from "../forms/basicInformation";
import {fillAndTestHealthStatus} from "../forms/healthStatus";
import {fillAndTestFinancialSituation} from "../forms/financialSituation";
import {fillAndTestContactInfo} from "../forms/contactInfo";
import {fillAndTestDiscounts} from "../forms/discounts";
import {cloneDeep} from 'lodash';
import {testAndFillLoginStep} from "../../../public/shared/login/login";
import {lifeFullWizardPreregisteredData, lifeInputData} from "../data/data.client";
import {ACTIVE_PASSWORD, emails, REGISTRATION_DATA_NOT_CONFIRMED} from "../../../public/emails";


export const testLifeWizard = (
    lifeInputData,
    lifeRequestData,
    lifeUpdateData
) => {
    cy.visit(LIFE_WIZARD_URL);
    cy.wait("@unemploymentTypesEnum");
    fillAndTestBasicInformation(lifeInputData.BASIC_INFORMATION);
    fillAndTestHealthStatus(lifeInputData.HEALTH_STATUS);
    fillAndTestFinancialSituation(lifeInputData.FINANCIAL_STATUS);
    fillAndTestContactInfo(lifeInputData.CONTACT_INFO);

    let wizardPublicId;
    cy.wait("@service-request").should((interception) => {
        const dataToCheck = interception.request.body;
        wizardPublicId = interception.response.body.publicId;
        expect(dataToCheck).to.deep.include(lifeRequestData);
        expect(interception.response.statusCode).to.eq(202);
    });
    cy.wait("@sportsEnum");
    cy.wait("@occupationsEnum");
    fillAndTestDiscounts(lifeInputData.DISCOUNTS);

    cy.wait("@final").should((interception) => {
        const finalDataToCheck = {...interception.request.body};
        const wizardUpdateData = cloneDeep(finalDataToCheck);

        delete finalDataToCheck.affiliateId;
        delete finalDataToCheck.data.OCCUPATION_REFERENCE;
        expect(wizardUpdateData).to.haveOwnProperty("affiliateId").not.null;
        expect(wizardUpdateData.data).to.haveOwnProperty("OCCUPATION_REFERENCE").not.null;
        expect(interception.response.statusCode).to.eq(202);
        expect(interception.request.url).to.have.string(wizardPublicId);
        expect(finalDataToCheck).to.deep.include(lifeUpdateData);
    });
};

export const testLifeWizardActiveClient = (
    lifeInputData,
    lifeRequestData,
    lifeUpdateData
) => {
    cy.visit(LIFE_WIZARD_URL);
    cy.wait("@unemploymentTypesEnum");
    fillAndTestBasicInformation(lifeInputData.BASIC_INFORMATION);
    fillAndTestHealthStatus(lifeInputData.HEALTH_STATUS);
    fillAndTestFinancialSituation(lifeInputData.FINANCIAL_STATUS);
    fillAndTestContactInfo(lifeInputData.CONTACT_INFO);
    testAndFillLoginStep(
        "Životní a úrazové pojištění",
        "Pokračovat",
        "Přihlášení"
    );
    let wizardPublicId;
    cy.wait("@service-request").should((interception) => {
        const dataToCheck = {...lifeFullWizardPreregisteredData(emails.ACTIVE, false)};
        wizardPublicId = interception.response.body.publicId;
        expect(interception.request.body).to.deep.include(
            {...dataToCheck,
                publicUserIdentification: {
                ...dataToCheck.publicUserIdentification,
                accountVerification: {password: ACTIVE_PASSWORD},
                }
            }
        );
        expect(interception.response.statusCode).to.eq(202);
    });
    cy.wait("@sportsEnum");
    cy.wait("@occupationsEnum");
    fillAndTestDiscounts(lifeInputData.DISCOUNTS);

    cy.wait("@final").should((interception) => {
        const finalDataToCheck = {...interception.request.body};
        const wizardUpdateData = cloneDeep(finalDataToCheck);
        const sportsCount = lifeInputData.DISCOUNTS.sport.length;

        delete finalDataToCheck.affiliateId;
        delete finalDataToCheck.data.OCCUPATION_REFERENCE;
        delete finalDataToCheck.data.SPORTS;
        expect(wizardUpdateData).to.haveOwnProperty("affiliateId").not.null;
        expect(wizardUpdateData.data).to.haveOwnProperty("OCCUPATION_REFERENCE").not.null;
        expect(wizardUpdateData.data.SPORTS.list.length).to.eq(sportsCount);
        expect(interception.response.statusCode).to.eq(202);
        expect(interception.request.url).to.have.string(wizardPublicId);
        expect(finalDataToCheck).to.deep.include(lifeUpdateData);
    });
};

export const testLifeWizardNotConfirmedClient = (
    InputData,
) => {
    cy.visit(LIFE_WIZARD_URL);
    cy.wait("@unemploymentTypesEnum");
    fillAndTestBasicInformation(InputData.BASIC_INFORMATION);
    fillAndTestHealthStatus(InputData.HEALTH_STATUS);
    fillAndTestFinancialSituation(InputData.FINANCIAL_STATUS);
    const data = {...lifeInputData.CONTACT_INFO, email: emails.NOT_CONFIRMED};
    fillAndTestContactInfo(data);
    cy.wait("@registration-data", { timeout: 5000 }).then((interception) => {
        expect(interception.response.statusCode).eql(200);
        expect(interception.response.body).eql(REGISTRATION_DATA_NOT_CONFIRMED);
        cy.contains(
            "Při zpracování nastala chyba. Prosím zkuste to za chvíli, nebo nás kontaktujte."
        );
    });
};
