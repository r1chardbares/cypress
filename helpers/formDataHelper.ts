import { CyHttpMessages } from "cypress/types/net-stubbing";
import { parse } from "parse-multipart-data";
import { Buffer } from "buffer";

interface IMultipartBody {
  data: {
    [key: string]: string | number | boolean;
  }
}


export const getBodyFromFormData = (
  request?: CyHttpMessages.IncomingRequest
): null | IMultipartBody => {
  if (!request) {
    return null;
  }
  const boundary = (request.headers?.["content-type"] as string)?.split(
    "boundary="
  )?.[1];

  const multiPartSections = parse(Buffer.from(request.body), boundary);

  const jsonSection = multiPartSections.find(
    (item) => item.type === "application/json" && item.name === "body"
  );

  if (!jsonSection) {
    return null;
  }

  const jsonString = Buffer.from(jsonSection.data).toString("utf8");

  const parsedData = JSON.parse(jsonString);

  return parsedData;
};
