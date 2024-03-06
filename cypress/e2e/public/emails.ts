export enum emails {
  PREREGISTERED = "rixo.auto.test+preregistered@gmail.com",
  NOT_CONFIRMED = "rixo.auto.test+newnotconfirmemail@gmail.com",
  ACTIVE = "rixo.auto.test+active@gmail.com",
}

export const ACTIVE_PASSWORD = "Aa111111";

export const REGISTRATION_DATA_NOT_CONFIRMED = {
  accountExists: true,
  preregistered: false,
  publicWizardCapable: false,
  viaApple: false,
  viaFacebook: false,
  viaGoogle: false,
  withPassword: true,
  source: "WEB_ONBOARDING",
};

export const REGISTRATION_DATA_ACTIVE = {
  accountExists: true,
  preregistered: false,
  publicWizardCapable: true,
  viaApple: false,
  viaFacebook: false,
  viaGoogle: false,
  withPassword: true,
  source: "WEB_ONBOARDING",
};

export const REGISTRATION_DATA_PREREGISTERED = {
  accountExists: true,
  preregistered: true,
  publicWizardCapable: true,
  viaApple: false,
  viaFacebook: false,
  viaGoogle: false,
  withPassword: false,
};
