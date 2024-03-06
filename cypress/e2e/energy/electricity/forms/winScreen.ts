import {Providers} from "../../../../enums/providers";

export const testWinScreen = (email, forms) => {

    cy.contains("Co se teď bude dít?");
    if((forms.provider === Providers.INNOGY) ||
        (forms.provider === Providers.YELLO) ||
        (forms.provider === Providers.CENTROPOL)) {
        cy.contains("Děkujeme za důvěru!");
        cy.contains("Podepsané dokumenty odešleme k novému dodavateli.");
        cy.contains("Nový dodavatel se vám následně ozve s termínem zahájení dodávky.");
        cy.contains("Dokumenty jsme vám také poslali na: ");
        cy.contains(email.email);
    }else if ((forms.provider === Providers.EON) || (forms.provider === Providers.DOBRA_ENERGIE)) {
        cy.contains("Děkujeme za důvěru");
        cy.contains("Bude vás kontaktovat náš specialista, který s vámi připraví smlouvu.");
        cy.contains("Smlouvu s dalšími dokumenty obdržíte na e-mail.");
        cy.contains("Dokumenty si prosím zkontrolujte a podepište dle instrukcí.");
        cy.contains("O vše ostatní se postará nový dodavatel.");
    }else if (forms.provider === Providers.MND) {
        cy.contains("Děkujeme za důvěru!");
        cy.contains("Nový dodavatel vám pošle smlouvu k podpisu na ");
        cy.contains(forms.email);
        cy.contains("Smlouvu podepíšete elektronicky myší na počítači nebo prstem na telefonu.");
        cy.contains("Nový dodavatel se vám následně ozve s termínem zahájení dodávky.");
    }
};