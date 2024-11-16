"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface AppointmentDialogProps {
  treatment?: string;
  location?: string;
}

export function AppointmentDialog({ treatment, location }: AppointmentDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white mt-6">
          Termin vereinbaren
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Termin vereinbaren</DialogTitle>
          <DialogDescription>
            Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" placeholder="Ihr vollständiger Name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-Mail
            </label>
            <Input id="email" type="email" placeholder="ihre.email@beispiel.com" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefon
            </label>
            <Input id="phone" type="tel" placeholder="+41 XX XXX XX XX" />
          </div>
          {treatment && (
            <div className="grid gap-2">
              <label htmlFor="treatment" className="text-sm font-medium">
                Behandlung
              </label>
              <Input id="treatment" value={treatment} disabled />
            </div>
          )}
          {location && (
            <div className="grid gap-2">
              <label htmlFor="location" className="text-sm font-medium">
                Standort
              </label>
              <Input id="location" value={location} disabled />
            </div>
          )}
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Nachricht (Optional)
            </label>
            <Textarea 
              id="message" 
              placeholder="Zusätzliche Informationen oder Wünsche"
              className="min-h-[100px]"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Abbrechen
          </Button>
          <Button 
            className="bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white"
            onClick={() => {
              // Hier kommt die Logik zum Senden des Formulars
              setOpen(false);
            }}
          >
            Termin anfragen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 