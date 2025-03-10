declare namespace Email {
    type Attachment =
      | {
          name: string;
          path: string;
        }
      | {
          name: string;
          data: string; // base64 format
        };
  
    interface EmailData {
      Host: string
      Username:string
      Password:string
      To: string | string[];
      From: string;
      Subject: string;
      Body: string;
      Attachments?: Attachment[];
    }
  
    function send(email: EmailData): Promise<string>;
  }