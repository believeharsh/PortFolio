import React from "react";
import {
  LogOutIcon,
  LogInIcon,
  LocateIcon,
  Handshake,
  LocateFixed,
  ArrowUpDown,
  Mail,
  FileText,
  Send
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  "log-out": LogOutIcon,
  "log-in": LogInIcon,
  "location-pin": LocateIcon,
  "handshake": Handshake,
  "locate-fixed": LocateFixed,
  "arrow-up-down": ArrowUpDown,
  "mail": Mail,
  "file-text": FileText,
  "send" : Send, 
};


export default iconMap ; 