import { Message } from "@/models/User.Model";

export interface ApiResponse {
  Success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
}

