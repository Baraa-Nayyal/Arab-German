import { Button, CircularProgress, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import React from "react";
import { useToast } from "../hooks/useToast";

const Contact = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    // .sendForm(
    //   "YOUR_SERVICE_ID",
    //   "YOUR_TEMPLATE_ID",
    //   form.current,
    //   "YOUR_PUBLIC_KEY"
    // )
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_tpeizy6",
          "template_fcw12he",
          form.current,
          "-ytTra3Oo2wfOwFNd"
        )
        .then(
          () => {
            setLoading(false);
            toast("Danke, dass sie uns kontaktiert haben!", "success", 2000);
          },
          (error) => {
            setLoading(false);
            toast(
              `Kontaktaufnahme fehlgeschlagen! ${error.text}`,
              "error",
              2000
            );
          }
        );
    }
  };

  return (
    <div id="sec7" className="h-fit  relative">
      <div className="twoOverlay h-full w-full absolute z-10"></div>
      <div className="z-20 relative mx-auto py-10">
        <h1 className="mt-0  text-center  block">Kontakt</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-2 mx-auto w-auto lg:w-[70%] gap-4 px-10"
        >
          <div>
            <label className="block">
              Vorname <span className="text-[#219dbc]">*</span>
            </label>
            <TextField
              required
              name="firstName"
              placeholder="Vorname"
              fullWidth
            />
          </div>
          <div>
            <label className="block">
              Nachname <span className="text-[#219dbc]">*</span>
            </label>
            <TextField
              required
              name="lastName"
              placeholder="Nachname"
              fullWidth
            />
          </div>
          <div>
            <label className="block">
              E-Mail <span className="text-[#219dbc]">*</span>
            </label>
            <TextField
              required
              type="email"
              name="email"
              placeholder="E-Mail"
              fullWidth
            />
          </div>
          <div>
            <label className="block">
              Telefon <span className="text-[#219dbc]">*</span>
            </label>
            <TextField
              type="number"
              required
              name="phone"
              placeholder="Telefon"
              fullWidth
            />
          </div>
          <div className="col-span-2">
            <label className="block">
              Nachricht <span className="text-[#219dbc]">*</span>
            </label>
            <TextField
              required
              name="message"
              placeholder="Meine Nachricht"
              fullWidth
              multiline
              rows={5}
            />
          </div>
          <div className="col-span-2 mx-auto">
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "200px",
                backgroundColor: "#50B9C3",
                "&:hover": {
                  backgroundColor: "#409ca3",
                },
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Absenden"}
            </Button>
          </div>
        </form>
    
      </div>
    </div>
  );
};

export default Contact;
