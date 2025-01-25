export enum PixDestination {
  CLIENT = "to_client",
  ENTERPRISE = "to_enterprise",
}


export interface PixData {
  clientId: string;
  pix_key: string;
  destination: PixDestination;
  description: string
  amount: number;
}
