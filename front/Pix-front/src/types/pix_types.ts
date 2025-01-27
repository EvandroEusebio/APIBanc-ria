export enum PixDestination {
  CLIENT = "to_client",
  ENTERPRISE = "to_enterprise",
}


export interface PixData {
  id: number;
  clientId: number
  clients: {
    name: string
  };
  pix_key: string;
  destination: PixDestination;
  description: string;
  amount: number;
  createdAt: string
}
