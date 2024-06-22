import { APIResponse } from "@/utils/APIResponse";

export async function GET() {
  return Response.json(
    new APIResponse(200, {}, "CFP-Insights API Status OK !")
  );
}
