/**
 * Function which fill and test Electricity Signature step.
 */
import {Providers} from "../../../../enums/providers";

export const testAndFillSignatureStep = (forms) => {
    cy.contains("A na závěr podpis");
    cy.contains("Smluvní dokumentace");
    cy.contains("Dokumenty k podpisu");
    if(forms.provider === Providers.INNOGY) {
        cy.contains("Souhlasím s Ceníkem");
        cy.contains("Souhlasím s Ceníkem služeb");
        cy.contains("Souhlasím s Obchodními podmínkami");
        cy.contains("Souhlasím s Úvodem ke smlouvě");
        cy.contains("Souhlasím s Návrhem smlouvy");
        cy.contains("Souhlasím s Plnou mocí");
        cy.setCheckbox("priceListApproval", true);
        cy.setCheckbox("servicePriceListApproval", true);
        cy.setCheckbox("termsAndConditionsApproval", true);
        cy.setCheckbox("preContractualInformationApproval", true);
        cy.setCheckbox("contractPreviewApproval", true);
        cy.setCheckbox("powerOfAttorneyApproval", true);
        cy.getElementByName("approveAll").should('be.checked');
        cy.getElementByName("priceListApproval").should('be.checked');
        cy.getElementByName("servicePriceListApproval").should('be.checked');
        cy.getElementByName("termsAndConditionsApproval").should('be.checked');
        cy.getElementByName("preContractualInformationApproval").should('be.checked');
        cy.getElementByName("contractPreviewApproval").should('be.checked');
        cy.getElementByName("powerOfAttorneyApproval").should('be.checked');
        cy.get("canvas").click(100, 50);
        cy.buttonClick("Přejít k uzavření smlouvy");
        cy.contains("Potvrzení přijetí");
        cy.contains("nabídky energií");
        cy.contains("Stisknutím tlačítka závazně akceptuji nabídku na dodávku energií dle výše uvedené smluvní dokumentace, čímž dochází k uzavření smlouvy.");
        cy.buttonClick("Uzavřít smlouvu");
    }else {
        cy.contains("Ceník");
        cy.contains("Ceník služeb");
        cy.contains("Obchodní podmínky");
        if(forms.provider === Providers.YELLO) {
            cy.contains("Návrh smlouvy na odběr energií");
            cy.contains("Plná moc pro nového dodavatele");

        }else if (forms.provider === Providers.CENTROPOL) {
            cy.contains("Předsmluvní informace");
            cy.contains("Návrh smlouvy na odběr energií");
            cy.contains("Plná moc pro nového dodavatele");
        }
        cy.get("canvas").click(100, 50);
        cy.buttonClick("Dokončit objednávku");
    }
};